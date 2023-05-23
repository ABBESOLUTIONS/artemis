import React from 'react';
import OneServiceDetails from '../../components/OneServiceDetails';
import { Button, Container, Grid, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { differentServices } from '../../common/Data';
import { PROJECT_COLORS } from '../../common/colors';
import Fade from '../../components/animation/Fade';
import FadeVariants from '../../variants/FadeVariants';

const ServicesDetailsStyle=styled("section")(({theme})=>({
    // width:"100%",
    // minHeight:"800px",
    width:"calc(100% - 30vw)",
    padding:"75px 15vw 75px 15vw",
    display:"flex",
    // justifyContent:"center",
    flexDirection:"column",
    // paddingTop:"80px",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        
    },
}));
export const ServiceBigTitle=styled(Typography)(({theme})=>({
    fontWeight:"bold", 
    // fontSize:"45px", 
    fontSize:"35px", 
    marginBottom:"50px",
    justifyContent:"center", 
    textAlign:"center",
    [theme.breakpoints.down("md")]: {
        fontSize:"25px", 
        },
}));

function ServiceDetails() {
    return (
        <ServicesDetailsStyle>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Tous nos services</Typography>
            <ServiceBigTitle variant='h3' sx={{ }}>Nous accompagnons pour tous vos besoins en assurance</ServiceBigTitle>
            <Grid container rowGap={5} columnSpacing={2}>
                    {
                        differentServices.map((oneDifferentService, index)=> <Grid xs={12} md={6} sm={6}><Fade variants={FadeVariants({}).inUp}><OneServiceDetails icone={oneDifferentService.icone} title={oneDifferentService.title} detail={oneDifferentService.text}/></Fade></Grid>)
                    }
                </Grid>
        </ServicesDetailsStyle>
    );
}

export default ServiceDetails;