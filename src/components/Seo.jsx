import { Helmet } from 'react-helmet-async'
import { BUSINESS_FULL_NAME, SITE_NAME, SITE_URL } from '../content/siteContent'

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function Seo({
  title,
  description,
  path = '/',
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  breadcrumbs,
  children,
}) {
  const canonicalUrl = `${SITE_URL}${path}`

  const breadcrumbSchema = breadcrumbs
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
          ...breadcrumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: crumb.name,
            item: SITE_URL + crumb.path,
          })),
        ],
      })
    : null

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BUSINESS_FULL_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={`${SITE_NAME} — Authorized Texmo Dealer in Tiruvarur`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {breadcrumbSchema ? (
        <script type="application/ld+json">{breadcrumbSchema}</script>
      ) : null}

      {children}
    </Helmet>
  )
}