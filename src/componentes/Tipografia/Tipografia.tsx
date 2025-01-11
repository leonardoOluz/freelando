import styled from "@emotion/styled";

interface IComponentes {
  h1: string;
  h2: string;
  h3: string;
  body: string;
  bodyBold: string;
  body2: string;
  body2Bold: string;
  legenda: string;
}

interface IEstilos {
  h1: string;
  h2: string;
  h3: string;
  body: string;
  bodyBold: string;
  body2: string;
  body2Bold: string;
  legenda: string;
  subtititle1: string;
  subtititle2: string;
}

interface PropsTipografia {
  variante: VarianteTipo;
  componente: ComponenteTipo;
  children: React.ReactNode
}

type ComponenteTipo = keyof IComponentes

type VarianteTipo = keyof IEstilos

const componentes: IComponentes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodyBold: 'strong',
  body2: 'p',
  body2Bold: 'strong',
  legenda: 'p'
}

const estilos: IEstilos = {
  h1: `
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.9rem;
  `,
  h2: `
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 3.9rem;    
  `,
  h3: `
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.9rem;
    
  `,
  body: `
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
  `,
  bodyBold: `
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
`,
  body2: `
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;
  `,
  body2Bold: `
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
`,
  legenda: `
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.7rem;
`,
  subtititle1: `
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.7rem;
  `,
  subtititle2: `
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.7rem;
    text-decoration: underline;
  `,
}

export const Tipografia = ({ variante, componente, children }: PropsTipografia) => {
  const tag = componentes[componente] as keyof JSX.IntrinsicElements;
  const ComponenteUtilizado = styled[tag as "p"]`${estilos[variante]}`;
  return (<ComponenteUtilizado>
    {children}
  </ComponenteUtilizado>)
}