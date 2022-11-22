import { Container, styled, Typography } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MenuItemModel } from "../../models/MenuItemModel";
import TextButton from "../TextButton";

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
const SubMenuItemContainer = styled(Container)(() => ({
    position:"absolute",
    width:"200px",
    height:"100px",
    // backgroundColor:"red",
    marginRight:"15px",
    marginTop:"100px",

}));
const OneSubMenuItem = styled(Container)(() => ({
    position:"absolute",
    width:"200px",
    height:"100px",
    // backgroundColor:"red",
    marginRight:"15px",
    

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
            <Typography component={HeaderMenuItemLink} to={path} variant="body1" style={{color: match ? "#138f82" : "black"}} sx={{fontWeight:"bold"}}>{title}</Typography>
            <HeaderMenuItemIndicator style={{backgroundColor: match ? "#138f82" : "rgba(0,0,0,0)"}}/>
            <SubMenuItemContainer id="subMenu" sx={{display:"none"}}>
            {
                subMenu?.map((oneMenu, index)=> 
                    <Container key={index} sx={{ width:"200px", height:"50px", boxShadow:"0px 0px 1px 1px grey", display:"flex", justifyContent:"center", alignItems:"center",fontSize:"18px" }}><TextButton title={oneMenu.title} path={""} /></Container>)
            }
            </SubMenuItemContainer>
        </HeaderMenuItemContainer>
    );
}

export default HeaderMenuItem;