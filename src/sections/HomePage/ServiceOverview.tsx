import React from 'react';
import { styled, SxProps, Container,Grid, Typography, Button, Stack } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ServiceOverviewCard from '../../components/ServiceOverviewCard';
import { Carousel } from 'react-bootstrap';
import PauseOnHover from '../../components/ServiceCarousel';
import ServiceCarousel from '../../components/ServiceCarousel';
import { QualityTitle } from './Qualities';
import { PROJECT_COLORS } from '../../common/colors';

const ServiceOverviewContainer=styled("section")(({theme})=>({
    // height:"600px",
    minHeight:"65vh",
    // width:"calc(100% - 30px)",
    width:"calc(100% - 30vw)",
    padding:"75px 15vw 75px 15vw",
    // paddingTop:"40px",
    // paddingBottom:"40px",
    display:"flex",
    flexDirection:"column",
    
    // justifyContent:"space-around",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        // width:"calc(100% - 20px)",
        // height:"auto",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",
    },
}))

function ServiceOverview() {
    return (
        <ServiceOverviewContainer>
             <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>NOS SERVICES</Typography>
            {/* <Typography variant='h3' sx={{textAlign:"center", fontWeight:"bold", fontSize:"45px", marginBottom:"50px"}}></Typography> */}
            <QualityTitle>Tout Notre Savoir-Faire</QualityTitle>
            <ServiceCarousel/>
        </ServiceOverviewContainer>
    );
}

export default ServiceOverview;