import React from 'react';
import { styled, SxProps, Container,Grid, Typography, Button, Stack } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ServiceOverviewCard from '../../components/ServiceOverviewCard';
import { Carousel } from 'react-bootstrap';
import PauseOnHover from '../../components/ServiceCarousel';
import ServiceCarousel from '../../components/ServiceCarousel';

const ServiceOverviewContainer=styled(SectionStyle)(()=>({
    height:"600px",
    width:"calc(100% - 30px)"
}))

function ServiceOverview() {
    return (
        <ServiceOverviewContainer>
            {/* <ServiceOverviewCard/> */}
            {/* <h2>hiii</h2> */}
            <ServiceCarousel/>
            {/* <Carousel>
                <Carousel.Item>
                    <Stack direction={"row"}>
                    <ServiceOverviewCard/>
                    <ServiceOverviewCard/>
                    <ServiceOverviewCard/>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item>
                <Stack direction={"row"}>
                    <ServiceOverviewCard/>
                    <ServiceOverviewCard/>
                    <ServiceOverviewCard/>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item>
                <Stack direction={"row"}>
                    <ServiceOverviewCard/>
                    <ServiceOverviewCard/>
                    <ServiceOverviewCard/>
                    </Stack>
                </Carousel.Item>
            </Carousel> */}
        </ServiceOverviewContainer>
    );
}

export default ServiceOverview;