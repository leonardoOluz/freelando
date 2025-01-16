import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import styled from "@emotion/styled";
import { IOpcoes } from "../../interface/IU";
import GrupoBotaoRadio from "../../componentes/GrupoBotaoRadio/GrupoBotaoRadio";
import { useState } from "react";
import { Link } from "react-router-dom";
import TipografiaCard from "../../componentes/TipografiaCard/TipografiaCard";


const opcoes: IOpcoes[] = [
  {
    valor: 1,
    label: 'TI e Programação',
  },
  {
    valor: 2,
    label: 'Design e Multimídia',
  },
  {
    valor: 3,
    label: 'Revisão',
  },
  {
    valor: 4,
    label: 'Tradução',
  },
  {
    valor: 5,
    label: 'Transcrição',
  },
  {
    valor: 6,
    label: 'Marketing',
  },
]
//   appearance: none;
//   opacity: 0;

//   &:checked ~ span {
//     border-radius: 16px;
//     border: 1px solid;
//     border-color: ${props => props.theme.cores.focus};
//     background-color: ${({ theme }) => theme.cores.primarias.b};
//   }
// `;

// const LabelEstilizada = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem 0;
//   cursor: pointer;
// `;

// const SpanEstilizado = styled.span`
//   border-radius: 50%;
//   width: 2rem;
//   height: 2rem;
//   border: 2px solid;
//   border-color: ${({ theme }) => theme.cores.neutras.a};

//     &:hover{
//       border-color: ${({ theme }) => theme.cores.focus};
//     }
// `;

const FieldsetEstilizado = styled.fieldset`
  border: none;
  width: 100%;
  padding: 0 0 3rem 0;  
`;

const Interesses = () => {
  const [opcao, setOpcao] = useState<number>(0);

  return (<div>
    <TipografiaCard titulo="Crie seu cadastro" subTitulo="Qual a área de interesse?" />
    <Row>
      <FieldsetEstilizado aria-label="Opções de Interesses">
        <GrupoBotaoRadio opcoes={opcoes} nome="opcao" onChange={setOpcao} valor={opcao} />
      </FieldsetEstilizado>
    </Row>
    <Row>
      <Col md={6} sm={6}>
        <div style={{ textAlign: "left" }}>
          <Link to="..">
            <Botao variante="secundaria" children="Anterior" />
          </Link>
        </div>
      </Col>
      <Col md={6} sm={6}>
        <div style={{ textAlign: "right" }}>
          <Link to="/cadastro/dados-pessoais">
            <Botao variante="primaria" children="Próximo" />
          </Link>
        </div>
      </Col>
    </Row>
  </div>);
};

export default Interesses;