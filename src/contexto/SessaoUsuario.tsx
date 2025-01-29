import { SessaoUsuarioContext } from "./SessaoUsuarioContext"
import http from "../http"
import { IData, IUsuario } from "../interface/IU"
import { ArmazenadorToken } from "../utils/ArmazenadorToken"
import { useState } from "react"
import { usuarioInicial } from "./usuarioInicial"

interface IPropsSessaoUsuarioProvider {
  children: React.ReactNode
}

export const SessaoUsuarioProvider = ({ children }: IPropsSessaoUsuarioProvider) => {
  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(!!ArmazenadorToken.acessToken);
  const [perfil, setPerfil] = useState<IUsuario>(usuarioInicial);


  const login = async (email: string, senha: string) => {
    if (email.length < 3 || senha.length < 3) {
      alert("verifique os campos obrigatorios")
      return
    }
    await http.post<IData>("/auth/login", {
      email,
      senha
    })
      .then((resposta) => {
        ArmazenadorToken.definirTokens(
          resposta.data.access_token,
          resposta.data.refresh_token
        )
        setUsuarioLogado(true);
      })
      .catch((erro) => {
        console.error(erro)
      })
  }

  const profile = async () => {
    await http.get<IUsuario>("profile")
      .then(resposta => {
        setPerfil(resposta.data)
      })
      .then(erro => console.error(erro))
  }

  const logout = () => {
    ArmazenadorToken.efetuarLogout();
    setUsuarioLogado(false);
    setPerfil(usuarioInicial);
  }

  const value = {
    usuarioLogado,
    login,
    logout,
    perfil,
    setPerfil,
    profile
  }
  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  )
}