import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
// import App from './App.jsx'
import {
  BrowserRouter,  Router, RouterProvider, Routes,
} from 'react-router-dom'
import router from "./assets/Routes/Routes.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,

  </StrictMode>
)