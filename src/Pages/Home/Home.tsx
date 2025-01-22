import imgBanner from "../../assets/banner.png";
import Banner from "../../componentes/Banner/Banner";
import HabilidadesTags from "./HabilidadesTags/HabilidadesTags";
import VantagensContratantes from "./VantagensContratantes/VantagensContratantes";
import VantagensFreelas from "./VantagensFreelas/VantagensFreelas";

const tags: string[] = [
  "Design", "Branding", "Ilustração", "Marketing", "Identidade Visual", "SEO", "Redação",
  "Transcrição", "Revisão", "Tradução", "E-Books", "ABNT", "Programação", "API", "Desenvolvimento de Aplicativo",
  "Desenvolvimento de Websites", "E-Books", "ABNT"
]

const Home = () => {
  return (<>
    <Banner img={imgBanner} textoLink="Quero me cadastrar!" titulo="Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!" />
    <VantagensContratantes subTitulo="Vantagens para contratantes" />
    <VantagensFreelas subTitulo="Vantagens para freelas"/>
    <HabilidadesTags subTitulo="Quais habilidades você encontra por aqui?" tags={tags} />
  </>)
};

export default Home;