import '../styles/globals.scss'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var condition = localStorage.getItem('txtpvp:theme')

    if (!condition) {
      localStorage.setItem('txtpvp:theme', 'dark')
      document.getElementById('document')?.classList.add('darkmode')
    }

    if (condition === 'dark') {
      localStorage.setItem('txtpvp:theme', 'dark')
      document.getElementById('document')?.classList.add('darkmode')
    }

    if (condition === 'light') {
      localStorage.setItem('txtpvp:theme', 'light')
      document.getElementById('document')?.classList.add('lightmode')
    }

    window.addEventListener('scroll', function() {
      var element = document.getElementById('document');
      var scroll = element?.scrollTop
      var navbar = document.getElementById('navbar')

      if (scroll >= 300) {
        navbar.classList.add('fixed-top')
      }

      if (scroll < 300) {
        navbar.classList.remove('fixed-top')
      }
    });


  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=6.0, minimal-ui"
          user-scalable="no"
        />
      </Head>
      <Component {...pageProps} />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1866214493982074" crossOrigin="anonymous"></script>
    </>
  )
}

export default MyApp