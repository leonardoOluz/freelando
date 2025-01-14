import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexo";
import { ListaSuspensa } from "../../componentes/ListaSuspensa/ListaSuspensa";
import { IEstadosBrasileiros } from "../../interface/IU";

const estadosBrasileiros: IEstadosBrasileiros[] = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

const DadosPessoais = () => {

  return (<div>
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Freelando
      </Tipografia>

      <Tipografia componente="body" variante="body">
        Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
      </Tipografia>
    </div>

    <Row>
      <Col>
        <CampoTexto titulo="Nome Completo" />
      </Col>
    </Row>

    <Row>
      <Col lg={4} md={4} sm={4}>
        <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros} />
      </Col>
      <Col lg={8} md={8} sm={8}>
        <CampoTexto titulo="Cidade" />
      </Col>
    </Row>

    <Row>
      <Col>
        <CampoTexto titulo="E-mail" />
      </Col>
    </Row>

    <Row>
      <Col lg={6} md={6} sm={6}>
        <CampoTexto titulo="Senha" />
      </Col>
      <Col lg={6} md={6} sm={6}>
        <CampoTexto titulo="Repita a Senha" />
      </Col>
    </Row>

    <Row>
      <Col lg={6} md={6} sm={6}>
        <Link to="/cadastro/interesses" >
          <Botao variante="secundaria">Anterior</Botao>
        </Link>
      </Col>
      <Col lg={6} md={6} sm={6}>
        <div style={{ textAlign: 'right' }}>
          <Link to="/cadastro/concluido">
            <Botao variante="primaria">Proximo</Botao>
          </Link>
        </div>
      </Col>
    </Row>

  </div>);
};

export default DadosPessoais;