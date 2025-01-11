import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import imgCLiente from "./assets/cliente.png";
import imgFreela from "./assets/freela.png";

const SelecaoCliente = () => {
  return (<>
    <Tipografia variante="h2" componente="h1">
      Crie seu cadastro
    </Tipografia>
    <Tipografia variante="h3" componente="h2">
      Como podemos te ajudar?
    </Tipografia>
    <Row>
      <Col md={6} sm={12}>
        <img src={imgCLiente} alt="cliente com o punha da mão no queixo e o cotovelo para baixo apoiando sobre algo não visivel" />
      </Col>
      <Col md={6} sm={12}>
        <img src={imgFreela} alt="Profissional de terno fazendo gestos com os dedos " />
      </Col>
    </Row>
  </>)
};

export default SelecaoCliente;