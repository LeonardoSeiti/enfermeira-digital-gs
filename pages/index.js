import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enfermeira Digital</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main>
        <h1>Enfermeira Digital</h1>
      </main>

      <footer>
      </footer>
    </div>
  );
}
