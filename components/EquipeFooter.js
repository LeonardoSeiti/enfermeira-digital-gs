import React from 'react';
import styles from '../styles/EquipeFooter.module.css'; 

const EquipeFooter = () => {
  const membros = [
    {
      nome: 'Victor Hugo',
      rm: '550573',
      turma: '1TDPHS',
      cargo: 'IA',
    },
    {
      nome: 'Kelvin Gomes',
      rm: '98126',
      turma: '1TDSPH',
      cargo: 'Python/Data Base',
    },
    {
      nome: 'Leonardo Seiti',
      rm: '550207',
      turma: '1TDSPH',
      cargo: 'Java',
    },
    {
        nome: 'Lucas Sampaio',
        rm: '98414',
        turma: '1TDSPH',
        cargo: 'TX/RWD',
      },
      {
        nome: 'Rodrigo Santos',
        rm: '98373',
        turma: '1TDSPH',
        cargo: 'TX/RWD',
      },
  ];

  return (
    <footer className={styles.equipeFooter}>
      {membros.map((membro, index) => (
        <div key={index} className={styles.integrante}>
          <p>Nome: {membro.nome}</p>
          <p>RM: {membro.rm}</p>
          <p>Turma: {membro.turma}</p>
          <p>Cargo: {membro.cargo}</p>
        </div>
      ))}
    </footer>
  );
};

export default EquipeFooter;
