import React from 'react';
import { styled, SxProps, Container,Grid, Typography, Button, Stack } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ServiceOverviewCard from '../../components/ServiceOverviewCard';
import { Carousel } from 'react-bootstrap';
import PauseOnHover from '../../components/ServiceCarousel';
import ServiceCarousel from '../../components/ServiceCarousel';
import { QualityTitle } from './Qualities';
import { PROJECT_COLORS } from '../../common/colors';

const ServiceOverviewContainer=styled(SectionStyle)(()=>({
    height:"600px",
    width:"calc(100% - 30px)",
    paddingTop:"40px",
    paddingBottom:"40px",
    // display:"flex",
    justifyContent:"space-around",
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