import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import BlogPageCard from '../../components/BlogPageCard';
import SectionStyle from '../../styles/SectionStyle';
import { ServiceBigTitle } from '../ServicePage/ServiceDetails';

const TheBlogsContainer = styled(SectionStyle)(() => ({
    // minHeight: "750px",
    width:"calc(100% - 20px)",
    display: "flex",
    flexDirection:"column",
    justifyContent:"space-around",

}));

function TheBlogs() {
    return (
        <TheBlogsContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch, marginTop:"20px"}}>BLOG AND ACTUALITES</Typography>
            <ServiceBigTitle variant='h3' sx={{ }}>Le choix d'une meilleure assurance commence ici</ServiceBigTitle>
            <Grid container xs>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <BlogPageCard/>
                </Grid>
            </Grid>
        </TheBlogsContainer>
    );
}

export default TheBlogs;