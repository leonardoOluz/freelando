import { Col, Row } from "react-grid-system";
import concluido from "./assets/Rectangle 6.png"
import styled from "@emotion/styled";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import TipografiaCard from "../../componentes/TipografiaCard/TipografiaCard";
import { useEffect } from "react";
import { useCadastroUsuarioContext } from "../../contexto/useCadastroUsuarioContext";

const ImagemEstilizada = styled.img`
    width: 100%;
    margin: 2rem 0;
`;

const Concluido = () => {
  const { cadastroConcluido } = useCadastroUsuarioContext();

  useEffect(() => {
    cadastroConcluido();
  }, [cadastroConcluido])

  return (<div>
    <TipografiaCard titulo="Seu perfil está completo!" descricao="  Agora é só começar a se conectar com os melhores freelancers do mercado!
    "/>
    <figure>
      <ImagemEstilizada src={concluido} alt="" />
    </figure>
    <Row style={{ textAlign: "center" }}>
      <Col md={12} sm={12}>
        <Link to="..">
          <Botao variante="secundaria" children="Voltar para a home" />
        </Link>
      </Col>
    </Row>
  </div>)
};

export default Concluido;