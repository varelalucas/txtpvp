import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/globals/Footer'

import { Header } from '../components/pages/home/Header'
import { Faq } from '../components/pages/home/Faq'
import { Recents } from '../components/pages/home/Recents'

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
        <Recents />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default Home
