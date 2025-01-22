import { createContext } from "react";
import { usuarioInicial } from "./usuarioInicial";
import { IUsuario } from "../interface/IU";

export const CadastroUsuarioContext = createContext<{
  usuario: IUsuario;
  setPerfil: (perfil: string) => void;
  setInteresse: (interesse: string) => void;
  setNomeCompleto: (nomeCompleto: string) => void;
  setUf: (uf: string) => void;
  setCidade: (cidade: string) => void;
  setEmail: (email: string) => void;
  setSenha: (senha: string) => void;
  setSenhaConfirmada: (senhaConfirmada: string) => void;
  submeterUsuario: () => void;
  possuiPerfil: () => boolean;
  possuiInteresse: () => boolean;
  cadastroConcluido: () => void;
  erro: string
}>({
  usuario: usuarioInicial,
  setPerfil: () => { },
  setInteresse: () => { },
  setNomeCompleto: () => { },
  setUf: () => { },
  setCidade: () => { },
  setEmail: () => { },
  setSenha: () => { },
  setSenhaConfirmada: () => { },
  submeterUsuario: () => { },
  possuiPerfil: () => true,
  possuiInteresse: () => true,
  cadastroConcluido: () => { },
  erro: ""
})