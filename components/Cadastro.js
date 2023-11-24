import { useState } from 'react';
import styles from '../styles/Cadastro.module.css'; 
import Header from './Header';
import Footer from './Footer'; 
import axios from 'axios';

const Formrs  = () => {
  const [idCadastro, setIdCadastro] = useState('');
  const [nome, setNome] = useState('');
  const [dataDeNascimento, setDataDeNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [cep, setCep] = useState('');
  const [descricaoLogradouro, setDescricaoLogradouro] = useState('');
  const [numeroLogradouro, setNumeroLogradouro] = useState('');
  const [nomeCidade, setNomeCidade] = useState('');
  const [nomeEstado, setNomeEstado] = useState('');
  const [numeroTelefone, setNumeroTelefone] = useState('');
  const [descricaoEmail, setDescricaoEmail] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      idCadastro,
      nome,
      dataDeNascimento,
      genero,
      cep,
      descricaoLogradouro,
      numeroLogradouro,
      nomeCidade,
      nomeEstado,
      numeroTelefone,
      descricaoEmail,
      tipoDocumento
    };
  console.log(formData)
    axios.post('http://localhost:1287/cadastro', formData)
      .then(response => {
        console.log('Resposta do backend:', response.data);
      })
      .catch(error => {
        console.error('Erro ao enviar os dados para o backend:', error);
      });
  };

  return (
    <div>
      <Header /> 
      <div className={styles.pageCenter}>
        <div className={styles.container}>
          <h1 style={{ color: 'orange', fontSize: '13px' }}>Formulário</h1>
          <form onSubmit={handleSubmit} className={`${styles.form} ${styles.centered}`}>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="idCadastro">ID de Cadastro:</label>
              <input type="text" id="idCadastro" value={idCadastro} onChange={(e) => setIdCadastro(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="dataDeNascimento">Data de Nascimento:</label>
              <input type="date" id="dataDeNascimento" value={dataDeNascimento} onChange={(e) => setDataDeNascimento(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="genero">Gênero:</label>
              <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} className={styles.inputField} required>
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="cep">CEP:</label>
              <input type="text" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="descricaoLogradouro">Descrição do Logradouro:</label>
              <input type="text" id="descricaoLogradouro" value={descricaoLogradouro} onChange={(e) => setDescricaoLogradouro(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="numeroLogradouro">Número do Logradouro:</label>
              <input type="text" id="numeroLogradouro" value={numeroLogradouro} onChange={(e) => setNumeroLogradouro(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="nomeCidade">Nome da Cidade:</label>
              <input type="text" id="nomeCidade" value={nomeCidade} onChange={(e) => setNomeCidade(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="nomeEstado">Nome do Estado:</label>
              <input type="text" id="nomeEstado" value={nomeEstado} onChange={(e) => setNomeEstado(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="numeroTelefone">Número de Telefone:</label>
              <input type="text" id="numeroTelefone" value={numeroTelefone} onChange={(e) => setNumeroTelefone(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="descricaoEmail">Descrição do Email:</label>
              <input type="email" id="descricaoEmail" value={descricaoEmail} onChange={(e) => setDescricaoEmail(e.target.value)} className={styles.inputField} required />
            </div>
            <div className={`${styles.box} ${styles.centered}`}>
              <label htmlFor="tipoDocumento">Tipo de Documento:</label>
              <input type="text" id="tipoDocumento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)} className={styles.inputField} required />
            </div>
            <button type="submit" className={styles.submitButton}>Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Formrs ;