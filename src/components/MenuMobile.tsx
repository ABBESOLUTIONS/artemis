import { Menu } from "@mui/icons-material";
import { ClickAwayListener, Container, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { PROJECT_COLORS } from "../common/colors";
import { ClientMenuItems, HeaderConfig } from "../common/MenuConfig";
import FadeInRight from "./animation/FadeInRight";
import LinearScaleSharpIcon from '@mui/icons-material/LinearScaleSharp';
import DevisButton from "./DevisButton";
import { Link, PathMatch, useMatch, useResolvedPath } from "react-router-dom";
import DeclarationMenu from "./Header/DeclarationMenu";
import { CLIENT_PAGES } from "../routes/paths";

const MenuMobileContainer = styled(Container)(() => ({
        // width:"100%",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor:"yellow"
}));
const MenuMobileBtn = styled(IconButton)(() => ({
    color: "black",
    '&:hover': {
        color: PROJECT_COLORS.primarySwatch,
    },
}));
const MenuMobileItemContainer = styled("div")(() => ({
    position: "absolute",
    top: HeaderConfig.HEIGHT,
    right: "5px",
    minWidth: "105%",
    minHeight: "250px",
    display: "none",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(30px)",
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
}));
const MenuMobileItem = styled(Link)(() => ({
    textDecoration: "none",
    color: "black",
    '&:hover': {
        color: '#2ab7ca',
    },
}));

const MenuMobileItemText = styled(Typography)(() => ({
    fontSize: "18px",
}));
function MenuMobile() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const toggleMenu = () => {
        setMenuIsVisible(!menuIsVisible);
    }

    const onClickAway = () => {
        setMenuIsVisible(false);
    }

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

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <MenuMobileContainer>
                <MenuMobileBtn onClick={toggleMenu} children={<LinearScaleSharpIcon sx={{fontSize: "35px"}}/>}/>
                    <MenuMobileItemContainer sx={{display: menuIsVisible ? "flex" : "none"}}>
                        {ClientMenuItems.map((menu, index) => 
                                {
                                    if (index < ClientMenuItems.length - 1)
                                        return <MenuMobileItem key={index} onClick={toggleMenu} to={menu.path}><MenuMobileItemText>{menu.title}</MenuMobileItemText></MenuMobileItem>
                                    return <DeclarationMenu title={menu.title} sx={{color:"black"}}></DeclarationMenu>
                                }
                        )}
                        {<FadeInRight start={menuIsVisible}><DevisButton sx={{display: pathDemande || pathAuto || pathSante || pathHabit || pathPro ? "none" : "flex"}}></DevisButton></FadeInRight>}
                    </MenuMobileItemContainer>
            </MenuMobileContainer>
        </ClickAwayListener>
    );
}

export default MenuMobile;