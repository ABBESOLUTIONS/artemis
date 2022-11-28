import { Grid } from '@mui/material';
import React from 'react';
import BlogPageCard from '../components/BlogPageCard';
import HeroComponent from '../components/HeroComponent';
import Page from '../components/Pages';
import TheBlogs from '../sections/BlogPage/TheBlogs';

function Blog() {
    return (
        <Page title="Blog">
            <HeroComponent bigTitle={"ARTICLES"} littleTitle={"Blog"}/>
            <TheBlogs/>
        </Page>
    );
}

export default Blog;