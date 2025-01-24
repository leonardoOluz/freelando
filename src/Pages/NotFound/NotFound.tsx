import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import notFoundSVG from "../../assets/NotFound.png";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import LayoutBase from "../LayoutBase";
import LayoutBaseCard from "../LayoutBaseCard";

const ImgNotFound = styled.img`
  object-fit: cover;
  max-width: 90%;
`;

const NotFound = () => {
  return (
    <LayoutBase>
      <LayoutBaseCard>
        <Row>
          <Col sm={12} md={12} lg={12} style={{ textAlign: "center" }}>
            <Tipografia componente="h1" variante="h1">{"Ops... Página não encontrada :("}</Tipografia>
            <ImgNotFound src={notFoundSVG} alt="Imagem do numero 404" />
            <Tipografia componente="body" variante="body">
              Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
            </Tipografia>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Botao variante="secundaria" children="Voltar para a home" />
            </Link>
          </Col>
        </Row>
      </LayoutBaseCard>
    </LayoutBase>
  )
};

export default NotFound;