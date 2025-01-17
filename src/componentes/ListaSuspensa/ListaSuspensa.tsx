import styled from "@emotion/styled"
import { useState } from "react"
import { IEstadosBrasileiros } from "../../interface/IU";
import { ListaOpcoes } from "../ListaOpcoes/ListaOpcoes";
import { ItemOpcao } from "../ItemOpcao/ItemOpcao";

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
  titulo: string;
  opcoes: Array<IEstadosBrasileiros>
  handleChange: (e: string) => void
}

export const ListaSuspensa = ({ titulo, opcoes, handleChange }: PropsListaSuspensa) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focoAtivo, setFocoAtivo] = useState<number | null>(null);
  const [focoSelecionado, setFocoSelecionado] = useState<string | null>();

  const manipularTeclaDoTeclado = (evento: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (evento.key) {
      case "ArrowDown":
        evento.preventDefault();
        setIsOpen(true)
        setFocoAtivo(focoAntigo => {
          if (focoAntigo == null) {
            return 0
          }
          if (focoAntigo >= (opcoes.length - 1)) {
            return 0
          }
          return focoAntigo += 1
        })
        break;
      case "ArrowUp":
        evento.preventDefault();
        setIsOpen(true)
        setFocoAtivo(focoAntigo => {
          if (focoAntigo == null) {
            return opcoes.length - 1
          }
          if (focoAntigo <= 0) {
            return opcoes.length - 1
          }
          return focoAntigo -= 1
        })
        break;
      case "Enter":
        evento.preventDefault();
        if (focoAtivo) {
          setFocoSelecionado(opcoes[focoAtivo].text);
          handleChange(opcoes[focoAtivo].text);
          setFocoAtivo(null);
          setIsOpen(false);
        }
        break;
      case "Escape":
        evento.preventDefault();
        setFocoAtivo(null);
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        setFocoAtivo(null);
        break;
      default:
        break;
    }
  }

  return (<LabelEstilizado>
    {titulo}
    <BotaoEstilizado
      estaAberta={isOpen}
      onKeyDown={manipularTeclaDoTeclado}
      onClick={() => setIsOpen(!isOpen)}>
      {focoSelecionado ? focoSelecionado : 'Selecione'}
      <span>{isOpen ? '▲' : '▼'}</span>
    </BotaoEstilizado>
    {isOpen && <ListaOpcoes>
      {opcoes.map((opcao, index) => <ItemOpcao
        focoAtivo={focoAtivo === index}
        key={opcao.value}
        texto={opcao.text}
        onClick={() => {
          setFocoSelecionado(opcao.text)
          handleChange(opcao.text)
        }}
      />)}
    </ListaOpcoes>}
  </LabelEstilizado>)
}