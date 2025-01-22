import styled from "@emotion/styled";
import FigureVantagens from "./FigureVantagens/FigureVantagens";
import qualificadosImg from "../assets/qualificados.png"
import especialidadesImg from "../assets/especialidadesFrame.png"
import agilidadeImg from "../assets/agilidade.png"
import seguranca from "../assets/seguranca.png"
import ListaFiguresStyled from "./ListaFigures/ListaFigures";
import ItemFiguresStyled from "./ListaFigures/ItemFigures/ItemFigures";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";

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

    <ListaFiguresStyled>
      <ItemFiguresStyled>
        <FigureVantagens>
          <img src={qualificadosImg} alt="" />
        </FigureVantagens>
      </ItemFiguresStyled>
      <ItemFiguresStyled>
        <FigureVantagens>
          <img src={especialidadesImg} alt="" />
        </FigureVantagens>
      </ItemFiguresStyled>
      <ItemFiguresStyled>
        <FigureVantagens>
          <img src={agilidadeImg} alt="" />
        </FigureVantagens>
      </ItemFiguresStyled>
      <ItemFiguresStyled>
        <FigureVantagens>
          <img src={seguranca} alt="" />
        </FigureVantagens>
      </ItemFiguresStyled>
    </ListaFiguresStyled>

  </SessaoStyled>)
};

export default VantagensContratantes;
