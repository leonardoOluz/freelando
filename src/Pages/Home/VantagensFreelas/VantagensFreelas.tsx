import styled from "@emotion/styled";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import ClienteVerificados from "../svg/ClienteVerificados";
import AtendimentoAgilidadeFreela from "../svg/AtendimentoAgilidadeFreela";
import ProjetosInteressantes from "../svg/ProjetosInteressantes";
import RemunercaoSupervisionada from "../svg/RemunercaoSupervisionada";
import ListaHome from "../ListaHome/ListaHome";
import ItemHome from "../ListaHome/ItemHome/ItemHome";
import FigureHome from "../FigureHome/FigureHome";

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

    <ListaHome>
      <ItemHome>
        <FigureHome>
          <ClienteVerificados />
        </FigureHome>
      </ItemHome>
      <ItemHome>
        <FigureHome>
          <AtendimentoAgilidadeFreela />
        </FigureHome>
      </ItemHome>
      <ItemHome>
        <FigureHome>
          <ProjetosInteressantes />
        </FigureHome>
      </ItemHome>
      <ItemHome>
        <FigureHome>
          <RemunercaoSupervisionada />
        </FigureHome>
      </ItemHome>
    </ListaHome>
  </SessaoStyled>)
};

export default VantagensFreelas;