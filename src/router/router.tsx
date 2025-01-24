import { createBrowserRouter } from "react-router";
import SelecaoCliente from "../Pages/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../Pages/cadastro/LayoutBaseCadastro";
import LayoutBase from "../Pages/LayoutBase";
import Interesses from "../Pages/cadastro/Interesses";
import DadosPessoais from "../Pages/cadastro/DadosPessoais";
import Concluido from "../Pages/cadastro/Concluido";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    ErrorBoundary: NotFound,
    children: [
      {
        path: "",
        element: <Home />,
      },
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
            element: <Concluido />
          }
        ]
      },
    ],
  },
]);
