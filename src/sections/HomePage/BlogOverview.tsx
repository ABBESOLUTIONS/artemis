import React from 'react';
import { Button, styled, Typography, Paper } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import BlogOverviewCard from '../../components/BlogOverviewCard';
import Carousel from 'react-material-ui-carousel';
import BlogCarousel from '../../components/BlogCarousel';


const BlogOverviewStyle=styled("section")(({theme})=>({
    // width:"100%",
    width:"calc(100% - 30vw)",
    padding:"75px 15vw 75px 15vw",
    height:"600px",
    backgroundColor:"#F3F9F8",
    // display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        
    },
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