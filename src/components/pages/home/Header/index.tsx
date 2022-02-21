/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { Navbar } from '../../../globals/Navbar'
import styles from './Header.module.scss'

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.textos}>
              <h1>
                A PROCURA DE UMA <span>TEXTURA?</span> CHEGOU AO LUGAR CERTO!
              </h1>
              <div className={styles.buttons}>
                <div className={styles.button}>
                  <button>
                    Ver texturas
                  </button>
                  <p>
                    Clique para ver todas as texturas.
                  </p>
                </div>
                <div className={styles.button}>
                  <button>
                    Youtubers
                  </button>
                  <p>
                    Clique para ver texturas de youtubers.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <img src="/images/renders/rendercheats.png" alt="Render Cheats" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.setas}>
        <div className={styles.flex}>
          <button>
            <img src="/images/renders/setas.svg" alt="Setas" />
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }