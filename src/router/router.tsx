import { createBrowserRouter } from "react-router";
import SelecaoCliente from "../Pages/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../Pages/cadastro/LayoutBaseCadastro";
import LayoutBase from "../Pages/LayoutBase";
// import PaginaInicial from "../Pages/PaginaInicial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "cadastro",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />
          },
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
