import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/globals/Footer'

import { Header } from '../components/pages/home/Header'
import { Faq } from '../components/pages/home/Faq'
import { Recents } from '../components/pages/home/Recents'
import GoogleAdsense from 'react-adsense-google';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Início | TxtPvp
        </title>
      </Head>
      <Header />
      <main>
        <section className="ads">
          <div className="container">
            <GoogleAdsense
              adClient='ca-pub-1866214493982074'
              adSlot='8934518834'
              style={{'display': 'block', 'text-align': 'center'}}
              adLayout='in-article'
              adFormat='fluid'
              fullWidthResponsive='true'
            />
          </div>
        </section>
        <Recents />
        <section className="ads">
          <div className="container">
            <GoogleAdsense
              adClient='ca-pub-1866214493982074'
              adSlot='9369633100'
              style={{'display': 'block', 'text-align': 'center'}}
              adLayout='in-article'
              adFormat='fluid'
              fullWidthResponsive='true'
            />
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1866214493982074"
     crossOrigin="anonymous"></script>
    </>
  )
}

export default Home
