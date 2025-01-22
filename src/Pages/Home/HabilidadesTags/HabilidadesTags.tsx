import styled from "@emotion/styled";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import ListaHabilidadeTags from "./ListaHabilidadeTags/ListaHabilidadeTags";
import ItemHabilidadeTags from "./ListaHabilidadeTags/ItemHabilidadeTags/ItemHabilidadeTags";
import BotaoHabilidadeTags from "./BotaoHabilidadeTags/BotaoHabilidadeTags";

const SessaoStyled = styled.section`
  
  text-align: center;
`;

interface PropsOHabilidadesTags {
  subTitulo: string;
  tags: string[];
}

const HabilidadesTags = ({ subTitulo, tags }: PropsOHabilidadesTags) => {
  return (<SessaoStyled>
    <Tipografia componente="h2" variante="h2">
      {subTitulo}
    </Tipografia>
    <ListaHabilidadeTags>
      {tags.map((tag, index) => (
        <ItemHabilidadeTags key={index}>
          <BotaoHabilidadeTags type="button">
            <Tipografia componente="body" variante="body2">
              {tag}
            </Tipografia>
          </BotaoHabilidadeTags>
        </ItemHabilidadeTags>
      ))}
    </ListaHabilidadeTags>

  </SessaoStyled>)
};

export default HabilidadesTags;