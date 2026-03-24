import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const ACCESS_COOKIE_NAME = 'portfolio_access'
const PRIVATE_VISIBILITY_MODE = 'private'

const PUBLIC_PATH_PREFIXES = ['/access', '/api/access', '/_next']
const PUBLIC_PATHS = new Set(['/favicon.ico'])

function normalizeCredential(value: string | undefined) {
  return value?.trim() ?? ''
}

function isPrivateVisibilityEnabled() {
  return normalizeCredential(process.env.PORTFOLIO_VISIBILITY).toLowerCase() === PRIVATE_VISIBILITY_MODE
}

function isPublicPath(pathname: string) {
  if (PUBLIC_PATHS.has(pathname)) {
    return true
  }

  return PUBLIC_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

function getSafeRedirectPath(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/'
  }

  return value
}

async function createAccessToken(username: string, password: string) {
  const payload = new TextEncoder().encode(`portfolio:${username}:${password}`)
  const digest = await crypto.subtle.digest('SHA-256', payload)

  return Array.from(new Uint8Array(digest), (value) => value.toString(16).padStart(2, '0')).join(
    ''
  )
}

export async function middleware(request: NextRequest) {
  if (!isPrivateVisibilityEnabled()) {
    return NextResponse.next()
  }

  const configuredUsername = normalizeCredential(process.env.BASIC_AUTH_USERNAME)
  const configuredPassword = normalizeCredential(process.env.BASIC_AUTH_PASSWORD)

  if (!configuredUsername || !configuredPassword) {
    return new NextResponse('Site access is not configured.', {
      status: 503,
      headers: {
        'Cache-Control': 'private, no-store',
      },
    })
  }

  const { pathname, search } = request.nextUrl
  const expectedToken = await createAccessToken(configuredUsername, configuredPassword)
  const sessionToken = request.cookies.get(ACCESS_COOKIE_NAME)?.value

  if (isPublicPath(pathname)) {
    if (pathname === '/access' && sessionToken === expectedToken) {
      const nextPath = getSafeRedirectPath(request.nextUrl.searchParams.get('next'))
      return NextResponse.redirect(new URL(nextPath, request.url))
    }

    return NextResponse.next()
  }

  if (sessionToken === expectedToken) {
    return NextResponse.next()
  }

  const redirectUrl = new URL('/access', request.url)
  redirectUrl.searchParams.set('next', `${pathname}${search}`)

  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: '/:path*',
}
