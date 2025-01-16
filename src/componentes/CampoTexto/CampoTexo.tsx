import styled from "@emotion/styled";
const LabelEstilizada = styled.label`  
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;
`;

const InputEstilizada = styled.input`  
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${({ theme }) => theme.espacamentos.xs};
    margin-bottom: ${({ theme }) => theme.espacamentos.s};
    background-color: ${({ theme }) => theme.cores.branco};
    border: .1rem solid;
    border-color: ${({ theme }) => theme.cores.neutras.a};
    border-radius: ${({ theme }) => theme.espacamentos.s};
    height: 4rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.7rem;
    padding: 0 1rem;
`;

interface PropsCampoTexto {
  titulo: string;
  valor: string;
  onChange: (value: string) => void;
  tipo?: string
}

export const CampoTexto = ({ titulo, valor, onChange, tipo = "text" }: PropsCampoTexto) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }

  return (<LabelEstilizada>
    {titulo}
    <InputEstilizada value={valor} onChange={handleChange} type={tipo} required/>
  </LabelEstilizada>)
};