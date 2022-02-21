/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './Preview.module.scss'

type previewProps = {
  preview: {
    image: string;
  }[]
}

const Preview: NextPage<previewProps> = ({preview}) => {
  useEffect(() => console.log(preview))
  return (
    <section className={styles.preview}>
      <div className="container">
        <div className={styles.title}>
          <h1>
            Pré-Visualização:
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            {preview.map(item => {
              return (
                <div className={styles.item} key={uuid()}>
                  <img src={item.image} alt={item.image} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Preview }