import React from 'react';
import styles from '../styles/Header.module.css'; 
import FeatherIcon from './React-Feather'; 
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
      </div>
      <div className={`${styles.logo}`}>
        <FeatherIcon icon="Activity" size={24} color="white" /> {/* Ícone usando FeatherIcon */}
      </div>
      <div className={styles.navigation}>
      </div>
    </header>
  );
};

export default Header;
