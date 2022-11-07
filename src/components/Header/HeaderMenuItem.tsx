import { styled, Typography } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const HeaderMenuItemContainer = styled("div")(() => ({
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
interface Pops {
    title: string,
    path: string
}

function HeaderMenuItem({title, path}: Pops) {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <HeaderMenuItemContainer>
            <Typography component={HeaderMenuItemLink} to={path} variant="body1" style={{color: match ? "#138f82" : "black"}}>{title}</Typography>
            <HeaderMenuItemIndicator style={{backgroundColor: match ? "#138f82" : "rgba(0,0,0,0)"}}/>
        </HeaderMenuItemContainer>
    );
}

export default HeaderMenuItem;