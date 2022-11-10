import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function ClientLayout(){
    return(
        <Fragment>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </Fragment>
    )
}