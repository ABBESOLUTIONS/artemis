import { Button, Card, Typography, styled } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import { ArrowBackIosNew, BackHandOutlined } from '@mui/icons-material';
import { CLIENT_PAGES } from '../../routes/paths';

const RedirectionSectionStyle = styled("section")(()=>({
    // width:"400px",
    minHeight:"98vh",
    // height:"100%",
    backgroundColor:PROJECT_COLORS.primarySwatch,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}))

function RedirectionSection() {
    return (
        <RedirectionSectionStyle>
            <Typography sx={{fontWeight:"bold", marginBottom:"100px", textTransform:"uppercase"}}> NOUS AVONS MIS LE LOGO POUR FAIRE BRANCHé MAIS NOUS PRéFéRONS LA PROXIMITé</Typography>
            <Button startIcon={<ArrowBackIosNew/>} sx={{backgroundColor:"white", color:"black"}} href={CLIENT_PAGES.home}> Retour A La Page d'Accueil</Button>
        </RedirectionSectionStyle>
    );
}

export default RedirectionSection;