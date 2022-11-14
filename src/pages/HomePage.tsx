import React from 'react';
import Members from '../sections/HomePage/Members';
import ServicesOverview from '../sections/HomePage/AboutOverview';
import Experience from '../sections/HomePage/Experience';
import Qualities from '../sections/HomePage/Qualities';
import HomeHero from '../sections/HomePage/HomeHero';
import TestimonyOverview from '../sections/HomePage/TestimonyOverview';
import HeroComponent from '../components/HeroComponent';
import BlogOverview from '../sections/HomePage/BlogOverview';
import ServiceOverview from '../sections/HomePage/ServiceOverview';
import AutoMoto from './AutoMoto';
import Habitation from './Habitation';
import Sante from './Sante';
import Professionelle from './Professionelle';
import AbonnementBanner from '../sections/HomePage/AbonnementBanner';

function HomePage() {
    return (
        <div>
        <HomeHero/>
        <Qualities/>
        <ServicesOverview/>
        <ServiceOverview/>
        <Experience/>
        <Members/>
        <TestimonyOverview/>
        <BlogOverview/>
        <AbonnementBanner/>
        {/* <HeroComponent/>
        <AutoMoto/>
        <Habitation/>
        <Sante/>
        <Professionelle/> */}
        </div>
    );
}

export default HomePage;