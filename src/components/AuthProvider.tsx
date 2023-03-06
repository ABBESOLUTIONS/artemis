import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurentUser } from "../redux/slices/auth";
import { useAppDispatch } from "../redux/store";
import { CLIENT_PAGES, USER_PAGES } from "../routes/paths";
import PageLoader from "./PageLoader";

interface Props {
  children: React.ReactNode,
}

function AuthProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCurentUser()).unwrap().then(res => {
      if(res){
        console.log(res);
        if(!location.pathname.includes("contratsList"))
          {
            navigate(USER_PAGES.contratsList);
            setIsLoading(false);
          }
        else if (location.pathname == CLIENT_PAGES.logIn || CLIENT_PAGES.signUp)  {
          navigate(USER_PAGES.deconnexion)
          setIsLoading(false);
        }
      }
      else{
        // if(location.pathname !== CLIENT_PAGES.logIn)
        if(location.pathname.includes("contratsList"))
          navigate(CLIENT_PAGES.logIn);
        setIsLoading(false);
      }
    }).catch(error => {
      console.log(error);
    });
    // eslint-disable-next-line
  },[]);

  return (
    <PageLoader isLoading={isLoading}>
      { children }
    </PageLoader>
  );
}

export default AuthProvider;