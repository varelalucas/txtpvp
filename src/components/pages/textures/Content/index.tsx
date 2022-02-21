/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './Content.module.scss'
import textures from '../../../../json/textures.json'

const Content: NextPage = () => {
  const [searchContent, setSearchContent] = useState('')
  const [active, setActive] = useState('one')
  const router = useRouter()

  return (
    <section className={styles.content}>
      <div className={styles.title}>
        <div className="container">
          <div className={styles.search}>
            <input type="text" onChange={(e) => setSearchContent(e.target.value)} placeholder="Coloque o nome da textura aqui!" name="search" />
            <div className={styles.buttons}>
              <button className={active == "one" ? `${styles.active}` : styles.button} onClick={() => setActive('one')}>
                All
              </button>
              <button className={active == "two" ? `${styles.active}` : styles.button} onClick={() => setActive('two')}>
                Youtubers
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className="container">
          <div className={active == "one" ? `${styles.textures} ${styles.active}` : styles.textures}>
            <div className={styles.title}>
              <h4>
                {textures.length} texturas no total
              </h4>
            </div>
            <div className={styles.grid}>
              {textures.map((texture: any) => {
                const link = `/textures/${texture.details.slug}`

                if (texture.name.match(searchContent)) {
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

                if (!searchContent) {
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
          <div className={active == "two" ? `${styles.textures} ${styles.active}` : styles.textures}>
            <div className={styles.title}>
              <h4>
                {textures.filter(texture => texture.category === "youtubers").length} texturas no total
              </h4>
            </div>
            <div className={styles.grid}>
              {textures.map((texture: any) => {
                const link = `/textures/${texture.details.slug}`

                if (texture.category === "youtubers") {
                  if (texture.name.includes(searchContent)) {
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
  
                  if (!searchContent) {
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
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Content }