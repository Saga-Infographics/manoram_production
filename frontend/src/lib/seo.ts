export const SITE = {
  title: 'Manoram Production',
  description:
    'Manoram Production — portfolio, projects, media, and contact for bookings and collaborations.',
  siteUrl: 'https://manoram-production.com', // production URL updated
  defaultImage: '/og-image.png',
  author: 'Manoram Production',
  twitter: '@manoramprod',
  language: 'en-US',
};

export const structuredDataPerson = (overrides = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.title,
  url: SITE.siteUrl,
  sameAs: [
    // Update social profiles as needed for Manoram Production
  ],
  ...overrides,
});

export const structuredDataOrganization = (overrides = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.title,
  url: SITE.siteUrl,
  logo: SITE.siteUrl.replace(/\/$/, '') + SITE.defaultImage,
  sameAs: [],
  contactPoint: [],
  ...overrides,
});
