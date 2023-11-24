import React from 'react';
import { useRouter } from 'next/router'; 
import { Home } from 'react-feather'; 
import styles from '/styles/Footer.module.css';

const Footer = () => {
  const router = useRouter(); 

  const handleRedirectToIndex = () => {
    router.push('/'); 
  };

  return (
    <footer className={styles.footer}>
      <button onClick={handleRedirectToIndex} className={styles.iconButton}>
        <Home size={24} color="white" /> 
      </button>
    </footer>
  );
};

export default Footer;
