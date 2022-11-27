import React from 'react';
import OneServiceDetails from '../../components/OneServiceDetails';
import { Button, Container, Grid, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { differentServices } from '../../common/Data';
import { PROJECT_COLORS } from '../../common/colors';

const ServicesDetailsStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    // minHeight:"800px",
    display:"flex",
    // justifyContent:"center",
    flexDirection:"column",
    // paddingTop:"80px"
}));
const ServiceBigTitle=styled(Typography)(({theme})=>({
    fontWeight:"bold", 
    // fontSize:"45px", 
    fontSize:"2em", 
    marginBottom:"50px", 
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
                        differentServices.map((oneDifferentService, index)=> <Grid xs={12} md={6} sm={6}><OneServiceDetails icone={oneDifferentService.icone} title={oneDifferentService.title} detail={oneDifferentService.text}/></Grid>)
                    }
                </Grid>
        </ServicesDetailsStyle>
    );
}

export default ServiceDetails;