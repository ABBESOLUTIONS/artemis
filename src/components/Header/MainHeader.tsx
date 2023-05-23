import { Menu } from "@mui/icons-material";
import { AppBar, Button, Container, Grid } from "@mui/material";
import React from "react";
import { HEADER } from "../../common/HeaderConfig";
import useResponsive from "../../hooks/useResponsive";
import AboutDrawer from "../AboutDrawer";
import HeaderAnim from "../animation/HeaderAnim";
import DevisButton from "../DevisButton";
import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import Search from "../Search";
import Header from "./Header";
import { PathMatch, useMatch, useResolvedPath } from "react-router-dom";
import { CLIENT_PAGES } from "../../routes/paths";

function MainHeader() {
    let resolvedDemande = useResolvedPath(CLIENT_PAGES.demande);
    let pathDemande:PathMatch<string> | boolean | null = useMatch({ path: resolvedDemande.pathname, end: true });
    pathDemande = CLIENT_PAGES.demande.length === 0 ? false : pathDemande;

    let resolvedAuto = useResolvedPath(CLIENT_PAGES.autoMoto);
    let pathAuto:PathMatch<string> | boolean | null = useMatch({ path: resolvedAuto.pathname, end: true });
    pathAuto = CLIENT_PAGES.autoMoto.length === 0 ? false : pathAuto;

    let resolvedSante = useResolvedPath(CLIENT_PAGES.sante);
    let pathSante:PathMatch<string> | boolean | null = useMatch({ path: resolvedSante.pathname, end: true });
    pathSante = CLIENT_PAGES.sante.length === 0 ? false : pathSante;

    let resolvedHabit = useResolvedPath(CLIENT_PAGES.habitation);
    let pathHabit:PathMatch<string> | boolean | null = useMatch({ path: resolvedHabit.pathname, end: true });
    pathHabit = CLIENT_PAGES.habitation.length === 0 ? false : pathHabit;

    let resolvedPro = useResolvedPath(CLIENT_PAGES.professionelle);
    let pathPro:PathMatch<string> | boolean | null = useMatch({ path: resolvedPro.pathname, end: true });
    pathPro = CLIENT_PAGES.professionelle.length === 0 ? false : pathPro;


    const isMobile = useResponsive("down", "lg");

    const [open, setOpen] = React.useState(false);


    const handleCloseDrawer = (event: {}, reason: "backdropClick" | "escapeKeyDown") =>{
        setOpen(false);
    }

    const handleOpenDrawer = (event: React.MouseEvent<HTMLElement>)=>{
        setOpen(true);
    }

    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{height: HEADER.DESKTOP_HEIGHT, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

            <HeaderAnim>
                <Container maxWidth={false}>
                    <Grid container sx={{...(isMobile && {paddingLeft: "0px", paddingRight: "0px"})} && {...(!isMobile && {paddingLeft: "50px", paddingRight: "50px"})}}>
                        <Grid item lg={1} md={1} sm={1} xs={2} sx={{}}>
                            <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                        </Grid>
                        <Grid item lg={8} md={0} sm={0} xs={0} sx={{display: "flex", justifyContent:"center" }}>
                            {!isMobile && <Header/>}
                        </Grid>
                        <Grid item lg={3} md={11} sm={11} xs={10} sx={{ display: "flex", justifyContent:"flex-end" }}>
                            {/* {!isMobile && <Search/>} */}
                            {!isMobile && <DevisButton sx={{display: pathDemande || pathAuto || pathSante || pathHabit || pathPro ? "none" : "flex"}} />}
                            {isMobile && <MenuMobile/>}
                            {/* <Button onClick={handleOpenDrawer}><Menu fontSize="large" sx={{color:"black"}}/></Button> */}
                            {/* <AboutDrawer open={open} onClick={handleCloseDrawer} /> */}
                        </Grid>
                    </Grid>
                </Container>
            </HeaderAnim>
        // </AppBar>
    );
}

export default MainHeader;