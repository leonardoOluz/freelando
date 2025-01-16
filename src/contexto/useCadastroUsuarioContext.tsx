import { useContext } from "react"
import { CadastroUsuarioContext } from "./CadastroUsuarioContext"

export const useCadastroUsuarioContext = () => {
    return useContext(CadastroUsuarioContext)
}