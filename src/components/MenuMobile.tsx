import { Menu } from "@mui/icons-material";
import { ClickAwayListener, Container, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { PROJECT_COLORS } from "../common/colors";
import { ClientMenuItems, HeaderConfig } from "../common/MenuConfig";
import FadeInRight from "./animation/FadeInRight";
import LinearScaleSharpIcon from '@mui/icons-material/LinearScaleSharp';
import DevisButton from "./DevisButton";
import { Link } from "react-router-dom";
import DeclarationMenu from "./Header/DeclarationMenu";

const MenuMobileContainer = styled(Container)(() => ({
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor:"yellow"
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
    minWidth: "200%",
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

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <MenuMobileContainer>
                <MenuMobileBtn onClick={toggleMenu} children={<LinearScaleSharpIcon sx={{fontSize: "35px"}}/>}/>
                    <MenuMobileItemContainer sx={{display: menuIsVisible ? "flex" : "none"}}>
                        {ClientMenuItems.map((menu, index) => 
                                {
                                    if (index < ClientMenuItems.length - 1)
                                        return <MenuMobileItem key={index} onClick={toggleMenu} to={menu.path}><MenuMobileItemText>{menu.title}</MenuMobileItemText></MenuMobileItem>
                                    return <DeclarationMenu title={menu.title} ></DeclarationMenu>
                                }
                        )}
                        {<FadeInRight start={menuIsVisible}><DevisButton ></DevisButton></FadeInRight>}
                    </MenuMobileItemContainer>
            </MenuMobileContainer>
        </ClickAwayListener>
    );
}

export default MenuMobile;