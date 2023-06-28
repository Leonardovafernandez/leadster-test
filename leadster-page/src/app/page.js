import Image from 'next/image';
import Header from './../components/Header'
import styles from "./page.module.css";
import effect from "../assets/asset-header.png"

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.ballon}><span>WEBINARS EXCLUSIVOS</span></div>
          <div className={styles.box}>
            <h2>Menos Conversinha,</h2>
            <div className={styles.tittle}>
              <h1>Mais Conversão</h1>
              <Image className={styles.shineTittle} src={effect} />
            </div>
          </div>
          <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
        </section>

        <section className='library'>
          <p>LIBRARY</p>
        </section>
        <section >

        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}
