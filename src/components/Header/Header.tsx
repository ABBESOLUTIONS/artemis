import { AppBar, Container, Grid, styled,} from "@mui/material";
import { Box } from "@mui/system";
import { HEADER } from "../../common/HeaderConfig";
import { ClientMenuItems } from "../../common/MenuConfig";
import useResponsive from "../../hooks/useResponsive";
import AboutDrawer from "../AboutDrawer";
import HeaderAnim from "../animation/HeaderAnim";
import DevisButton from "../DevisButton";
import Logo from "../Logo";
import Search from "../Search";
import HeaderMenuItem from "./HeaderMenuItem";

const LogoContainer = styled("div")(() => ({
    height: "100%",
    position: "relative",
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

    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{height: HEADER.DESKTOP_HEIGHT, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            
            <HeaderAnim>
                <LogoContainer>
                        <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                </LogoContainer>
                <Search />
                <Box sx={{display: "flex"}}>
                    {ClientMenuItems.map((menu, index) => <HeaderMenuItem key={index} title={menu.title} path={menu.path} subMenu={menu.submenu}/>)}
                </Box>
                <DevisButton/>
                <AboutDrawer/>
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
            </HeaderAnim>
        </AppBar>
    );
}

export default Header;