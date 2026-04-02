import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.prrajagopalaiyengar.in'
const SITE_NAME = 'P.R. Rajagopalaiyengar & Sons'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`

export default function Seo({
  title,
  description,
  path = '/',
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  children,
}) {
  const canonicalUrl = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE_NAME} social preview`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Helmet>
  )
}