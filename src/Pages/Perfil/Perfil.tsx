import { Container, Row } from "react-grid-system";
import BannerPerfil from "./BannerPerfil/BannerPerfil";
import FotoPerfil from "./FotoPerfil/FotoPerfil";
import FormPerfil from "./FormPerfil/FormPerfil";


const Perfil = () => {
  return (<>
    <BannerPerfil />
    <Container>
      <Row>
        <FotoPerfil />
        <FormPerfil />
      </Row>
    </Container>
  </>
  )
};

export default Perfil
