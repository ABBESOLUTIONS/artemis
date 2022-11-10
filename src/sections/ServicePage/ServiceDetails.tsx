import React from 'react';
import OneServiceDetails from '../../components/OneServiceDetails';
import { Button, Container, Grid, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { differentServices } from '../../common/Data';
import { PROJECT_COLORS } from '../../common/colors';

const ServicesDetailsStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"800px",
    display:"flex",
    // justifyContent:"center",
    flexDirection:"column",
    paddingTop:"80px"
}));

function ServiceDetails() {
    return (
        <ServicesDetailsStyle>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Tous nos services</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>Nous accompagnons pour tous vos besoins en assurance</Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    {
                        differentServices.map((oneDifferentService, index)=> <Grid xs={6}><OneServiceDetails icone={oneDifferentService.icone} title={oneDifferentService.title} detail={oneDifferentService.text}/></Grid>)
                    }
                </Grid>
        </ServicesDetailsStyle>
    );
}

export default ServiceDetails;