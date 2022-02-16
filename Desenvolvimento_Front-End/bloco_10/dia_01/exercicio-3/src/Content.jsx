import React from "react";

const format = ({ conteudo, bloco, status }, index) => {
  return (
    <ol key={index}>
      <li>O conteúdo é: {conteudo}</li>
      <li>Status: {status}</li>
      <li>Bloco: {bloco}</li>
    </ol>
  )
};

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const newContent = conteudos.map((value, index) => format(value, index));


class Content extends React.Component {
  render() {
    return newContent;
  }
}

export default Content