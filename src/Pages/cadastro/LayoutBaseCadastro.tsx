import { Col, Row } from "react-grid-system"
import { Card } from "../../componentes/Card/Card"
import { Outlet } from "react-router-dom";
import { CadastroUsuarioProvider } from "../../contexto/CadastroUsuario";

const LayoutBaseCadastro = () => {
  return (
    <CadastroUsuarioProvider>
      <Row justify="center">
        <Col xxxl={6} xxl={6} xl={6} xs={6} lg={6} md={8} sm={12} style={{ margin: "8rem 0" }}>
          <Card>
            <Outlet />
          </Card>
        </Col>
      </Row>
    </CadastroUsuarioProvider>
  )
};

export default LayoutBaseCadastro;