import React from 'react';

const Prontuario = ({ dados }) => {
  return (
    <div>
      <h1>Informações do Prontuário</h1>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>Última consulta realizada: {dados.consulta}</p>
      <p>Último exame realizado: {dados.exame}</p>
      <p>Última prescrição realizada: {dados.prescricao}</p>
    </div>
  );
};

export default Prontuario;