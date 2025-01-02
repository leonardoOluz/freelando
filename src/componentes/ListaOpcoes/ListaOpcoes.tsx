import styled from "@emotion/styled"

const ListaOpcoesEstilizada = styled.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  z-index: 1;
  padding: 0 ;
  text-align: center;
  list-style: none;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.cores.branco};
  border: .1rem solid;
  border-color: ${({ theme }) => theme.cores.neutras.a};
  border-bottom-right-radius: ${({ theme }) => theme.espacamentos.s};
  border-bottom-left-radius: ${({ theme }) => theme.espacamentos.s};
`;

interface PropsListaOpcoes {
  children: React.ReactNode
}

export const ListaOpcoes = ({ children }: PropsListaOpcoes) => {
  return (<ListaOpcoesEstilizada>{children}</ListaOpcoesEstilizada>)
}