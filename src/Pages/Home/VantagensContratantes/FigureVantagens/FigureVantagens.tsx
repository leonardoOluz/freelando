import styled from "@emotion/styled";

const FigureStyled = styled.figure`
  
`;

interface PropsIFigureVantagens {
  children: React.ReactNode
}

const FigureVantagens = ({ children }: PropsIFigureVantagens) => {
  return (<FigureStyled>
    {children}
  </FigureStyled>)
};

export default FigureVantagens;