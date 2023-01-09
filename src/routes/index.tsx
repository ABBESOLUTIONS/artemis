import { useEffect } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import OthersLayout from "../layouts/OthersLayout";
import UserLayout from "../layouts/UserLayout";
import Actualites from "../pages/Actualites";
import AuthEmail from "../pages/AuthEmail";
import AutoMoto from "../pages/AutoMoto";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Declaration from "../pages/Declaration";
import DeclarationSinistre from "../pages/DeclarationSinistre";
import Deconnexion from "../pages/Deconnexion";
import DevisOption from "../pages/DevisOption";
import Habitation from "../pages/Habitation";
import HomePage from "../pages/HomePage";
import LogIn from "../pages/LogIn";
import Professionelle from "../pages/Professionelle";
import Sante from "../pages/Sante";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";
import ContratsList from "../pages/UserPages/ContratsList";
import SinistreForm from "../sections/SinistrePage/SinistreForm";
import { CLIENT_PAGES, USER_PAGES } from "./paths";

export default function Router() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);
  
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
          { path: CLIENT_PAGES.devisOption, element: <DevisOption /> },
          { path: CLIENT_PAGES.logIn, element: <LogIn /> },
          { path: CLIENT_PAGES.signUp, element: <SignUp /> },
          { path: CLIENT_PAGES.actualite, element: <Actualites /> },
          { path: CLIENT_PAGES.declarationSinistre, element: <DeclarationSinistre /> },
          { path: CLIENT_PAGES.authentification, element: <AuthEmail /> },
        ],
      },

      {
        path: USER_PAGES.contratsList,
        element: <UserLayout />,
        children: [
          {element: <ContratsList />, index: true},
          {path: USER_PAGES.demande, element: <DevisOption/>},
          { path: USER_PAGES.autoMoto, element: <AutoMoto /> },
          { path: USER_PAGES.sante, element: <Sante /> },
          { path: USER_PAGES.habitation, element: <Habitation /> },
          { path: USER_PAGES.professionelle, element: <Professionelle /> },
          { path: USER_PAGES.deconnexion, element: <Deconnexion/> },




          
        ]
      },

    
      //
      { path: "*", element: <Navigate to="/404" replace /> },
    ]);
  }