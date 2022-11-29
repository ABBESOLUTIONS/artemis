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

function MainHeader() {
    const isMobile = useResponsive("down", "lg");

    const [open, setOpen] = React.useState(false);


    const handleCloseDrawer = (event: {}, reason: "backdropClick" | "escapeKeyDown") =>{
        setOpen(false);
    }

    const handleOpenDrawer = (event: React.MouseEvent<HTMLElement>)=>{
        setOpen(true);
    }

    return (
        // <AppBar sx={{backgroundColor: "white"}}>
        <AppBar position="fixed" color="transparent" elevation={0} sx={{height: HEADER.DESKTOP_HEIGHT, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

            <HeaderAnim>
                <Container maxWidth={false}>
                    <Grid container sx={{...(isMobile && {paddingLeft: "0px", paddingRight: "0px"})} && {...(!isMobile && {paddingLeft: "50px", paddingRight: "50px"})}}>
                        <Grid item lg={1} xs sx={{}}>
                            {/* <Logo logoWithName={!isMobile} sx={{width: isMobile ? 50 : 200, height: isMobile ? 50 : 70}}/> */}
                            <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                        </Grid>
                        <Grid item lg={11} xs sx={{ display: "flex", alignItems: "center", justifyContent:"space-around", }}>
                            {!isMobile && <Search/>}
                            {!isMobile && <Header/>}
                            {!isMobile && <DevisButton/>}
                            {isMobile && <MenuMobile/>}
                            <Button onClick={handleOpenDrawer}><Menu fontSize="large" sx={{color:"black"}}/></Button>
                            <AboutDrawer open={open} onClick={handleCloseDrawer} />
                        </Grid>
                    </Grid>
                </Container>
            </HeaderAnim>
        // </AppBar>
    );
}

export default MainHeader;