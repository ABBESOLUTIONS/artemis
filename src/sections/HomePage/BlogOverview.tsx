import React from 'react';
import { Button, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import BlogOverviewCard from '../../components/BlogOverviewCard';

const BlogOverviewStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"800px",
    backgroundColor:"#F3F9F8",
}));

function BlogOverview() {
    return (
       <BlogOverviewStyle>
            <BlogOverviewCard/>
       </BlogOverviewStyle>
    );
}

export default BlogOverview;