import React from 'react';
import { styled, SxProps, Container,Grid, Typography, Button, Stack } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ServiceOverviewCard from '../../components/ServiceOverviewCard';

const ServiceOverviewContainer=styled(SectionStyle)(()=>({
    height:"800px",
}))

function ServiceOverview() {
    return (
        <ServiceOverviewContainer>
                <ServiceOverviewCard/>
        </ServiceOverviewContainer>
    );
}

export default ServiceOverview;