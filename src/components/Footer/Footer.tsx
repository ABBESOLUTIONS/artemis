import { Divider, styled, Typography } from '@mui/material';
import React from 'react';
import FooterStyle from '../../styles/FooterStyle';
import Logo from '../Logo';
import SocialMediaButton from '../SocialMediaButton';
import SocialMediaList from '../SocialMediaList';
import FooterItems from './FooterItems';

const FooterContainerCopirght=styled(FooterStyle)(()=>({
    minHeight: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#DFF1F1",
}));

const FooterContainer=styled("div")(()=>({
    height: "275px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
}));

const FooterContainerPart=styled("div")(()=>({
    height:"200px",
    display:"flex",
    flexDirection:"column",
    justifyContent: "space-around",
}));

const SocialMediaContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
    // justifyContent:"space-around",
    margin:"10px",
    marginRight:"10px"
}))
function Footer() {
    return (
        <FooterContainerCopirght>
            <FooterContainer>
            <FooterContainerPart>
                <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                <FooterItems title={'19, avenue Abel Sarnette, 84300 Cavaillon | France'} path={''} sx={{fontWeight:"bold"}}></FooterItems>
                <FooterItems title={'+33 4 90 71 35 47'} path={''}></FooterItems>
                <Typography>Lundi - vendredi, 	09:00–12:00 / 14:00–18:00</Typography>
                <FooterItems title={'mailto:contact@artemisassurance.fr'} path={''}></FooterItems>
                <SocialMediaList/>
            </FooterContainerPart>
            <FooterContainerPart>
                <Typography sx={{fontSize:"18px", fontWeight:"bold"}}>Information légales</Typography>
                <FooterItems title={'Politique de confidentialité'} path={''}></FooterItems>
                <FooterItems title={'Termes et conditions'} path={''}></FooterItems>
                <FooterItems title={'Traitement de vos données'} path={''}></FooterItems>
                <FooterItems title={'Conditions'} path={''}></FooterItems>
            </FooterContainerPart>
            <FooterContainerPart>
                <Typography sx={{fontSize:"18px", fontWeight:"bold"}}>Liens utiles</Typography>
                <FooterItems title={'A propos de nous'} path={''}></FooterItems>
                <FooterItems title={'Blog et actualités'} path={''}></FooterItems>
                <FooterItems title={'Nous contacter'} path={''}></FooterItems>
                <FooterItems title={'Fiche Conseil'} path={''}></FooterItems>
                <FooterItems title={'Numéros utiles'} path={''}></FooterItems>
            </FooterContainerPart>
            <FooterContainerPart>
                <Typography sx={{fontSize:"18px", fontWeight:"bold"}}>Nos assurances</Typography>
                <FooterItems title={"L'assurance des véhicules"} path={''}></FooterItems>
                <FooterItems title={"L'assurance des biens"} path={''}></FooterItems>
                <FooterItems title={"L'assurance des bâtiments"} path={''}></FooterItems>
                <FooterItems title={"L'assurance des personnes"} path={''}></FooterItems>
                <FooterItems title={"L'assurance des animaux"} path={''}></FooterItems>
            </FooterContainerPart>
            </FooterContainer>
            <Divider/>
            <Typography sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>© Copyright 2022<FooterItems title={'Artemis'} path={''}/> </Typography>
        </FooterContainerCopirght>
    );
}

export default Footer;