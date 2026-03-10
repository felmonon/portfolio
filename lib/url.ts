export function normalizeExternalUrl(url: string): string {
  const trimmed = url.trim()
  const matches = trimmed.match(/https?:\/\/[^\s]+/g)

  if (matches && matches.length > 0) {
    return matches[matches.length - 1]
  }

  if (/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(trimmed)) {
    return `https://${trimmed}`
  }

  return trimmed
}
