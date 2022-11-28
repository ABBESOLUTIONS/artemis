import { Typography } from '@mui/material';
import React from 'react';
import Slider, { ResponsiveObject } from "react-slick";
import { PROJECT_COLORS } from '../common/colors';
import { ServiceBigTitle } from '../sections/ServicePage/ServiceDetails';
import BlogOverviewCard from './BlogOverviewCard';


interface Props{
    settings? : {
        dots:boolean,
        infinite:boolean,
        slidesToShow:number,
        slidesToScroll:number,
        autoplay:boolean,
        autoplaySpeed:number,
        pauseOnHover:boolean,
        responsive? : Array<ResponsiveObject>
    }
}

function BlogCarousel({settings = {dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, pauseOnHover: false, responsive:[{breakpoint:600, settings:{slidesToShow:1, slidesToScroll:2, infinite:true, dots:true, initialSlide:2}},{breakpoint:1024, settings:{slidesToShow: 2,slidesToScroll: 2,infinite: true,dots: true}}]}}) {
    return (
        <div>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch, marginTop:"20px"}}>BLOG AND ACTUALITES</Typography>
            <ServiceBigTitle variant='h3' sx={{ }}>Lire nos articles pour savoir plus</ServiceBigTitle>
            <Slider {...settings}>
                <div>
                    <BlogOverviewCard/>
                </div>
                <div>
                    <BlogOverviewCard/>
                </div>
                <div>
                    <BlogOverviewCard/>
                </div>
                <div>
                    <BlogOverviewCard/>
                </div>
                <div>
                    <BlogOverviewCard/>
                </div>
                <div>
                    <BlogOverviewCard/>
                </div>
                <div>
                    <BlogOverviewCard/>
                </div>
            </Slider>
        </div>
    );
}

export default BlogCarousel;