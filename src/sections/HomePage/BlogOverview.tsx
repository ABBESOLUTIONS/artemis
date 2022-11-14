import React from 'react';
import { Button, styled, Typography, Paper } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import BlogOverviewCard from '../../components/BlogOverviewCard';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import Carousel from 'react-material-ui-carousel';


const BlogOverviewStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"600px",
    backgroundColor:"#F3F9F8",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
}));
const CarouselElementStyle=styled("div")(()=>({
    width:"100%",
    height:"500px",
    display:"flex",
    flexDirection:"row",
}));

function BlogOverview() {
    return (
       <BlogOverviewStyle>
            <Carousel sx={{width:"100%", height:"500px"}}>
                <CarouselElementStyle>
                    <BlogOverviewCard/>
                    <BlogOverviewCard/>
                    <BlogOverviewCard/>
                </CarouselElementStyle>
                <CarouselElementStyle>
                    <BlogOverviewCard/>
                    <BlogOverviewCard/>
                    <BlogOverviewCard/>
                </CarouselElementStyle>
                <CarouselElementStyle>
                    <BlogOverviewCard/>
                    <BlogOverviewCard/>
                    <BlogOverviewCard/>
                </CarouselElementStyle>
            </Carousel>
       </BlogOverviewStyle>
    );
}

export default BlogOverview;