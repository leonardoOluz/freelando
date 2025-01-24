import { SessaoUsuarioContext } from "./SessaoUsuarioContext"
import http from "../http"
import { IData } from "../interface/IU"
import { ArmazenadorToken } from "../utils/ArmazenadorToken"

interface IPropsSessaoUsuarioProvider {
  children: React.ReactNode
}

export const SessaoUsuarioProvider = ({ children }: IPropsSessaoUsuarioProvider) => {

  const login = (email: string, senha: string) => {
    if (email.length < 3 || senha.length < 3) {
      alert("verifique os campos obrigatorios")
      return
    }
    http.post<IData>("/auth/login", {
      email,
      senha
    })
      .then((resposta) => {
        ArmazenadorToken.definirTokens(
          resposta.data.access_token,
          resposta.data.refresh_token
        )
      })
      .catch((erro) => console.error(erro))
  }

  const value = {
    usuarioLogado: false,
    login,
    logout: () => null,
    perfil: Object
  }
  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  )
}