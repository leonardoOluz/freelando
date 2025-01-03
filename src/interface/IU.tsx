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