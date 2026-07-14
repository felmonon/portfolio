import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Selected Work | Felmon Fekadu',
  description: 'Selected engineering work by Felmon Fekadu.',
}

export default function SelectedWorkPage() {
  redirect('/#work')
}
