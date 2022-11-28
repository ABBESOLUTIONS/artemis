import { styled, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const OptionButtonStyle=styled(Link)(({theme})=>({
    minWidth:"100px",
    height:"42px",
    borderRadius:"5px",
    display:"flex",
    // flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
   backgroundColor:"#E0F1EF",
   margin:"10px",
   padding:"5px",
   textDecoration:"none",
    [theme.breakpoints.down("md")] : {
        minWidth:"70px"
    },
    [theme.breakpoints.down("sm")] : {
        minWidth:"Opx"
    }

}));

interface Props {
    text:string,
    path:string,
}

function AssuranceOptionButton({text, path}: Props) {
    return (
        <OptionButtonStyle to={path}>
            <Typography>{text}</Typography>
        </OptionButtonStyle>
    );
}

export default AssuranceOptionButton;