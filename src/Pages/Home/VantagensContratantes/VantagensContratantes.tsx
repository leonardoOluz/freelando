import styled from "@emotion/styled";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import AtendimentoAgilidade from "../svg/AtendimentoAgilidade";
import ProfissionaisQualificados from "../svg/ProfissionaisQualificados";
import SimplicidadeSegurancao from "../svg/SimplicidadeSegurancao";
import MultiplasEspecialidades from "../svg/MultiplasEspecialidades";
import ListaHome from "../ListaHome/ListaHome";
import FigureHome from "../FigureHome/FigureHome";
import ItemHome from "../ListaHome/ItemHome/ItemHome";

const SessaoStyled = styled.section`
  text-align: center;
`;

interface PropsIVantagensContratantes {
  subTitulo: string;
}

const VantagensContratantes = ({ subTitulo }: PropsIVantagensContratantes) => {
  return (<SessaoStyled aria-label="">

    <Tipografia componente="h2" variante="h2">
      {subTitulo}
    </Tipografia>

    <ListaHome>
      <ItemHome>
        <FigureHome>
          <ProfissionaisQualificados />
        </FigureHome>
      </ItemHome>
      <ItemHome>
        <FigureHome>
          <MultiplasEspecialidades />
        </FigureHome>
      </ItemHome>
      <ItemHome>
        <FigureHome>
          <AtendimentoAgilidade />
        </FigureHome>
      </ItemHome>
      <ItemHome>
        <FigureHome>
          <SimplicidadeSegurancao />
        </FigureHome>
      </ItemHome>
    </ListaHome>

  </SessaoStyled>)
};

export default VantagensContratantes;
