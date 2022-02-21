/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  const router = useRouter()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.item}>
            <div className={styles.brand}>
              <img src="/images/brand/icon.png" alt="Logo" />
            </div>
          </div>
          <div className={styles.item}>
            <h4>
              Website:
            </h4>
            <ul>
              <li>
                <button onClick={() => router.push('/')}>
                  Homepage
                </button>
              </li>
              <li>
                <button onClick={() => router.push('/textures')}>
                  Texturas
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h4>
              Contato:
            </h4>
            <ul>
              <li>
                <button>
                  Discord
                </button>
              </li>
              <li>
                <button>
                  Youtube
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <div className={styles.custom}>
              <h3>
                Sobre o TxtPvp:
              </h3>
              <p>Bem-vindo ao TXTPVP! O melhor site para conhecer novas texturas que você possa imaginar. Nosso objetivo é criar um site para todos baixar e enviar texturas de uma forma fácil e seguro</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }