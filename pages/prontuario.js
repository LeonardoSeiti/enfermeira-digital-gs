import React from 'react';
import Prontuario from '../components/Prontuario';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EquipeFooter from '../components/EquipeFooter';
import styles from '../styles/Prontuario.module.css';

const PaginaProntuario = () => {
  const dadosProntuario = {
    nome: 'Victor',
    idade: 18,
    consulta: 'Gastroenterologista com Dr. Kelvin (CRM 98126)',
    exame: 'Endoscopia',
    prescricao: 'Tomar omeprazol 1 cp a cada 12h por 7 dias',
  };
  
  return (
    <div>
      <Header/>
      <Prontuario className={styles.prontuarioContainer} dados={dadosProntuario} />
      <Footer/>
      <EquipeFooter/>
    </div>
  );
};

export default PaginaProntuario;
