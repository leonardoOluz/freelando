import { Col, Container, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Card } from "../../componentes/Card/Card";
import mouseImg from "../../assets/mouse.png";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexo";
import { Link, useNavigate } from "react-router-dom";
import { Botao } from   "../../componentes/Botao/Botao";
import { useState } from "react";
import { useSessaoUsuarioContext } from "../../hooks/useSessaoUsuarioContext";

const Login = () => {
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { login } = useSessaoUsuarioContext();
   const navegar = useNavigate();

  const tentarEfetuarLogin = (event: React.FormEvent) => {
    event.preventDefault();
    login(email, senha);
      setSenha("");
      setEmail("");
      navegar("/");
  }

  return (
    <Container>
      <Row justify="center">
        <Col xxxl={6} xxl={6} xl={6} xs={6} lg={6} md={8} sm={12}
          style={{ margin: "8rem 0" }}>
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <img src={mouseImg} alt="foto mouse" />
          </div>
          <Card>
            <form style={{ textAlign: "center" }} onSubmit={tentarEfetuarLogin}>

              <Tipografia componente="h2" variante="h1">
                Efetuar Login
              </Tipografia>

              <div style={{ textAlign: "left" }}>
                <CampoTexto titulo="Email" tipo="email" valor={email} onChange={setEmail} />
                <CampoTexto titulo="Senha" tipo="password" valor={senha} onChange={setSenha} tipoSenha />
              </div>

              <div style={{ textAlign: "end" }}>
                <Link to="" style={{ color: "rgba(55, 55, 55, 1)" }}>
                  <Tipografia componente="body" variante="subtititle2">Esqueceu sua senha?</Tipografia>
                </Link>
              </div>

              <div style={{
                borderBottom: "1px solid rgba(87, 84, 237, 1)",
                paddingBottom: "5rem"
              }}>
                <Botao tipo="submit" variante="primaria">Login</Botao>
              </div>
              <Tipografia componente="body2" variante="body2">
                Ainda não criou sua conta no Freelando?
              </Tipografia>
              <Link to="" style={{ color: "rgba(217, 49, 20, 1)" }}>
                Cadastre-se clicando aqui!
              </Link>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};

export default Login;