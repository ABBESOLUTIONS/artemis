import React from 'react';
import HeroComponent from '../components/HeroComponent';
import ServiceDetails from '../sections/ServicePage/ServiceDetails';
import SmallContactBanner from '../sections/ServicePage/SmallContactBanner';

function Services() {
    return (
       <div>
         <HeroComponent/>
        <ServiceDetails/>
        <SmallContactBanner/>
       </div>
    );
}

export default Services;