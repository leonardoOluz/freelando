import { createContext } from "react";
import { IUsuario } from "./CadastroUsuario";
import { usuarioInicial } from "./usuarioInicial";

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
})