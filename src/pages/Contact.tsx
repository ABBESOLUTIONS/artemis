import { Container, styled } from '@mui/material';
import React from 'react';
import AboutDrawer from '../components/AboutDrawer';
import ContactElements from '../sections/ContactPage.tsx/ContactElements';

const ContactStyle= styled("div")(()=>({
    
}))

function Contact() {
    return (
       <ContactStyle>
            <ContactElements/>
       </ContactStyle>
    );
}

export default Contact;