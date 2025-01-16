import { useState } from "react";
import { CadastroUsuarioContext } from "./CadastroUsuarioContext";
import { usuarioInicial } from "./usuarioInicial";

export interface IUsuario {
  perfil: string;
  interesse: string;
  nomeCompleto: string;
  uf: string;
  cidade: string;
  email: string;
  senha: string;
  senhaConfirmada: string;
}

interface PropsCadastroUsuarioProvider {
  children: React.ReactNode
}
export const CadastroUsuarioProvider = ({ children }: PropsCadastroUsuarioProvider) => {
  const [usuario, setUsuario] = useState<IUsuario>(usuarioInicial)

  const setPerfil = (perfil: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        perfil
      }
    })
  }

  const setInteresse = (interesse: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        interesse
      }
    })
  }

  const setNomeCompleto = (nomeCompleto: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        nomeCompleto
      }
    })
  }

  const setUf = (uf: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        uf
      }
    })
  }

  const setEmail = (email: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        email
      }
    })
  }

  const setCidade = (cidade: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        cidade
      }
    })
  }

  const setSenha = (senha: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        senha
      }
    })
  }

  const setSenhaConfirmada = (senhaConfirmada: string) => {
    setUsuario((prev) => {
      return {
        ...prev,
        senhaConfirmada
      }
    })
  }

  const contexto = {
    usuario,
    setPerfil,
    setInteresse,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada
  }

  return (
    <CadastroUsuarioContext.Provider value={contexto}>
      {children}
    </CadastroUsuarioContext.Provider>
  )
}