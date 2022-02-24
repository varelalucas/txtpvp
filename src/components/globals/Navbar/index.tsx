/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useState } from 'react'
import styles from './Navbar.module.scss'

import { BiMoon, BiSun } from 'react-icons/bi'
import { useRouter } from 'next/router'

const Navbar: NextPage = () => {
  const [open, setOpen] = useState(false)
  const [classActive, setClassActive] = useState(``)
  const router = useRouter()

  const toggleTheme = (actualTheme: string) => {
    if (actualTheme === 'light') {
      localStorage.setItem('txtpvp:theme', 'dark'),
      document.getElementById('document')?.classList.add('darkmode'),
      document.getElementById('document')?.classList.remove('lightmode')
    }

    if (actualTheme === 'dark') {
      localStorage.setItem('txtpvp:theme', 'light'),
      document.getElementById('document')?.classList.add('lightmode'),
      document.getElementById('document')?.classList.remove('darkmode')
    }
  }

  const toggleNav = () => {
    if (open === true) {
      setOpen(false),
      setClassActive(``)
    }

    if (open === false) {
      setOpen(true),
      setClassActive(`${styles.active}`)
    }
  }

  return (
    <nav className={`${styles.navbar} ${classActive}`} id="navbar">
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.brand}>
            <button onClick={() => router.push('/')}>
              <img src="/images/brand/logo.png" alt="Logo" width="162px" height="90px" />
            </button>
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <button onClick={() => router.push('/')}>
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => router.push('/textures')}>
                  Texturas
                </button>
              </li>
              <li>
                <button onClick={() => router.push('/#faq')} className={styles.faq}>
                  FAQ
                </button>
              </li>
              <div className={styles.theme}>
                <button className='dark' onClick={() => toggleTheme('dark')}>
                  <div>
                    <i>
                      <BiSun />
                    </i>
                  </div>
                </button>
                <button className='light' onClick={() => toggleTheme('light')}>
                  <div>
                    <i>
                      <BiMoon />
                    </i>
                  </div>
                </button>
              </div>
            </ul>
          </div>
          <button onClick={toggleNav} className={styles.hamburguer} />
        </div>
      </div>
    </nav>
  )
}

export { Navbar }