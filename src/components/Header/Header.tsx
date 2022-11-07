import { AppBar, styled,} from "@mui/material";
import { Box } from "@mui/system";
import { HEADER } from "../../common/HeaderConfig";
import { ClientMenuItems } from "../../common/MenuConfig";
import AboutDrawer from "../AboutDrawer";
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

    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{height: HEADER.DESKTOP_HEIGHT, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <LogoContainer>
                {/* <LogoBgContainer> */}
                    <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                {/* </LogoBgContainer> */}
            </LogoContainer>
            <Search />
            <Box sx={{display: "flex"}}>
                {ClientMenuItems.map((menu, index) => <HeaderMenuItem key={index} title={menu.title} path={menu.path}/>)}
            </Box>
            <DevisButton/>
            <AboutDrawer/>
        </AppBar>
    );
}

export default Header;