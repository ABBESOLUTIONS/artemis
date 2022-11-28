import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainHeader from "../components/Header/MainHeader";

export default function ClientLayout(){
    return(
        <Fragment>
            {/* <Header/> */}
            <MainHeader/>
            <Outlet/>
            <Footer/>
        </Fragment>
    )
}