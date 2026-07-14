import { readFile } from 'node:fs/promises'

const data = JSON.parse(
  await readFile(new URL('../content/portfolio.json', import.meta.url), 'utf8')
)

const verifiedAt = new Date(`${data.verification.date}T00:00:00Z`)
const ageDays = Math.floor((Date.now() - verifiedAt.getTime()) / 86_400_000)

if (!Number.isFinite(ageDays) || ageDays < 0) {
  throw new Error(`Invalid portfolio verification date: ${data.verification.date}`)
}

if (ageDays > data.verification.maxAgeDays) {
  throw new Error(
    `Portfolio metrics are ${ageDays} days old. Reverify GitHub and product counts before shipping.`
  )
}

const sourcedClaims = [...data.metrics, ...data.openSource]
for (const claim of sourcedClaims) {
  const source = new URL(claim.source)
  if (!['https:'].includes(source.protocol)) {
    throw new Error(`Claim source must use HTTPS: ${claim.source}`)
  }
}

console.log(`Portfolio claims verified ${ageDays} day(s) ago; freshness check passed.`)
