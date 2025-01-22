import { SessaoUsuarioContext } from "./SessaoUsuarioContext"

interface IPropsSessaoUsuarioProvider {
  children: React.ReactNode
}

export const SessaoUsuarioProvider = ({ children }: IPropsSessaoUsuarioProvider) => {

  const value = {
    usuarioLogado: false,
    login: () => null,
    logout: () => null,
    perfil: Object
  }
  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  )
}