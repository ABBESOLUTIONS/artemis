import React from 'react';
import BlogPageCard from '../components/BlogPageCard';
import HeroComponent from '../components/HeroComponent';
import Page from '../components/Pages';

function Blog() {
    return (
        <Page title="Blog">
            <HeroComponent bigTitle={"ARTICLES"} littleTitle={"Blog"}/>
            <BlogPageCard/>
        </Page>
    );
}

export default Blog;