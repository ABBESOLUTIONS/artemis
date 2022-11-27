import React from 'react';
import HeroComponent from '../components/HeroComponent';
import Page from '../components/Pages';
import AbonnementBanner from '../sections/HomePage/AbonnementBanner';
import ServiceDetails from '../sections/ServicePage/ServiceDetails';
import SmallContactBanner from '../sections/ServicePage/SmallContactBanner';

function Services() {
    return (
       <Page title="Services">
          <HeroComponent bigTitle={"SERVICES"} littleTitle={'Services'}/>
          <ServiceDetails/>
          <SmallContactBanner/>
          <AbonnementBanner/>
       </Page>
    );
}

export default Services;