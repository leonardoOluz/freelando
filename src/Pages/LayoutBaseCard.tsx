import { Col, Container, Row } from "react-grid-system"
import { Outlet } from "react-router-dom";
import { CadastroUsuarioProvider } from "../contexto/CadastroUsuario";
import { Card } from "../componentes/Card/Card";

interface LayoutBaseCadastroProps {
  children?: React.ReactNode
}

const LayoutBaseCard = ({children}: LayoutBaseCadastroProps) => {
  return (
    <Container>
      <CadastroUsuarioProvider>
        <Row justify="center">
          <Col xxxl={6} xxl={6} xl={6} xs={6} lg={6} md={8} sm={12} style={{ margin: "8rem 0" }}>
            <Card>
              <Outlet />
              {children}
            </Card>
          </Col>
        </Row>
      </CadastroUsuarioProvider>
    </Container>
  )
};

export default LayoutBaseCard;