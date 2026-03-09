"use client";

import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  url?: string
  image?: string
  siteName?: string
  type?: string
}

export default function SEOHead({
  title = 'Lumen Frames Photography | Freelance Photographer',
  description = 'Modern freelance photographer portfolio featuring weddings, portraits, editorial work, pricing, and contact inquiries.',
  url = 'https://example.com',
  image = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  siteName = 'Lumen Frames Photography',
  type = 'website',
}: Partial<SEOHeadProps>) {
  const fullTitle = title + ' | ' + siteName

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
