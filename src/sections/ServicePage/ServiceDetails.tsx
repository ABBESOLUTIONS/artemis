import React from 'react';
import OneServiceDetails from '../../components/OneServiceDetails';
import { Button, Container, Grid, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { differentServices } from '../../common/Data';
import { PROJECT_COLORS } from '../../common/colors';
import Fade from '../../components/animation/Fade';
import FadeVariants from '../../variants/FadeVariants';

const ServicesDetailsStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    // minHeight:"800px",
    display:"flex",
    // justifyContent:"center",
    flexDirection:"column",
    // paddingTop:"80px"
}));
export const ServiceBigTitle=styled(Typography)(({theme})=>({
    fontWeight:"bold", 
    // fontSize:"45px", 
    fontSize:"2.5em", 
    marginBottom:"50px",
    justifyContent:"center", 
    textAlign:"center",
    [theme.breakpoints.down("md")]: {
        
            
        },
}));

function ServiceDetails() {
    return (
        <ServicesDetailsStyle>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Tous nos services</Typography>
            <ServiceBigTitle variant='h3' sx={{ }}>Nous accompagnons pour tous vos besoins en assurance</ServiceBigTitle>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    {
                        differentServices.map((oneDifferentService, index)=> <Grid xs={12} md={6} sm={6}><Fade variants={FadeVariants({}).inUp}><OneServiceDetails icone={oneDifferentService.icone} title={oneDifferentService.title} detail={oneDifferentService.text}/></Fade></Grid>)
                    }
                </Grid>
        </ServicesDetailsStyle>
    );
}

export default ServiceDetails;