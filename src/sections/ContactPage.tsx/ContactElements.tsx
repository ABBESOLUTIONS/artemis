import React from 'react';
import { Button, Card, Container, Grid, Stack, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ImageComponent from '../../components/ImageComponent';

const ContactElementsContainer=styled(SectionStyle)(()=>({
    height:"400px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}));

const OneContactElementStyle=styled(Card)(()=>({
    width:"300px",
    height:"200px",
    boxShadow:"none",
    backgroundColor:"#F5F5F5",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    padding:"20px",
    margin:"15px"
}))

function ContactElements() {
    return (
        <ContactElementsContainer>
            <OneContactElementStyle>
                <ImageComponent image={"assets/images/adress.png"}/>
                <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Adresse</Typography>
                <Typography sx={{width:"275px" ,fontSize:"18px", color:"#6F716F"}}>19, avenue Abel Sarnette, 84300 Cavaillon | France</Typography>
            </OneContactElementStyle>
            <OneContactElementStyle>
                <ImageComponent image={"assets/images/adress.png"}/>
                <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Adresse</Typography>
                <Typography sx={{width:"275px" ,fontSize:"18px", color:"#6F716F"}}>19, avenue Abel Sarnette, 84300 Cavaillon | France</Typography>
            </OneContactElementStyle>
            <OneContactElementStyle>
                <ImageComponent image={"assets/images/adress.png"}/>
                <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Adresse</Typography>
                <Typography sx={{width:"275px" ,fontSize:"18px", color:"#6F716F"}}>19, avenue Abel Sarnette, 84300 Cavaillon | France</Typography>
            </OneContactElementStyle>
            <OneContactElementStyle>
                <ImageComponent image={"assets/images/adress.png"}/>
                <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Adresse</Typography>
                <Typography sx={{width:"275px" ,fontSize:"18px", color:"#6F716F"}}>19, avenue Abel Sarnette, 84300 Cavaillon | France</Typography>
            </OneContactElementStyle>
        </ContactElementsContainer>
    );
}

export default ContactElements;