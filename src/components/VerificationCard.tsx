import { Button, Card, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import { sendEmailVerification } from '../services/auth';
import SectionStyle from '../styles/SectionStyle';

const VerificationCardContainer=styled(Card)(()=>({
    width:"70%",
    height:"450px",
    backgroundColor:"#F3F9F8",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"100px",
}));

const VerificationButton=styled(Button)(()=>({
    
}));

const onSubmit = () => {
    sendEmailVerification();
}




function VerificationCard() {
    return (
        <VerificationCardContainer>
                <VerificationButton onClick={onSubmit}>Vérifier Votre Email</VerificationButton>
                <Typography>Veuillez saisir le code envoyé dans votre boite Mail puis valider</Typography>
                <TextField id="standard-password-input" label="Code" type="password" autoComplete="current-password" variant="standard"/>
                <VerificationButton >Valider</VerificationButton>
        </VerificationCardContainer>
    );
}

export default VerificationCard;