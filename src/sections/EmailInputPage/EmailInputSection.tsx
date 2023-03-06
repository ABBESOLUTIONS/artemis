import { Typography } from '@mui/material';
import React from 'react';
import EmailInputCard from '../../components/EmailInputCard';
import TextButton from '../../components/TextButton';
import { CLIENT_PAGES, USER_PAGES } from '../../routes/paths';
import { InputSectionStyle } from '../LogInPage/InputSection';

function EmailInputSection() {
    return (
        <InputSectionStyle>
            <Typography sx={{fontWeight:"bold", color:"white", textAlign:"center", fontSize:"25px"}}>Veuillez saisir votre Email</Typography>
            <EmailInputCard/>
        </InputSectionStyle>
    );
}

export default EmailInputSection;