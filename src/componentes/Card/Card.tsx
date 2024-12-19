import styled from "@emotion/styled";

const DivEstilizada = styled.div`   
  padding: 32px;
  background-color: #EBEAF9;
  border: 1px solid #5754ED;
  border-radius: 16px;
`;

interface PropsCard {
  children: React.ReactNode
}

export const Card = ({ children }: PropsCard) => {
  return (<DivEstilizada>
    {children}
  </DivEstilizada>)
}