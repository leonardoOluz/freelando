import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import concluido from "./assets/Rectangle 6.png"
import styled from "@emotion/styled";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";

const ImagemEstilizada = styled.img`
    width: 100%;
    margin: 2rem 0;
`;

const Concluido = () => {
  return (<div style={{ textAlign: "center" }}>
    <Tipografia variante="h1" componente="h1">
      Seu perfil está completo!
    </Tipografia>
    <Tipografia componente="body" variante="body">
      Agora é só começar a se conectar com os melhores freelancers do mercado!
    </Tipografia>
    <figure>
      <ImagemEstilizada src={concluido} alt="" />
    </figure>
    <Row>
      <Col md={12} sm={12}>
        <Link to="..">
          <Botao variante="secundaria" children="Voltar para a home" />
        </Link>
      </Col>
    </Row>
  </div>)
};

export default Concluido;