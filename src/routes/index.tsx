import { Navigate, useRoutes } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import OthersLayout from "../layouts/OthersLayout";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Declaration from "../pages/Declaration";
import HomePage from "../pages/HomePage";
import Services from "../pages/Services";
import { CLIENT_PAGES } from "./paths";

export default function Router() {
    return useRoutes([
      //
      {
        path: "*",
        element: <OthersLayout />,
        children: [
        ],
      },
      //
      {
        path: CLIENT_PAGES.home,
        element: <ClientLayout />,
        children: [
          { element: <HomePage />, index: true },
          { path: CLIENT_PAGES.services, element: <Services /> },
          { path: CLIENT_PAGES.blog, element: <Blog/> },
          { path: CLIENT_PAGES.contact, element: <Contact /> },
          { path: CLIENT_PAGES.declaration, element: <Declaration /> },
        ],
      },

    
      //
      { path: "*", element: <Navigate to="/404" replace /> },
    ]);
  }