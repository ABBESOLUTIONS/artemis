import React from 'react';
import { Button, styled, Typography, Paper } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import BlogOverviewCard from '../../components/BlogOverviewCard';
import Carousel from 'react-material-ui-carousel';
import BlogCarousel from '../../components/BlogCarousel';


const BlogOverviewStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    width:"calc(100% - 30px)",
    height:"600px",
    backgroundColor:"#F3F9F8",
    // display:"flex",
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
                    <BlogCarousel/>
       </BlogOverviewStyle>
    );
}

export default BlogOverview;