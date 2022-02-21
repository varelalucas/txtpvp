import { NextPage } from 'next'
import { useEffect } from 'react'
import styles from './Faq.module.scss'

const Faq: NextPage = () => {
  useEffect(() => {
    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }, [])

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.title}>
          <div className={styles.flex}>
            <h1>
              Dúvidas Frequentes
            </h1>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.duvidas}>
            <details open>
              <summary>O que é a TXTPVP?</summary>
              <div className={styles.detailscontent}>
                <p>
                  Somos um site focado em downloads e uplouds das melhores texturas para minecraft de pc e minecraft mobile.
                </p>
              </div>
            </details>
            <details>
              <summary>Como baixar uma textura?</summary>
              <div className={styles.detailscontent}>
                <p>
                  Basta clicar em cima da textura desejada, você será redirecionado para uma aba de downloads aonde irá ter um botão <b>BAIXAR</b>, após clicar o download será iniciado.
                </p>
              </div>
            </details>
            <details>
              <summary>Como colocar uma textura no Minecraft?</summary>
              <div className={styles.detailscontent}>
                <p>
                O procedimento é fácil! Ao baixar a textura desejada, você irá extrair a textura, Pressione Windows + R que abrirá o executar, depois você escreve %appdata% e clique em <b>OK</b>, Abra a pasta Minecraft, visualize a pasta <b>Resoursepacks</b> e cole a textura dentro dessa pasta. 
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Faq }