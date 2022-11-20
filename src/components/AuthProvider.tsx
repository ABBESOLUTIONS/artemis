import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurentUser } from "../redux/slices/auth";
import { useAppDispatch } from "../redux/store";
import { CLIENT_PAGES } from "../routes/paths";
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
        // if(!location.pathname.includes("devisButton"))
        //   navigate(CLIENT_PAGES.devisOption);
        setIsLoading(false);
      }
      else{
        // if(location.pathname !== CLIENT_PAGES.logIn)
        //   navigate(CLIENT_PAGES.signUp);
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