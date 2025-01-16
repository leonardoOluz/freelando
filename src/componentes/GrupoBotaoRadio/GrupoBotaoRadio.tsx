import { Col } from "react-grid-system";
import BotaoRadio from "../BotaoRadio/BotaoRadio";
import { IOpcoes } from "../../interface/IU";

interface PropsGrupoBotaoRadio {
  opcoes: Array<IOpcoes>;
  onChange: (label: string) => void;
  valor: string;
  nome: string
}

const GrupoBotaoRadio = ({ opcoes, onChange, valor, nome }: PropsGrupoBotaoRadio) => {
 
  return (
    <Col sm={7} md={7}>
      {opcoes.map((opcao) => (
        <BotaoRadio
          key={opcao.valor}
          valor={opcao.label}
          nome={nome}
          checked={opcao.label === valor}
          onClick={() => onChange(opcao.label)}
        />
      ))}
    </Col>
  )
};

export default GrupoBotaoRadio;