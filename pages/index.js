import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Botao from '../components/Botão.js';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import EquipeFooter from '../components/EquipeFooter.js';
import { Calendar, User, Settings } from 'react-feather';
import Saudacao from '../components/Saudacao.js';

const Home = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header className={styles.header}
       />
      <main className={styles.container}>
     
        <div className={styles.centerContent}
        >
          <Saudacao />
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/agendamento">
            <Botao texto="Botão 1" icon={Calendar} />
          </Link>
          <Botao texto="Botão 2" icon={User} />
          <Botao texto="Botão 3" icon={Settings} />
        </div>
      </main>
      <Footer className={styles.footer} />
      <EquipeFooter />
    </div>
  );
};

export default Home;
