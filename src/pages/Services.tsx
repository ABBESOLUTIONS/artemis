import React from 'react';
import HeroComponent from '../components/HeroComponent';
import AbonnementBanner from '../sections/HomePage/AbonnementBanner';
import ServiceDetails from '../sections/ServicePage/ServiceDetails';
import SmallContactBanner from '../sections/ServicePage/SmallContactBanner';

function Services() {
    return (
       <div>
         <HeroComponent bigTitle={"SERVICES"} littleTitle={'Services'}/>
        <ServiceDetails/>
        <SmallContactBanner/>
        <AbonnementBanner/>
       </div>
    );
}

export default Services;