import React from 'react';
import { styled, SxProps, Container,Grid, Typography, Button, Stack } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ServiceOverviewCard from '../../components/ServiceOverviewCard';
import { Carousel } from 'react-bootstrap';

const ServiceOverviewContainer=styled(SectionStyle)(()=>({
    height:"800px",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
}))

function ServiceOverview() {
    return (
        <ServiceOverviewContainer>
                            {/* <ServiceOverviewCard/> */}
            <Carousel>
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
            </Carousel>
        </ServiceOverviewContainer>
    );
}

export default ServiceOverview;