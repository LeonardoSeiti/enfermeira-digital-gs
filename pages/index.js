// pages/index.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Botao from '../components/Botão';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import EquipeFooter from '../components/EquipeFooter.js';

const Home = () => {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            {/* Adicionando o botão com o ícone de calendário */}
            <Link href="/agendamento">
              <Botao texto="Agendamentos" />
            </Link>
          </div>
          {/* Restante das caixas */}
        </div>
      </main>
      <Footer />
      <EquipeFooter />
    </div>
  );
};

export default Home;
