import { Container, styled } from '@mui/material';
import React from 'react';
import AboutDrawer from '../components/AboutDrawer';
import HeroComponent from '../components/HeroComponent';
import Page from '../components/Pages';
import ContactElements from '../sections/ContactPage.tsx/ContactElements';
import ContactForm from '../sections/ContactPage.tsx/ContactForm';
import DevisOptionSection from '../sections/DevisOptionPage/DevisOptionSection';

const ContactStyle= styled("div")(()=>({
    
}))

function Contact() {
    return (
        <Page title="Contact"> 
            <ContactStyle>
                <HeroComponent bigTitle={"CONTACT"} littleTitle={"Nous Contacter"}/>
                <ContactElements/>
                <ContactForm/>
                <DevisOptionSection/>
            </ContactStyle>
        </Page>
    );
}

export default Contact;