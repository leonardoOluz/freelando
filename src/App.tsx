import { Card } from "./componentes/Card/Card"
import { Estilos } from "./componentes/EstilosGlobais/Estilos"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import { Tipografia } from "./componentes/Tipografia/Tipografia"

function App() {
  return (<ProvedorTema>
    <Estilos />
    <Card>
      <Tipografia variante="h1" componente="h1">
        Freelando
      </Tipografia>
      <Tipografia componente="body" variante="body">
      Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. 
      </Tipografia>
    </Card>
  </ProvedorTema>)
}

export default App
