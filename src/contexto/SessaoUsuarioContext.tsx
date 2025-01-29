import { createContext } from "react";
import { IUsuario } from "../interface/IU";
import { usuarioInicial } from "./usuarioInicial";

export const SessaoUsuarioContext = createContext<{
    usuarioLogado: boolean,
    login: (email: string, senha: string) => void,
    logout: () => void,
    perfil: IUsuario,
    setPerfil: React.Dispatch<React.SetStateAction<IUsuario>>
    profile: () => void
}>({
    usuarioLogado: false,
    login: () => null,
    logout: () => null,
    perfil: usuarioInicial,
    setPerfil: () => null,
    profile: () => null
});