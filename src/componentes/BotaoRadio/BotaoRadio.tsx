import styled from "@emotion/styled";

const InputRadioEstilizado = styled.input`
  appearance: none;
  opacity: 0;
`;

const LabelEstilizada = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;

  &:hover {
        &:before {
            border-color: ${props => (props.theme.cores.focus)};
        }
    }

    &:before {
        content: '';
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.cores.neutras.a};
        border-color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;
        background-color: ${props => (props.$checked ? props.theme.cores.primarias.b : props.theme.cores.neutras.c)};
        border-color: ${props => (props.$checked ? props.theme.cores.primarias.b : 'inherit')};
    }
`;
//   border-radius: 50%;
//   width: 2rem;
//   height: 2rem;
//   border: 2px solid;
//   border-color: ${({ theme }) => theme.cores.neutras.a};

//     &:hover{
//       border-color: ${({ theme }) => theme.cores.focus};
//     }
// `;

interface PropsBotaoRadio {
  label: string;
  valor: number;
  nome: string;
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}

const BotaoRadio = ({ label, valor, nome, checked, onClick }: PropsBotaoRadio) => {
  return (<LabelEstilizada $checked={checked} htmlFor={`radio-customizado-${valor}`}>
    <InputRadioEstilizado
      id={`radio-customizado-${valor}`}
      value={valor}
      name={nome}
      type="radio"
      onChange={onClick}
    />
    {label}
  </LabelEstilizada>)
};

export default BotaoRadio;