'use client';

import Image from 'next/image';
import Header from './../components/Header'
import styles from "./page.module.css";
import effect from "../assets/asset-header.png";
import ctaImg from "../assets/comparativo_img_CTA.png";
import rating from "../assets/rating.webp";
import noCard from "../assets/no-card-dark.webp";
import selo from "../assets/selo_RD.png";
import down from "../assets/down.png";
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { useState } from 'react';
import Card from '@/components/Card';
import ModalLibrary from '@/components/ModalLibrary';

export default function Home() {
  const [agencias, setAgencias] = useState(false);
  const [chatbot, setChatbot] = useState(false);
  const [md, setMd] = useState(false);
  const [gl, setGl] = useState(false);
  const [mp, setMp] = useState(false);
  const [show, setShow] = useState(false);


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

        <section className={styles.library}>
          <div className={styles.libraryHeader}>
            <div className={styles.libraryHeaderButtons}>
              <Button active={agencias} setActive={setAgencias}>Agências</Button>
              <Button active={chatbot} setActive={setChatbot}>Chatbot</Button>
              <Button active={md} setActive={setMd}>Marketing Digital</Button>
              <Button active={gl} setActive={setGl}>Geração de Leads</Button>
              <Button active={mp} setActive={setMp}>Mídia Paga</Button>
            </div>
            <div className={styles.libraryHeaderOrder}>
              <span><strong>Ordenar por</strong></span>
              <select>
              <option value='data' selected>Data de Publicação</option>
              <option value='data'>Crescente A - Z</option>
              <option value='data'>Decrescente Z - A</option>
              </select>
              <Image className={styles.libraryHeaderOrderImg} src={down} ></Image>
            </div>
          </div>
          <div  className={styles.libraryContent}>
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            <Card show={show} setShow={setShow} />
            {show && <ModalLibrary show={show} setShow={setShow} />}
          </div>
          <div className={styles.libraryPages}>
            <span><strong>Página</strong></span>
            {Array(4).fill().map((_, i) => (
              <a key={`page-${i}`} href="#">{i+1}</a>
              ))}
          </div>
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
