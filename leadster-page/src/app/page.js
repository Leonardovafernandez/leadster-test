import Image from 'next/image';
import Header from './../components/Header'
import styles from "./page.module.css";
import effect from "../assets/asset-header.png";
import ctaImg from "../assets/comparativo_img_CTA.png";
import rating from "../assets/rating.webp";
import noCard from "../assets/no-card-dark.webp";
import selo from "../assets/selo_RD.png";
import Footer from '@/components/Footer';

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
          <div className={styles.cta}>
            <Image className={styles.ctaImg} src={ctaImg} />
            <div className={styles.ctaContent}>
              <h3>Pronto para triplicar sua</h3>
              <h3><strong>Geração de Leads?</strong></h3>
              <h4>Criação e ativação em <strong>4 minutos.</strong></h4>
              <div className={styles.boxTop}>
                <div className={styles.button}>
                  <button><strong>VER DEMOSTRAÇÃO</strong></button>
                  <Image src={selo} />
                </div>
                <div>
                  <Image src={noCard} />
                  <span> Não é necessário Cartão de Crédito  | </span>
                  <Image src={rating} />
                  <span><strong> 4.9</strong>/5 média de satisfação</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
