import styled from "@emotion/styled";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import ListaFreelas from "./ListaFreelas/ListaFreelas";
import ItemFreelas from "./ListaFreelas/ItemFreelas/ItemFreelas";
import FigureFreelas from "./FigureFreelas/FigureFreelas";
import clienteVerificados from "../assets/clienteVerificados.png"
import atendimentoAgilidade from "../assets/atendimentoAgilidade.png"
import projetoInteressantes from "../assets/projetoInteressantes.png"
import remuneracaoSupervisionada from "../assets/remuneracaoSupervisionada.png"

const SessaoStyled = styled.section`
 text-align: center;  
`;

interface PropsIVantagensFreelas {
  subTitulo: string;
}

const VantagensFreelas = ({ subTitulo }: PropsIVantagensFreelas) => {
  return (<SessaoStyled>
    <Tipografia componente="h2" variante="h2">
      {subTitulo}
    </Tipografia>
    <ListaFreelas>
      <ItemFreelas>
        <FigureFreelas>
          <img src={clienteVerificados} alt="icone de escrito cliente verificado"/>
        </FigureFreelas>
      </ItemFreelas>
      <ItemFreelas>
        <FigureFreelas>
          <img src={atendimentoAgilidade} alt="icone de escrito cliente verificado"/>
        </FigureFreelas>
      </ItemFreelas>
      <ItemFreelas>
        <FigureFreelas>
          <img src={projetoInteressantes} alt="icone de escrito cliente verificado"/>
        </FigureFreelas>
      </ItemFreelas>
      <ItemFreelas>
        <FigureFreelas>
          <img src={remuneracaoSupervisionada} alt="icone de escrito cliente verificado"/>
        </FigureFreelas>
      </ItemFreelas>
    </ListaFreelas>
  </SessaoStyled>)
};

export default VantagensFreelas;