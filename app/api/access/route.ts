import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const ACCESS_COOKIE_NAME = 'portfolio_access'
const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const PRIVATE_VISIBILITY_MODE = 'private'

function normalizeCredential(value: string | undefined) {
  return value?.trim() ?? ''
}

function isPrivateVisibilityEnabled() {
  return normalizeCredential(process.env.PORTFOLIO_VISIBILITY).toLowerCase() === PRIVATE_VISIBILITY_MODE
}

function getSafeRedirectPath(value: FormDataEntryValue | null) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) {
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

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const nextPath = getSafeRedirectPath(formData.get('next'))

  if (!isPrivateVisibilityEnabled()) {
    return NextResponse.redirect(new URL(nextPath, request.url), { status: 303 })
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

  const submittedUsername = normalizeCredential(formData.get('username')?.toString())
  const submittedPassword = normalizeCredential(formData.get('password')?.toString())

  if (submittedUsername !== configuredUsername || submittedPassword !== configuredPassword) {
    const loginUrl = new URL('/access', request.url)
    loginUrl.searchParams.set('error', 'invalid')

    if (nextPath !== '/') {
      loginUrl.searchParams.set('next', nextPath)
    }

    return NextResponse.redirect(loginUrl, { status: 303 })
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url), { status: 303 })

  response.cookies.set({
    name: ACCESS_COOKIE_NAME,
    value: await createAccessToken(configuredUsername, configuredPassword),
    httpOnly: true,
    sameSite: 'lax',
    secure: request.nextUrl.protocol === 'https:' || process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: ACCESS_COOKIE_MAX_AGE,
  })

  return response
}
