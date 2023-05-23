import { AppBar, Button, Container, Grid, styled,} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { HEADER } from "../../common/HeaderConfig";
import { ClientMenuItems } from "../../common/MenuConfig";
import useResponsive from "../../hooks/useResponsive";
import useToggle from "../../hooks/useToggle";
import AboutDrawer from "../AboutDrawer";
import HeaderAnim from "../animation/HeaderAnim";
import DevisButton from "../DevisButton";
import Logo from "../Logo";
import Search from "../Search";
import HeaderMenuItem from "./HeaderMenuItem";
import MenuIcon from '@mui/icons-material/Menu';

const LogoContainer = styled("div")(() => ({
    height: "100%",
    position: "relative",
    // backgroundImage: "url('assets/images/logo.png')",
}));
const HeaderContainer = styled(Container)(() => ({
        // backgroundColor:"blueviolet",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    // backgroundImage: "url('assets/images/logo.png')",
}));
// const LogoBgContainer = styled("div")(() => ({
//     position: "absolute",
//     top: "0px",
//     width: "100px",
//     height: "130px",
//     // backgroundImage: "url('assets/images/logo with bg.png')",
//     backgroundImage: "url('assets/images/logo.png')",
    
//     backgroundSize: "100% 100%",
// }));


function Header() {
    const isMobile = useResponsive("down", "lg");
    const [open, setOpen] = React.useState(false);


    const handleCloseDrawer = (event: {}, reason: "backdropClick" | "escapeKeyDown") =>{
        setOpen(false);
    }

    const handleOpenDrawer = (event: React.MouseEvent<HTMLElement>)=>{
        setOpen(true);
    }

    return (
        // <AppBar position="fixed" color="transparent" elevation={0} sx={{height: HEADER.DESKTOP_HEIGHT, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            
            <HeaderContainer>
                {/* <HeaderAnim sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}> */}
                {/* <LogoContainer>
                        <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                </LogoContainer> */}
                <Box sx={{display: "flex"}}>
                {/* <Search /> */}
                    {ClientMenuItems.map((menu, index) => <HeaderMenuItem key={index} title={menu.title} path={menu.path} subMenu={menu.submenu}/>)}
                {/* <DevisButton/> */}
                </Box>
                {/* <Button onClick={handleOpenDrawer}><MenuIcon fontSize="large" sx={{color:"black"}}/></Button>
                <AboutDrawer open={open} onClick={handleCloseDrawer} /> */}
                {/* <Container maxWidth={false}>
                    <Grid container sx={{...(isMobile && {paddingLeft:"0px", paddingRight:"0px"})} && {...(!isMobile && {paddingLeft:"50pxpx", paddingRight:"50px"})}}>
                        <Grid item xs>
                            <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                            <Search />
                        </Grid>
                        <Grid item xs>
                            <Box sx={{display: "flex"}}>
                                {ClientMenuItems.map((menu, index) => <HeaderMenuItem key={index} title={menu.title} path={menu.path} subMenu={menu.submenu}/>)}
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <DevisButton/>
                        </Grid>
                        <Grid item xs>
                            <AboutDrawer/>
                        </Grid>
                    </Grid>
                </Container> */}
            {/* </HeaderAnim> */}
            </HeaderContainer>
        // </AppBar>
    );
}

export default Header;