import styled from "@emotion/styled";

const BotaoHabilidadeTags = styled.button`
  border: .1rem solid ;
  border-color: ${({ theme }) => theme.cores.neutras.a};
  border-radius: 1.6rem;
  padding: 0 ${({ theme }) => theme.espacamentos.s};
  color: ${({ theme }) => theme.cores.neutras.a};
  cursor: pointer;
  
  &:hover{
    border-color: ${({ theme }) => theme.cores.primarias.b};
    color: ${({ theme }) => theme.cores.primarias.b};
  }
`;

export default BotaoHabilidadeTags;