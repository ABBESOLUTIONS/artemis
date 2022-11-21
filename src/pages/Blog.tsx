import React from 'react';
import BlogPageCard from '../components/BlogPageCard';
import HeroComponent from '../components/HeroComponent';

function Blog() {
    return (
        <div>
            <HeroComponent bigTitle={"ARTICLES"} littleTitle={"Blog"}/>
            <BlogPageCard/>
        </div>
    );
}

export default Blog;