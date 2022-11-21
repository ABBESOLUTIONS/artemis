import React from 'react';
import { styled, SxProps, Typography,Container,Grid} from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import LogInCard from '../../components/LogInCard';
import SignUpCard from '../../components/SignUpCard';

const SignUpSectionStyle=styled(SectionStyle)(()=>({
    backgroundColor:"#138F82",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:"100px"
}));

function SignUpSection() {
    return (
        <SignUpSectionStyle>
            <Typography sx={{fontWeight:"bold", color:"white", textAlign:"center", fontSize:"25px"}}>Veuillez créer un compte pour demander votre devis</Typography>
            <SignUpCard/>
        </SignUpSectionStyle>
    );
}

export default SignUpSection;