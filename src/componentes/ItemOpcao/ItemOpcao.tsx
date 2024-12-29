import styled from "@emotion/styled"

const ItemOpcaoEstilizada = styled.li<{ focoAtivo: boolean }>`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  padding: 0.4rem 1rem;
  border-bottom: 0.1rem solid ;
  border-color: ${({ theme }) => theme.cores.neutras.b};
  cursor: pointer;
  color: ${({ focoAtivo, theme }) => focoAtivo ? theme.cores.focus : "inherit"};
  &:hover {
    color: ${props => props.theme.cores.focus};
  }
`;


interface PropsItemOpcao {
  texto: string;
  focoAtivo: boolean;
}

export const ItemOpcao = ({ texto, focoAtivo }: PropsItemOpcao) => {
  return (<ItemOpcaoEstilizada focoAtivo={focoAtivo}>
    {texto}
  </ItemOpcaoEstilizada>)
}