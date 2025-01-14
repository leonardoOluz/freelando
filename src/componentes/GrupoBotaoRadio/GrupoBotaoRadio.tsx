import { Col } from "react-grid-system";
import BotaoRadio from "../BotaoRadio/BotaoRadio";
import { IOpcoes } from "../../interface/IU";

interface PropsGrupoBotaoRadio {
  opcoes: Array<IOpcoes>;
  onChange: (value: number) => void;
  valor: number;
  nome: string
}

const GrupoBotaoRadio = ({ opcoes, onChange, valor, nome }: PropsGrupoBotaoRadio) => {
  console.log(valor)
  return (
    <Col sm={7} md={7}>
      {opcoes.map((opcao) => (
        <BotaoRadio
          key={opcao.valor}
          valor={opcao.valor}
          nome={nome}
          checked={opcao.valor === valor}
          onClick={() => onChange(opcao.valor)}
          label={opcao.label}
        />
      ))}
    </Col>
  )
};

export default GrupoBotaoRadio;