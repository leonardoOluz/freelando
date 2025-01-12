import { ThemeProvider } from "@emotion/react";
import { IU } from "../../interface/IU";

interface PropsProvedorTema {
    children: React.ReactNode
}

const tema: IU = {
    cores: {
        atencao: "#FF0E0E",
        branco: "#FFFFFF",
        focus: "#B009FF",
        primarias: {
            a: "#5754ED",
            b: "#D93114",
            c: "#168070"
        },
        secundarias: {
            a: "#F8F8FD",
            b: "#FDF8F8",
            c: "#EBFCF9"
        },
        dark: {
            a: "#110EA0",
            b: "#B61B00"
        },
        neutras: {
            a: "#373737",
            b: "#E8E8E8",
            c: "#F5F5F5",
        }
    },
    espacamentos: {
        xxs: ".4rem",
        xs: ".8rem",
        s: "1.6rem",
        m: "2.4rem",
        l: "3.2rem",
        xl: "4.8rem",
        xxl: "6.4rem",
    },
    fontFamily: "Montserrat, sans-serif"
}

export const ProvedorTema = ({ children }: PropsProvedorTema) => {
    return (<ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>)
}