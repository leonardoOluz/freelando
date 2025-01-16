export interface IU {
  cores: ICores;
  espacamentos: IEspacamentos;
  fontFamily: string;
}
export interface ICores {
  atencao: string;
  focus: string;
  branco: string;
  primarias: IPrimarias;
  secundarias: ISecundarias;
  dark: IDark;
  neutras: INeutras;
}
export interface IPrimarias {
  a: string,
  b: string,
  c: string,
}
export interface ISecundarias {
  a: string,
  b: string,
  c: string,
}
export interface IDark {
  a: string,
  b: string,
}
export interface INeutras {
  a: string,
  b: string,
  c: string,
}
export interface IEspacamentos {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}
export interface IEstadosBrasileiros {
  text: string,
  value: string
}
export interface IOpcoes {
  valor: number;
  label: string;
}
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