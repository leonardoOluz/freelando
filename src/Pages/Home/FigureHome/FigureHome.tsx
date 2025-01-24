import styled from "@emotion/styled";

const FigureStyled = styled.figure`
margin: 0;
`;

interface PropsIFigureVantagens {
  children: React.ReactNode
}

const FigureHome = ({ children }: PropsIFigureVantagens) => {
  return (<FigureStyled>
    {children}
  </FigureStyled>)
};

export default FigureHome;