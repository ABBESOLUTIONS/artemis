import { Container, styled } from '@mui/material';
import React from 'react';
import AboutDrawer from '../components/AboutDrawer';
import HeroComponent from '../components/HeroComponent';
import ContactElements from '../sections/ContactPage.tsx/ContactElements';
import ContactForm from '../sections/ContactPage.tsx/ContactForm';

const ContactStyle= styled("div")(()=>({
    
}))

function Contact() {
    return (
       <ContactStyle>
            <HeroComponent/>
            <ContactElements/>
            <ContactForm/>
       </ContactStyle>
    );
}

export default Contact;