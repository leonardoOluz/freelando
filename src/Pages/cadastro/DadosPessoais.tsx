import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexo";
import { ListaSuspensa } from "../../componentes/ListaSuspensa/ListaSuspensa";
import { IEstadosBrasileiros } from "../../interface/IU";
import TipografiaCard from "../../componentes/TipografiaCard/TipografiaCard";
import { useCadastroUsuarioContext } from "../../contexto/useCadastroUsuarioContext";

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
  const { usuario, setNomeCompleto, setEmail, setCidade, setSenha, setSenhaConfirmada, setUf } = useCadastroUsuarioContext();

  return (<div>
    <TipografiaCard titulo="Freelando" descricao=" Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
      "/>
    <Row>
      <Col>
        <CampoTexto
          valor={usuario.nomeCompleto}
          onChange={setNomeCompleto}
          titulo="Nome Completo"
        />
      </Col>
    </Row>

    <Row>
      <Col lg={4} md={4} sm={4}>
        <ListaSuspensa handleChange={setUf} titulo="Estado" opcoes={estadosBrasileiros} />
      </Col>
      <Col lg={8} md={8} sm={8}>
        <CampoTexto
          titulo="Cidade"
          valor={usuario.cidade}
          onChange={setCidade}
        />
      </Col>
    </Row>

    <Row>
      <Col>
        <CampoTexto
          valor={usuario.email}
          onChange={setEmail}
          titulo="E-mail"
          tipo="email" 
          />
      </Col>
    </Row>

    <Row>
      <Col lg={6} md={6} sm={6}>
        <CampoTexto
          valor={usuario.senha}
          onChange={setSenha}
          titulo="Senha" />
      </Col>
      <Col lg={6} md={6} sm={6}>
        <CampoTexto
          valor={usuario.senhaConfirmada}
          onChange={setSenhaConfirmada}
          titulo="Repita a Senha" />
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