import { createBrowserRouter } from "react-router";
import PaginaInicial from "../Pages/PaginaInicial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
    children: [],
  },
]);
