import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FormAccesButtonContainer=styled(Link)(({theme})=>({
    width:"560px",
    height:"80px",
    backgroundColor:"#F8F9FA",
    border:"solid 1px",
    borderColor:"#DEE2E6",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    textDecoration:"none",
    [theme.breakpoints.down("lg")]: {
        width:"98%", 
    },
    [theme.breakpoints.down("md")]: {
        width:"95%", 
    },
    [theme.breakpoints.down("sm")]: {
        width:"92%",
        height:"120px" 
    },
}));

interface Props {
    nom:string,
    desc:string,
    chemin:string,
}

function FormAccesButton({nom, desc, chemin}: Props) {
    return (
        <FormAccesButtonContainer to={chemin}>
            <Typography sx={{fontSize:"1em", textAlign:"center", fontWeight:"bold", color:"black"}}>{nom}</Typography>
            <Typography sx={{color:"#61616A", textAlign:"center",}}>{desc}</Typography>
        </FormAccesButtonContainer>
    );
}

export default FormAccesButton;