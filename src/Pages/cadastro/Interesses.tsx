import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import styled from "@emotion/styled";
import { IOpcoes } from "../../interface/IU";
import GrupoBotaoRadio from "../../componentes/GrupoBotaoRadio/GrupoBotaoRadio";
import { Link } from "react-router-dom";
import TipografiaCard from "../../componentes/TipografiaCard/TipografiaCard";
import { useCadastroUsuarioContext } from "../../contexto/useCadastroUsuarioContext";


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

const FieldsetEstilizado = styled.fieldset`
  border: none;
  width: 100%;
  padding: 0 0 3rem 0;  
`;

const Interesses = () => {
  const { setInteresse, usuario } = useCadastroUsuarioContext();

  return (<div>
    <TipografiaCard titulo="Crie seu cadastro" subTitulo="Qual a área de interesse?" />
    <Row>
      <FieldsetEstilizado aria-label="Opções de Interesses">
        <GrupoBotaoRadio
          opcoes={opcoes}
          nome="opcao"
          onChange={setInteresse}
          valor={usuario.interesse}
        />
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