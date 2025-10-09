import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/HomeAppData.json"),
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "/Apps",
        element: <Apps />,
        loader: () => fetch("/AppsData.json"),
      },
      {
        path: "/Installation",
        element: <Installation />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/AppsData.json");
          const data = await res.json();

          const singleApp = data.find(
            (app) => String(app.id) === params.id
          );

          return singleApp || null;
        },
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/AppsData.json");
          const data = await res.json();
          const singleApp = data.find((app) => String(app.id) === params.id);
          return singleApp || null;
        },
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
