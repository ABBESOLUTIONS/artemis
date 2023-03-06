import { Typography } from '@mui/material';
import React from 'react';
import ResetPasswordInput from '../../components/UserLayout/ResetPasswordInput';
import { InputSectionStyle } from '../LogInPage/InputSection';

function ResetPasswordSection() {
    return (
        <InputSectionStyle>
            <Typography sx={{fontWeight:"bold", color:"white", textAlign:"center", fontSize:"25px"}}>Saisir votre nouveau mot de passe</Typography>
            <ResetPasswordInput/>
        </InputSectionStyle>
    );
}

export default ResetPasswordSection;