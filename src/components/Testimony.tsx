import { Card, styled, Typography } from '@mui/material';
import React from 'react';
const TestimonyContainer=styled(Card)(()=>({
    width:"350px",
    height:"500px",
    backgroundColor:"blue",
    padding:"5px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
}));
const TestimonyProfil= styled("img")(()=>({
    width:"50px",
    height:"50px",
    borderRadius:"50%"
}));
const TestimonyQuotes= styled("img")(()=>({
    width: "15px",
    height: "15px",
}));
interface Props {
    text: string,
    profil: string,
    name: string,
}

function Testimony() {
    return (
        <TestimonyContainer>
            <TestimonyProfil src=""/>
            <TestimonyQuotes src={"assets/images/quotes.png"}/>

            
        </TestimonyContainer>
    );
}

export default Testimony;