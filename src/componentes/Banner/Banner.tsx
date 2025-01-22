import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";
import { Botao } from "../Botao/Botao";
import { Link } from "react-router-dom";

const SessaoBannerStyled = styled.section`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.espacamentos.s};
  color: ${({ theme }) => theme.cores.primarias.b};
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.espacamentos.l};
  background-color: ${({ theme }) => theme.cores.neutras.c};
`;

const ImgStyled = styled.img`
  object-fit: cover;
`;

interface PropsIBanner {
  img: string;
  titulo: string;
  textoLink: string;
}

const Banner = ({ img, titulo, textoLink }: PropsIBanner) => {
  return (<SessaoBannerStyled aria-label="Sessão de Banner">
    <div style={{ maxWidth: "498px" }}>
      <Tipografia componente="h1" variante="h1">
        {titulo}
      </Tipografia>
      <Botao variante="primaria">
        <Link to="/cadastro" style={{ color: "white", textDecoration: "none" }}>
          {textoLink}
        </Link>
      </Botao>
    </div>

    <ImgStyled src={img} alt="Três pessoas, uma mulher com cabelo cacheado e oculos no rosto,com sorriso, um homem com cabelo gande amarrado e de baraba, outra mulher cabelo curto loiro sorrindo " />
  </SessaoBannerStyled>)
};

export default Banner;