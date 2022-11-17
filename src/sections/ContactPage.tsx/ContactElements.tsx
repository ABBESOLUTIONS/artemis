import React from 'react';
import { Button, Card, Container, Grid, Stack, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ImageComponent from '../../components/ImageComponent';
import TextButton from '../../components/TextButton';

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
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/adress.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Adresse</Typography>
                        <Typography sx={{width:"275px" ,fontSize:"18px", color:"#6F716F", textAlign:"center"}}>19, avenue Abel Sarnette, 84300 Cavaillon | France</Typography>
                    </OneContactElementStyle>
                </Grid>
                <Grid item xs={3}>
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/telephone.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Téléphone</Typography>
                        <TextButton title={"+33 4 90 71 35 47"} path={''} sx={{color:"#6F716F", fontSize:"18px"}}/>
                        <Typography sx={{color:"#6F716F", fontSize:"18px", textAlign:"center"}}>(Lundi - vendredi, 09:00–12:00, 14:00–18:00)</Typography>
                    </OneContactElementStyle>
                </Grid>
                <Grid item xs={3}>
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/email.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>E-Mail</Typography>
                        <TextButton title={"contact@artemisassurance.fr"} path={''} sx={{color:"#6F716F", fontSize:"18px"}}/>
                        <TextButton title={"contact@artemisassurance.fr"} path={''} sx={{color:"#6F716F", fontSize:"18px"}}/>
                    </OneContactElementStyle>
                </Grid>
                <Grid item xs={3}>
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/global.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Site Internet</Typography>
                        <TextButton title={"www.artemisassurance.fr"} path={''} sx={{color:"#6F716F", fontSize:"18px"}}/>
                    </OneContactElementStyle>
                </Grid>
            </Grid>
        </ContactElementsContainer>
    );
}

export default ContactElements;