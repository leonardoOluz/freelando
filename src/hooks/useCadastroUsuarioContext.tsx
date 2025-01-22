import { useContext } from "react"
import { CadastroUsuarioContext } from "../contexto/CadastroUsuarioContext"

export const useCadastroUsuarioContext = () => {
    return useContext(CadastroUsuarioContext)
}