import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import imgCLiente from "./assets/cliente.png";
import imgFreela from "./assets/freela.png";
import { Link } from "../../componentes/Link/Link";
import { Link as RouterLink } from "react-router-dom";
import TipografiaCard from "../../componentes/TipografiaCard/TipografiaCard";

const SelecaoCliente = () => {
  return (<div>
    <TipografiaCard titulo="Crie seu cadastro" subTitulo="Como podemos te ajudar?" />
    <Row>
      <Col md={6} sm={12}>
        <RouterLink to="interesses">
          <img src={imgCLiente} alt="cliente com o punha da mão no queixo e o cotovelo para baixo apoiando sobre algo não visivel" />
          <Tipografia variante="body" componente="body">
            Sou cliente e preciso de um freela!
          </Tipografia>
        </RouterLink>
      </Col>
      <Col md={6} sm={12}>
        <img src={imgFreela} alt="Profissional de terno fazendo gestos com os dedos " />
        <Tipografia variante="body" componente="body">
          Sou um freela e preciso de clientes!
        </Tipografia>
      </Col>
    </Row>
    <div style={{ textAlign: "center" }}>
      <Tipografia componente="body2" variante="body2">Já tem conta?</Tipografia>
      <p>
        <Link variante="secundario">
          Faça login!
        </Link>
      </p>
    </div>
  </div>)
};

export default SelecaoCliente;