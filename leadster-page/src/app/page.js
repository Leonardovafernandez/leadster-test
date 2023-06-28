import Header from './../components/Header'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div>
            <div>WEBINARS EXCLUSIVOS</div>
            <h2>Menos Conversinha,</h2>
              </div>
                <h1>Mais Conversão</h1>
                <img src='' alt='' />
              <div>
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
