import { Container, styled, Typography } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MenuItemModel } from "../../models/MenuItemModel";

const HeaderMenuItemContainer = styled("div")(() => ({
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover > #subMenu":{
        display:"block"
    }
}));
const HeaderMenuItemIndicator = styled("div")(() => ({
    width: "20px",
    height: "10px",
    borderRadius: "10px",
    backgroundColor: "#F27405"
}));
const HeaderMenuItemLink = styled(Link)(() => ({
    textDecoration: "none",
}));
const subMenuContainer = styled("div")(() => ({
    display: "none",
}));
interface Pops {
    title: string,
    path: string,
    subMenu?: Array<MenuItemModel>
}

function HeaderMenuItem({title, path, subMenu}: Pops) {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <HeaderMenuItemContainer>
            <Typography component={HeaderMenuItemLink} to={path} variant="body1" style={{color: match ? "#138f82" : "black"}}>{title}</Typography>
            <HeaderMenuItemIndicator style={{backgroundColor: match ? "#138f82" : "rgba(0,0,0,0)"}}/>
            <Container id="subMenu" sx={{display:"none"}}>
            {
                subMenu?.map((oneMenu, index)=> <div key={index}>{oneMenu.title}</div>)
            }
            </Container>
        </HeaderMenuItemContainer>
    );
}

export default HeaderMenuItem;