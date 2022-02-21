import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/globals/Footer'
import { Download } from '../../components/pages/texturePage/Download'
import { Header } from '../../components/pages/texturePage/Header'
import { Preview } from '../../components/pages/texturePage/Preview'

import textures from '../../json/textures.json'

type textureProps = {
  name: string;
  thumb: string;
  category?: string;
  details: {
    author: string;
    slug: string;
    preview: {
      image: string;
    }[];
  };
  download: {
    bedrock: string;
    java: string;
  };
}

const Home: NextPage = () => {
  const router = useRouter()
  const baseTexture = {
    name: "",
    thumb: "",
    details: {
      author: "",
      slug: "",
      preview: []
    },
    download: {
      bedrock: "",
      java: ""
    }
  }
  const [texture, setTexture] = useState<textureProps>(baseTexture)

  useEffect(() => {
    const loadContent = async () => {
      const texture = textures.find(texture => texture.details.slug == router.query.name) || textures[0]

      setTexture(texture)
    }

    loadContent()
  }, [router.query.name, texture])

  return (
    <>
      <Head>
        <title>
          Texturas | TxtPvp
        </title>
      </Head>
      <Header author={texture.details.author} name={texture.name} thumb={texture.thumb} />
      <main>
        <Preview preview={texture.details.preview} />
        <Download name={texture.name} download={texture.download} />
      </main>
      <Footer />
    </>
  )
}

export default Home
