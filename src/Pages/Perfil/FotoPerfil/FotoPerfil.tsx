import styled from "@emotion/styled";
import { Col } from "react-grid-system";
import fotoPerfil from "../../../assets/perfilJoaoMarques.png"


const ContainerImagemEstilizada = styled.div`
text-align: center;
padding-top: 4rem;
`;

const FotoPerfil = () => {
  return (<>
    <Col sm={5} md={5} lg={5}>
      <ContainerImagemEstilizada>
        <img src={fotoPerfil} alt="um desenho de uma foto sem rosto" />
      </ContainerImagemEstilizada>
    </Col>
  </>)
};

export default FotoPerfil;