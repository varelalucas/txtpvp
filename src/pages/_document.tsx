/* eslint-disable react-hooks/rules-of-hooks */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  

  render() {
    return (
      <Html id="document">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="BrandStoreDesign (brandstoredesign.com.br)" />
          <meta name="copyright" content="BrandStoreDesign" />
          <meta name="designer" content="BrandStoreDesign (brandstoredesign.com.br)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="keywords" content="Texturas para download Textura Baixar textura textura minecraft 1.8 download download textura minecraft 1.8 download servidor de rankup op download servidor de minecraft textura para pvp textura para pvp 1.8" />
          <meta property="og:title" content="TxtPvp" />
          <meta
            property="og:description"
            content=""
          />
          <meta property="og:url" content="https://txtpvp.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/images/brand/favicon.png" />
          <meta property="twitter:image" content="/images/brand/favicon.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content=""
          />
          <meta
            name="description"
            content=""
          />
          <link rel="shortcut icon" href="/images/brand/favicon.png" />
          <link rel="stylesheet" href="https://use.typekit.net/tqh1utv.css" />
        </Head>
        <body id="document">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument