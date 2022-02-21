import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../../components/pages/textures/Header'
import { Footer } from '../../components/globals/Footer'
import { Content } from '../../components/pages/textures/Content'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Texturas | TxtPvp
        </title>
      </Head>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  )
}

export default Home
