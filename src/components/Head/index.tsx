import React from 'react'
import Head from 'next/head'
import content from './content'
import { name } from '@utils/contactData'

const HeadComponent = () => {
  return (
    <Head>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={content.keywords} />
      <meta name="author" content={name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={content.canonical} />
      <meta property="og:title" content={content['og:title']} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={content.description} />
      <meta property="og:url" content={content.canonical} />
      <meta property="og:image" content={content['og:image']} />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  )
}

export default HeadComponent
