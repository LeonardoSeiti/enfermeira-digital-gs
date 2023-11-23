import React from 'react';
import styles from '../styles/Botao.module.css';

const Botao = ({ texto, icon: Icon, onClick }) => {
  return (
    <button className={styles.botao} onClick={onClick}>
      {Icon && <Icon />} 
      <span>{texto}</span> 
    </button>
  );
};

export default Botao;
