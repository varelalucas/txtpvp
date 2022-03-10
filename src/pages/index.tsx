import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/globals/Footer'

import { Header } from '../components/pages/home/Header'
import { Faq } from '../components/pages/home/Faq'
import { Recents } from '../components/pages/home/Recents'
import AdSense from 'react-adsense'

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
            <AdSense.Google
              client='ca-pub-1866214493982074'
              slot='8934518834'
              style={{ display: 'block' }}
              layout='in-article'
              format='fluid'
            />
          </div>
        </section>
        <Recents />
        <section className="ads">
          <div className="container">
            <AdSense.Google
              client='ca-pub-1866214493982074'
              slot='9369633100'
              style={{ display: 'block' }}
              layout='in-article'
              format='fluid'
            />
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default Home
