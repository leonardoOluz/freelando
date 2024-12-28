import styled from "@emotion/styled"
import { useState } from "react"

const LabelEstilizado = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  position: relative;
`;

const BotaoEstilizado = styled.button<{ estaAberta: boolean }>`
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
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.7rem;
  outline: none;
  border-bottom-left-radius: ${({ estaAberta }) => estaAberta ? '0' : '18px'};
  border-bottom-right-radius: ${({ estaAberta }) => estaAberta ? '0' : '18px'};
  &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`;

interface PropsListaSuspensa {
  titulo: string
}

export const ListaSuspensa = ({ titulo }: PropsListaSuspensa) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (<LabelEstilizado>
    {titulo}
    <BotaoEstilizado
      estaAberta={isOpen}
      onClick={() => setIsOpen(!isOpen)}>
      Selecione <span>{isOpen ? '▲' : '▼'}</span>
    </BotaoEstilizado>
  </LabelEstilizado>)
}