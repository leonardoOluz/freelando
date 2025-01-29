import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { FreelandoLogo } from "../componentes/Icones/FreelandoLogo";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { ListaInline } from "../componentes/ListaInline/ListaInline";
import { ItemListaInline } from "../componentes/ItemListaInline/ItemListaInline";
import { IconeWhatsApp } from "../componentes/Icones/IconeWhatsApp";
import { IconeTwitch } from "../componentes/Icones/IconeTwitch";
import { IconeInstagram } from "../componentes/Icones/IconeInstagram";
import { IconeTwitter } from "../componentes/Icones/IconeTwiter";
import { Link, Outlet } from "react-router-dom";
import { useSessaoUsuarioContext } from "../hooks/useSessaoUsuarioContext";

interface LayoutBaseProps {
  children?: React.ReactNode
}

const LayoutBase = ({ children }: LayoutBaseProps) => {
  const { usuarioLogado, logout } = useSessaoUsuarioContext()



  return (<>
    <Cabecalho>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col sm={8} md={8} lg={8}>
            <Link
              to="/"
              style={{
                color: "rgba(245, 245, 245, 1)",
                fontSize: "2rem",
                textDecoration: "none",
                lineHeight: "2.4rem",
                fontWeight: "400"
              }} >
              <FreelandoLogo />
            </Link>
          </Col>
          {usuarioLogado
            ? (<>
              <Col sm={4} md={4} lg={4} style={{}}>
                  <Link
                    to="/meu-perfil"
                    style={{
                      color: "rgba(245, 245, 245, 1)",
                      fontSize: "2rem",
                      textDecoration: "none",
                      lineHeight: "2.4rem",
                      fontWeight: "400"
                    }} >
                    Meu Perfil
                  </Link>
                  <Link
                    onClick={() => {
                      logout();
                    }}
                    to="/"
                    style={{
                      paddingLeft: "2rem",
                      color: "rgba(245, 245, 245, 1)",
                      fontSize: "2rem",
                      textDecoration: "none",
                      lineHeight: "2.4rem",
                      fontWeight: "400"
                    }} >
                    Logout
                  </Link>
              </Col>
            </>
            )
            : <Col style={{ textAlign: "right" }}>
              <Link
                to="/login"
                style={{
                  color: "rgba(245, 245, 245, 1)",
                  fontSize: "2rem",
                  textDecoration: "none",
                  lineHeight: "2.4rem",
                  fontWeight: "400"
                }} >
                Login
              </Link>
            </Col>}
        </Row>
      </Container>
    </Cabecalho>
    <main>
      <Outlet />
      {children}
    </main>
    <Rodape>
      <Container>
        <Row align="center">
          <Col>
            <FreelandoLogo height={40} width={176} />
            <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
            <ListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para o WhatsApp">
                  <IconeWhatsApp />
                </a>
              </ItemListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para a Twitch">
                  <IconeTwitch />
                </a>
              </ItemListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para a Instagram">
                  <IconeInstagram />
                </a>
              </ItemListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para a Twitter">
                  <IconeTwitter />
                </a>
              </ItemListaInline>
            </ListaInline>
          </Col>
        </Row>
      </Container>
    </Rodape>
  </>)
};

export default LayoutBase;