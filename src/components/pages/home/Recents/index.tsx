/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import styles from './Recents.module.scss'
import textures from '../../../../json/textures.json'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Recents: NextPage = () => {
  const [active, setActive] = useState('two')

  const router = useRouter()

  const verify = (e: any) => {
    if (e.length < 7) {
      return (
        <div className={`${styles.item} ${styles.seemore}`}>
          <div className={styles.header}>
            <h4>Ver mais</h4>
          </div>
        </div>
      )
    }

    if (e.length > 7) {
      return null;
    }
  }

  const changeActive = (item: string) => {
    if (item == 'two') {
      setActive('two')
    }

    if (item == 'one') {
      setActive('one')
    }
  }

  return (
    <section className={styles.recents}>
      <div className={styles.title}>
        <div className={styles.flex}>
          <p>
            Uma textura funcional não é simplesmente bonita, é a  melhor!
          </p>
          <h1>
            Texturas Recentes:
          </h1>
          <div className={styles.buttons}>
            <div className={styles.flex}>
              <button className={active == "one" ? styles.active : styles.button} onClick={() => changeActive('one')}>
                Youtubers
              </button>
              <h3>
                Ou
              </h3>
              <button className={active == "two" ? styles.active : styles.button} onClick={() => changeActive('two')}>
                Texturas Gerais
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className="container">
          <div className={active == "one" ? `${styles.gerais} ${styles.active}` : styles.gerais}>
            <div className={styles.grid}>
              {textures.map((texture: any) => {
                if (texture.category === "youtubers") {
                  const link = `/textures/${texture.details.slug}`

                  return (
                    <button onClick={() => router.push(link)} className={styles.item} key={texture.name}>
                      <div className={styles.header}>
                        <img src={texture.thumb} alt={texture.name} />
                        <h4>
                          {texture.name}
                        </h4>
                        <p>
                          By: {texture.details.author}
                        </p>
                      </div>
                    </button>
                  )
                }
              })}
            </div>
          </div>
          <div className={active == "two" ? `${styles.gerais} ${styles.active}` : styles.gerais}>
            <div className={styles.grid}>
              {textures.map((texture: any) => {
                if (texture.category === "gerais" || texture.category === "youtubers") {
                  const link = `/textures/${texture.details.slug}`

                  return (
                    <button onClick={() => router.push(link)} className={styles.item} key={texture.name}>
                      <div className={styles.header}>
                        <img src={texture.thumb} alt={texture.name} />
                        <h4>
                          {texture.name}
                        </h4>
                        <p>
                          By: {texture.details.author}
                        </p>
                      </div>
                    </button>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Recents }