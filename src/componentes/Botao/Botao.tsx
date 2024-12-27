import styled from "@emotion/styled";

interface PropsBotao {
  children: React.ReactNode;
  variante: 'primaria' | 'secundaria';
};

const BotaoPrimarioEstilizado = styled.button`
    background: ${({ theme }) => theme.cores.primarias.b};
    color: ${({ theme }) => theme.cores.branco};
    border-radius: ${({ theme }) => theme.espacamentos.s};
    padding: ${({ theme }) => theme.espacamentos.xs} ${({ theme }) => theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border: none;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.dark.b};
    }
`;
const BotaoSecundarioEstilizado = styled.button`
    background: transparent;
    color: ${({theme}) => theme.cores.primarias.b};
    border: 2px solid ${({theme}) => theme.cores.primarias.b};
    border-radius: ${({theme}) => theme.espacamentos.s};
    padding: ${({theme}) => theme.espacamentos.xs} ${({theme}) => theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;

    &:hover {
        border-color: ${({theme}) => theme.cores.dark.b};
        color: ${({theme}) => theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${({theme}) => theme.cores.focus};
    }
`;

export const Botao = ({ children, variante = 'primaria' }: PropsBotao) => {
  if (variante === 'primaria') {
    return <BotaoPrimarioEstilizado>
      {children}
    </BotaoPrimarioEstilizado>
  }
  return <BotaoSecundarioEstilizado>
    {children}
  </BotaoSecundarioEstilizado>
}
