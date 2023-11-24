// Seu componente Header.js

import React from 'react';
import styles from '../styles/Header.module.css'; 
import FeatherIcon from './React-Feather'; 
import Head from 'next/head'

const Header = ({ title }) => {
  return (
    <><Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100&display=swap" rel="stylesheet"/>

    </Head>
 
    <header className={styles.header}>
      <div className={styles.navigation}>
        {/* Conteúdo do lado esquerdo do cabeçalho, se necessário */}
      </div>
      <div className={`${styles.logo} ${styles.customFont}`}>
        <FeatherIcon icon="Activity" size={24} color="white" />
        <h1>{title}</h1> Global Solution - DevSpot - FIAP - 2023 {/* Adicione o título aqui */}
      </div>
      <div className={styles.navigation}>
        {/* Conteúdo do lado direito do cabeçalho, se necessário */}
      </div>
    </header>
    </>
  );
};


export default Header;
