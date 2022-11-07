import { Container, styled } from '@mui/material';
import React from 'react';
import AboutDrawer from '../components/AboutDrawer';

const ContactStyle= styled("div")(()=>({
    justifyContent:"center",
    paddingTop:"100px"
}))

function Contact() {
    return (
       <ContactStyle>
        <div>
            hello contact!!!
            <AboutDrawer />
        </div>
       </ContactStyle>
    );
}

export default Contact;