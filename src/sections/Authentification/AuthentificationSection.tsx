import { styled, Typography } from '@mui/material';
import React from 'react';
import VerificationCard from '../../components/VerificationCard';
import SectionStyle from '../../styles/SectionStyle';

const VerificationSection=styled(SectionStyle)(()=>({
    backgroundColor:"#138F82",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:"100px",
}));
const VerificationSectionTitle=styled(Typography)(()=>({
    fontWeight:"bold", 
    color:"white", 
    textAlign:"center", 
    fontSize:"25px"
}));

function AuthentificationSection() {
    return (
        <VerificationSection>
            <VerificationSectionTitle>Authentification</VerificationSectionTitle>
            <VerificationCard/>
        </VerificationSection>
    );
}

export default AuthentificationSection;