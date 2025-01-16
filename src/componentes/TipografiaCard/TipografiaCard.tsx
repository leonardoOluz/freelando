import { Tipografia } from "../Tipografia/Tipografia";

interface PropsTipografiaCard {
  titulo: string;
  subTitulo?: string;
  descricao?: string;
}

const TipografiaCard = ({ titulo, subTitulo, descricao }: PropsTipografiaCard) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h2" componente="h1">
        {titulo}
      </Tipografia>
      {subTitulo &&
        <Tipografia variante="h3" componente="h2">
          {subTitulo}
        </Tipografia>
      }
      {descricao &&
        <Tipografia componente="body" variante="body">
          {descricao}
        </Tipografia>
      }
    </div>
  )
}

export default TipografiaCard;