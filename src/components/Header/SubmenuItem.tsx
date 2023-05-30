import { Container, Divider, SxProps, Typography, styled } from '@mui/material';
import React from 'react';
import { Link, PathMatch, useMatch, useResolvedPath } from 'react-router-dom';

const SubMenuItemStyle = styled("div")(() => ({
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red",

}));

const HeaderMenuItemLink = styled(Link)(() => ({
    textDecoration: "none",
}));

interface Pops {
    title: string,
    path: string,
    // subMenu?: Array<MenuItemModel>,
    sx?: SxProps,
    num: number,
    indexN: number,
}

function SubmenuItem({path, title, num, indexN}:Pops) {

    let resolved = useResolvedPath(path);
    let match:PathMatch<string> | boolean | null = useMatch({ path: resolved.pathname, end: true });
    match = path.length === 0 ? false : match;

    return (
        // <SubMenuItemStyle>
            <Container  sx={{ width:"100%", height:"40px",display: match? "none" : "flex",  justifyContent:"center", alignItems:"center",fontSize:"18px", flexDirection:"column" }}>
                <Typography component={HeaderMenuItemLink} to={path} variant="body1" style={{color: match ? "#138f82" : "black"}} sx={{fontWeight:"bold"}}>{title}</Typography>
                {num - 1 !== indexN &&
                    <Divider sx={{width:"100%", margin:"5px 0px -20px 0px"}}/>
                }
            </Container>
       // </SubMenuItemStyle> 
    );
}

export default SubmenuItem;