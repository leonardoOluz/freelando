import { createBrowserRouter } from "react-router";
import SelecaoCliente from "../Pages/cadastro/SelecaoCliente";
// import PaginaInicial from "../Pages/PaginaInicial";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "cadastro",
        element: <SelecaoCliente />,
        children: [
          {
            path: "cliente",
            element: <h1>Crie seu cadastro</h1>
          },
          {
            path: "dados-pessoais",
            element: <h1>informe seus dados pessoais</h1>
          },
          {
            path: "concluido",
            element: <h1>cadastro concluido</h1>
          }
        ]
      }
    ],
  },
]);
