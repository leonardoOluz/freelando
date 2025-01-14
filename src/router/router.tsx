import { createBrowserRouter } from "react-router";
import SelecaoCliente from "../Pages/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../Pages/cadastro/LayoutBaseCadastro";
import LayoutBase from "../Pages/LayoutBase";
import Interesses from "../Pages/cadastro/Interesses";
import DadosPessoais from "../Pages/cadastro/DadosPessoais";

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
            path: "interesses",
            element: <Interesses />
          },
          {
            path: "dados-pessoais",
            element: <DadosPessoais />
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
