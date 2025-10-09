import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import ErrorApp from "../Pages/ErrorApp";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/HomeAppData.json"),
      },
      {
        path: "/Apps",
        element: <Apps />,
        loader: () => fetch("/AppsData.json"),
      },
      { path: "/Installation", element: <Installation /> },
      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/AppsData.json");
          const data = await res.json();
          const singleApp = data.find((app) => String(app.id) === params.id);
          if (!singleApp) throw new Response("App Not Found", { status: 404 });
          return singleApp;
        },
        errorElement: <ErrorApp />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  
]);

export default router;
