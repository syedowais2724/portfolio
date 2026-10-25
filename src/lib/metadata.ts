import { Metadata } from 'next';
import { site } from './site';

export const siteMetadata: Metadata = {
  title: { default: 'Syed Owais — Software Engineer', template: '%s | Syed Owais' },
  description: site.tagline,
  authors: [{ name: site.name }],
  creator: site.name,
  metadataBase: new URL(site.url),
  alternates: { canonical: './' },
  icons: { icon: '/owais-mark.svg' },
  openGraph: {
    title: 'Syed Owais — Software that listens, thinks, and acts.',
    description: site.tagline, url: site.url, siteName: 'Syed Owais Portfolio', type: 'website',
    images: [{ url: '/work/double.svg', width: 1200, height: 750, alt: 'Syed Owais — Voice, AI & Full Stack' }],
  },
  twitter: { card: 'summary_large_image', title: 'Syed Owais — Software Engineer', description: site.tagline },
};

