import styled from "@emotion/styled";
import { HTMLInputTypeAttribute, useState } from "react";
import { ImEyeBlocked, ImEye } from "react-icons/im";

const LabelEstilizada = styled.label`  
    position: relative;
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;

    .iconSenha{
      position: absolute;
      right: 1rem;
      top: 4rem;
      cursor: pointer;
    }
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
  tipo?: HTMLInputTypeAttribute | undefined
  tipoSenha?: boolean;
}

export const CampoTexto = ({ titulo, valor, onChange, tipo = "text", tipoSenha }: PropsCampoTexto) => {
  const [mostraSenha, setMostraSenha] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }

  const checarSenha = () => {
    setMostraSenha(prev => !prev)
  }

  return (<LabelEstilizada>
    {titulo}
    <InputEstilizada value={valor} onChange={handleChange} type={mostraSenha ? "text" : tipo} required />
    {tipoSenha
      ? mostraSenha
        ? <ImEye onClick={checarSenha} className="iconSenha" size={25} />
        : <ImEyeBlocked onClick={checarSenha} className="iconSenha" size={25} />
      : <></>}
  </LabelEstilizada>)
};