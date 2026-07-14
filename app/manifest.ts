import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Felmon Fekadu — Software Engineer',
    short_name: 'Felmon Fekadu',
    description: 'Developer tools, applied AI products, and reviewed open-source engineering work.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f2f0e9',
    theme_color: '#f2f0e9',
    icons: [
      {
        src: '/icon.png',
        sizes: '128x128',
        type: 'image/png',
      },
    ],
  }
}
