import React from 'react';
import { Button, Card, Container, Grid, Stack, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ImageComponent from '../../components/ImageComponent';
import TextButton from '../../components/TextButton';
import Fade from '../../components/animation/Fade';
import FadeVariants from '../../variants/FadeVariants';

const ContactElementsContainer=styled("section")(({theme})=>({
    width:"calc(100% - 40vw)",
    padding:"75px 20vw 20px 20vw",
    minHeight:"25vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 20px 2vw",
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        
    },
}));

const OneContactElementStyle=styled(Card)(({theme})=>({
    minWidth:"100px",
    minHeight:"200px",
    boxShadow:"none",
    backgroundColor:"#F5F5F5",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    padding:"15px",
    // margin:"12px",
    // [theme.breakpoints.down("lg")]: {
    //     minWidth:"100%"
    //     // padding:"12px"
    // },
}))

function ContactElements() {
    return (
        <ContactElementsContainer>
            <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sm={6}  lg={3} >
                {/* <Fade variants={FadeVariants({}).inLeft}> */}
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/adress.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Adresse</Typography>
                        <Typography sx={{ fontSize:"15px", color:"#6F716F", textAlign:"center"}}>19, avenue Abel Sarnette, 84300 Cavaillon | France</Typography>
                    </OneContactElementStyle>
                {/* </Fade>   */}
                </Grid>
                <Grid item xs={12} md={6} sm={6} lg={3} >
                {/* <Fade variants={FadeVariants({}).inLeft}> */}
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/telephone.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Téléphone</Typography>
                        <TextButton title={"+33 4 90 71 35 47"} path={''} sx={{color:"#6F716F", fontSize:"15px"}}/>
                        <Typography sx={{color:"#6F716F", fontSize:"15px", textAlign:"center"}}>(Lundi - vendredi, 09:00–12:00, 14:00–18:00)</Typography>
                    </OneContactElementStyle>
                {/* </Fade>   */}
                </Grid>
                <Grid item xs={12} md={6} sm={6} lg={3} >
                {/* <Fade variants={FadeVariants({}).inRight}> */}
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/email.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>E-Mail</Typography>
                        <TextButton title={"contact@artemisassurance.fr"} path={'mailto:contact@artemisassurance.fr'} sx={{color:"#6F716F", fontSize:"15px", textAlign:"center"}}/>
                    </OneContactElementStyle>
                {/* </Fade>   */}
                </Grid>
                <Grid item xs={12} md={6} sm={6} lg={3} >
                {/* <Fade variants={FadeVariants({}).inRight}> */}
                    <OneContactElementStyle>
                        <ImageComponent image={"assets/images/global.png"}/>
                        <Typography sx={{fontWeight:"bold", fontSize:"25px"}}>Site Internet</Typography>
                        <TextButton title={"www.artemisassurance.fr"} path={''} sx={{color:"#6F716F", fontSize:"15px"}}/>
                    </OneContactElementStyle>
                {/* </Fade>   */}
                </Grid>
            </Grid>
        </ContactElementsContainer>
    );
}

export default ContactElements;