import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BUSINESS } from '@/lib/business';

export const metadata: Metadata = {
  metadataBase: new URL('https://nwaelectric.com'),
  title: {
    default: 'NWA Electric | Licensed Electrician in Bentonville, AR',
    template: '%s | NWA Electric — Bentonville, AR',
  },
  description:
    'NWA Electric is a licensed and insured residential electrician serving Bentonville, Rogers, Centerton, Bella Vista, Springdale, and Fayetteville, AR. Panel upgrades, EV chargers, rewiring, and more.',
  keywords: [
    'electrician bentonville ar',
    'residential electrician northwest arkansas',
    'panel upgrade bentonville',
    'ev charger installation bentonville ar',
    'licensed electrician rogers ar',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nwaelectric.com',
    siteName: 'NWA Electric',
    title: 'NWA Electric | Licensed Electrician in Bentonville, AR',
    description:
      'Licensed residential electrician serving Bentonville and Northwest Arkansas. Panel upgrades, EV charger installation, rewiring, and inspections.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'NWA Electric' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NWA Electric | Licensed Electrician in Bentonville, AR',
    description: 'Licensed residential electrician serving Bentonville and Northwest Arkansas.',
    images: ['/images/og-image.png'],
  },
  alternates: { canonical: 'https://nwaelectric.com' },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  '@id': 'https://nwaelectric.com/#business',
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description: 'Licensed and insured residential electrician serving Bentonville, AR and the Northwest Arkansas region.',
  url: BUSINESS.url,
  telephone: BUSINESS.phonePlain,
  email: BUSINESS.email,
  foundingDate: String(BUSINESS.founded),
  priceRange: '$$',
  image: 'https://nwaelectric.com/images/hero.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.3729, longitude: -94.2088 },
  areaServed: [
    { '@type': 'City', name: 'Bentonville' },
    { '@type': 'City', name: 'Rogers' },
    { '@type': 'City', name: 'Centerton' },
    { '@type': 'City', name: 'Bella Vista' },
    { '@type': 'City', name: 'Springdale' },
    { '@type': 'City', name: 'Fayetteville' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '15:00' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating.score,
    reviewCount: BUSINESS.rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [BUSINESS.social.facebook, BUSINESS.social.google],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NWA Electric',
  url: 'https://nwaelectric.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
