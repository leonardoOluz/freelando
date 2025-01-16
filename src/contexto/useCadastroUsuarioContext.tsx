import { useState } from "react"
import { CadastroUsuarioContext } from "./CadastroUsuarioContext"

export const useCadastroUsuarioContext = () => {
    return useState(CadastroUsuarioContext)
}