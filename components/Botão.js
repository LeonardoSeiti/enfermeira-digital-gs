import React from 'react';
import { Calendar } from 'react-feather'; 
import styles from '../styles/Botao.module.css'; 

const Botao = ({ texto, onClick }) => {
  return (
    <button className={styles.botao} onClick={onClick}>
      <Calendar size={18} /> {/* Ícone de calendário */}
      <span>{texto}</span> {/* Texto do botão */}
    </button>
  );
};

export default Botao;
