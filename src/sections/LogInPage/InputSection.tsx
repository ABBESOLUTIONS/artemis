import React from 'react';
import { styled, SxProps, Typography,Container,Grid} from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import LogInCard from '../../components/LogInCard';
import { CLIENT_PAGES } from '../../routes/paths';
import TextButton from '../../components/TextButton';

export const InputSectionStyle=styled(SectionStyle)(()=>({
    backgroundColor:"#138F82",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-around",
    paddingTop:"100px",
}));



function InputSection() {
    return (
       <InputSectionStyle>
            <Typography sx={{fontWeight:"bold", color:"white", textAlign:"center", fontSize:"25px"}}>Veuillez saisir vos identifiants pour demander votre devis</Typography>
            <LogInCard/>
       </InputSectionStyle>
    );
}

export default InputSection;