import "@emotion/react";
import { IDark, IEspacamentos, INeutras, IPrimarias, ISecundarias } from "./interface/IU";

declare module "@emotion/react" {
  export interface Theme {
    cores: {
      atencao: string;
      focus: string;
      branco: string;
      primarias: IPrimarias;
      secundarias: ISecundarias;
      dark: IDark;
      neutras: INeutras;
    };
    espacamentos: IEspacamentos;
    fontFamily: string;
  }
}
