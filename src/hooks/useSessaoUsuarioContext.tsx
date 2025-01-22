import { useContext } from "react"
import { SessaoUsuarioContext } from "../contexto/SessaoUsuarioContext";

export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext)
};