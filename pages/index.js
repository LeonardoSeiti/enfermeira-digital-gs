import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // Importar estilos CSS
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
              <Link href="/agendamento">
               <div className={styles.box}>
               Agendamentos
               </div>
              </Link>
          </div>
          <div className={styles.box}>
            Página 2
          </div>
          <div className={styles.box}> 
            Página 3
          </div>
          <div className={styles.box}> 
            Página 4
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
