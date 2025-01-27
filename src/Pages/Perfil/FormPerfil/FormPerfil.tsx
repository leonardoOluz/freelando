import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../../componentes/CampoTexto/CampoTexo";
import { Botao } from "../../../componentes/Botao/Botao";
import { useEffect } from "react";
import http from "../../../http";

const FormPerfil = () => {
  useEffect(() => {
    http.get("profile")
      .then(resposta => console.log(resposta.data))
      .then(erro => console.error(erro))
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Col sm={7} md={7} lg={7}>
      <form style={{ paddingBottom: "5rem" }} onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <Tipografia componente="h2" variante="h2">
              Revise seus dados
            </Tipografia>
            <CampoTexto titulo="Nome" valor="" onChange={() => { }} />
            <CampoTexto titulo="Sobrenome" valor="" onChange={() => { }} />
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <CampoTexto titulo="Celular" valor="" onChange={() => { }} />
            <CampoTexto titulo="Codigo postal" valor="" onChange={() => { }} />
            <Botao tipo="submit" variante="primaria" isTotWidth>
              Salvar
            </Botao>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <CampoTexto titulo="Email" valor="" onChange={() => { }} />
            <CampoTexto titulo="Pais" valor="" onChange={() => { }} />
          </Col>
        </Row>
      </form>
    </Col>
  )
};

export default FormPerfil;