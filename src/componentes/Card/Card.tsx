import styled from "@emotion/styled";

const DivEstilizada = styled.div`   
  padding: ${({ theme }) => theme.espacamentos.l};
  background-color: ${({ theme }) => theme.cores.secundarias.a};
  border: 1px solid ;
  border-color: ${({ theme }) => theme.cores.primarias.a};
  border-radius: ${({ theme }) => theme.espacamentos.s};
`;

interface PropsCard {
  children: React.ReactNode
}

export const Card = ({ children }: PropsCard) => {
  return (<DivEstilizada>
    {children}
  </DivEstilizada>)
}