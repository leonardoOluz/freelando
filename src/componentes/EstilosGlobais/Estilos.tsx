import { Global } from "@emotion/react";
import { IU } from "../../interface/IU";

const estilos = (tema: IU) => {
  return {
    html: {
      fontFamily: tema.fontFamily,
      fontSize: "62.5%"
    },
    body: {
      margin: 0
    }
  }
}

export const Estilos = () => {
  return (<Global styles={estilos} />)
};