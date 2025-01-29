import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../../componentes/CampoTexto/CampoTexo";
import { Botao } from "../../../componentes/Botao/Botao";
import { useEffect } from "react";
import { useSessaoUsuarioContext } from "../../../hooks/useSessaoUsuarioContext";

const FormPerfil = () => {
  const { perfil, profile } = useSessaoUsuarioContext();

  useEffect(() => {
    if (!perfil.nome) {
      profile();
    }
  }, [perfil.nome, profile])

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
            <CampoTexto titulo="Nome" valor={perfil.nome} onChange={() => { }} />
            <CampoTexto titulo="Perfil" valor={perfil.perfil} onChange={() => { }} />
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <CampoTexto titulo="Interesse" valor={perfil.interesse} onChange={() => { }} />
            <CampoTexto titulo="Codigo postal" valor={perfil.cidade} onChange={() => { }} />
            <Botao tipo="submit" variante="primaria" isTotWidth>
              Salvar
            </Botao>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <CampoTexto titulo="Email" valor={perfil.email} onChange={() => { }} />
            <CampoTexto titulo="Cidade" valor={perfil.cidade} onChange={() => { }} />
          </Col>
        </Row>
      </form>
    </Col>
  )
};

export default FormPerfil;