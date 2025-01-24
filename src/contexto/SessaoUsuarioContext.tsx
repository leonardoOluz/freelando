import { createContext } from "react";

export const SessaoUsuarioContext = createContext<{
    usuarioLogado: boolean,
    login: (email: string, senha: string) => void,
    logout: () => void,
    perfil: ObjectConstructor
}>({
    usuarioLogado: false,
    login: () => null,
    logout: () => null,
    perfil: Object
});