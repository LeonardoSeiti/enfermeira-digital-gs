import { useState, useEffect } from 'react';
import styles from '../styles/Agendamento.module.css'; // Importar estilos CSS
import Header from './Header.js'; // Importar o componente Header
import Footer from './Footer.js'; // Importar o componente Footer
import EquipeFooter from './EquipeFooter.js';

const Agendamento = () => {
  const [dataConsulta, setDataConsulta] = useState('dataDaConsulta');
  const [horarioConsulta, setHorarioConsulta] = useState('horaDaConsulta');
  const [especialidade, setEspecialidade] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDataConsulta = localStorage.getItem('dataConsulta');
      const storedHorarioConsulta = localStorage.getItem('horarioConsulta');
      const storedEspecialidade = localStorage.getItem('especialidade');

      setDataConsulta(storedDataConsulta || '');
      setHorarioConsulta(storedHorarioConsulta || '');
      setEspecialidade(storedEspecialidade || '');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dataConsulta', dataConsulta);
    localStorage.setItem('horarioConsulta', horarioConsulta);
    localStorage.setItem('especialidade', especialidade);
  }, [dataConsulta, horarioConsulta, especialidade]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do agendamento:', { dataConsulta, horarioConsulta, especialidade });
  };

  return (
    <div>
      <Header /> {/* Adicionando o componente Header */}
      <div className={styles.pageCenter}>
        <div className={styles.container}>
          <h1 style={{ color: 'orange', fontSize: '13px' }}>Dados de Agendamento</h1>
          <form onSubmit={handleSubmit} className={`${styles.form} ${styles.centered}`}>
            <div className={`${styles.box} ${styles.dataBox} ${styles.centered}`}>
              <input type="date" value={dataConsulta} onChange={(e) => setDataConsulta(e.target.value)} className={styles.inputField} />
            </div>
            <div className={`${styles.box} ${styles.horarioBox} ${styles.centered}`}>
              <input type="time" value={horarioConsulta} onChange={(e) => setHorarioConsulta(e.target.value)} className={styles.inputField} />
            </div>
            <div className={`${styles.box} ${styles.especialidadeBox} ${styles.centered}`}>
              <input type="text" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} placeholder="Especialidade" className={styles.inputField} />
            </div>
            <button type="submit" className={styles.submitButton}>Registrar Consulta</button>
          </form>
        </div>
      </div>
      <Footer />
      <EquipeFooter />
    </div>
  );
};

export default Agendamento;
