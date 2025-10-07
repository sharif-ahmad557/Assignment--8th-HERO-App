import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Apps",
        element: <Apps />,
      },
      {
        path: "/Installation",
        element: <Installation />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

export default router;
