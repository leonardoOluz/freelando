import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import meuPerfil from "../../../assets/Perfil.png"

const ImagemStilizada = styled.img`
  width: 100%;
  object-fit: cover;
`;

const BannerPerfil = () => {
  return (<>
    <Row>
      <Col sm={12} md={12} lg={12} >
        <ImagemStilizada src={meuPerfil} alt="uma visao de um homem olhando para o notebook e teclando" />
      </Col>
    </Row>
  </>)
};

export default BannerPerfil;