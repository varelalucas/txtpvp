import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './Download.module.scss'

type DownloadProps = {
  name: string,
  download: {
    java: string,
    bedrock: string
  }
}

const Download: NextPage<DownloadProps> = ({ download, name }) => {
  const router = useRouter()

  return (
    <section className={styles.download}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.flex}>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.flex}>
                  <div className={styles.textos}>
                    <h1>
                      Download Java
                    </h1>
                    <h4>
                      {name}
                    </h4>
                    <button onClick={() => router.push(download.java)}>
                      Baixar
                    </button>
                  </div>
                  <div className={styles.number}>
                    <h1>
                      1
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.flex}>
                  <div className={styles.textos}>
                    <h1>
                      Download Bedrock
                    </h1>
                    <h4>
                      {name}
                    </h4>
                    <button onClick={() => router.push(download.bedrock)}>
                      Baixar
                    </button>
                  </div>
                  <div className={styles.number}>
                    <h1>
                      2
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Download }