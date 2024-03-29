import { Divider, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import FooterStyle from '../../styles/FooterStyle';
import Logo from '../Logo';
import SocialMediaButton from '../SocialMediaButton';
import SocialMediaList from '../SocialMediaList';
import FooterItems from './FooterItems';
import { CLIENT_PAGES } from '../../routes/paths';

const FooterContainerCopirght=styled(FooterStyle)(()=>({
    minHeight: "350px",
    display: "flex",
    paddingTop:"50px",
    flexDirection:'column',
    justifyContent: "space-around",
    backgroundColor: "#DFF1F1",
    // bottom:"0px",
}));

const FooterContainer=styled("div")(({theme})=>({
    minHeight: "350px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
    },
}));

const FooterContainerPart=styled("div")(({theme})=>({
    minHeight:"100%",
    display:"flex",
    flexDirection:"column",
    // justifyContent: "space-evenly",
    // backgroundColor:"blue",
    [theme.breakpoints.down("lg")]: {
    //    padding:"25px 0px 25px 0px"
    },
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
            <Grid container columnSpacing={5} rowSpacing={{md:3,sm:3, xs:3}}>
                        <Grid item xs={12} md={6} sm={6} lg={3}>
                        <FooterContainerPart>
                            <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
                            <FooterItems target='_blank'  title={'19, Avenue Abel Sarnette, 84300 Cavaillon | France'} path={'https://goo.gl/maps/y5CJnN4egLDmjhdEA?coh=178573&entry=tt'} sx={{fontWeight:"bold", width:"70%"}}></FooterItems>
                            <FooterItems target='_blank' title={'+33 4 90 71 35 47'} path={'tel:+33 4 90 35 47'}></FooterItems>
                            <Typography>Lundi - Vendredi, 	09:00–12:00 / 14:00–18:00</Typography>
                            <FooterItems target='_blank' title={'contact@artemisassurance.fr'} path={'mailto:contact@artemisassurance.fr'}></FooterItems>
                            <SocialMediaList/>
                        </FooterContainerPart>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={3}>
                        <FooterContainerPart>
                            <Typography sx={{fontSize:"18px", fontWeight:"bold" , marginBottom:"15px"}}>Information légales</Typography>
                            <FooterItems title={'Politique de confidentialité'} path={CLIENT_PAGES.confidentialite}></FooterItems>
                            <FooterItems title={'Termes et conditions'} path={''}></FooterItems>
                            <FooterItems title={'Traitement de vos données'} path={''}></FooterItems>
                            <FooterItems title={'Conditions'} path={''}></FooterItems>
                        </FooterContainerPart>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={3}>
                        <FooterContainerPart>
                            <Typography sx={{fontSize:"18px", fontWeight:"bold", marginBottom:"15px"}}>Liens utiles</Typography>
                            <FooterItems title={'A propos de nous'} path={CLIENT_PAGES.home}></FooterItems>
                            <FooterItems title={'Nous contacter'} path={CLIENT_PAGES.contact}></FooterItems>
                            <FooterItems title={'Fiche Conseil'} path={'document/fiche-conseil.pdf'}></FooterItems>
                            <FooterItems title={'Numéros utiles'} path={'https://www.cavaillon.fr/numeros-utiles.html'}></FooterItems>
                        </FooterContainerPart>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={3}>
                        <FooterContainerPart>
                            <Typography sx={{fontSize:"18px", fontWeight:"bold", marginBottom:"15px"}}>Nos Assurances</Typography>
                            <FooterItems title={"Assurance Habitation"} path={CLIENT_PAGES.services}></FooterItems>
                            <FooterItems title={"Assurance Professionnelle"} path={CLIENT_PAGES.services}></FooterItems>
                            <FooterItems title={"Assurance Auto"} path={CLIENT_PAGES.services}></FooterItems>
                            <FooterItems title={"Assurance Batiments"} path={CLIENT_PAGES.services}></FooterItems>
                            <FooterItems title={"Assurance Moto"} path={CLIENT_PAGES.services}></FooterItems>
                            <FooterItems title={"Assurance Loisirs"} path={CLIENT_PAGES.services}></FooterItems>
                            <FooterItems title={"Assurance Santé"} path={CLIENT_PAGES.services}></FooterItems>
                            <FooterItems title={"Assurance de Prets"} path={CLIENT_PAGES.services}></FooterItems>
                        </FooterContainerPart>
                    </Grid>
                </Grid>
            </FooterContainer>
            
            <Divider/>
            <Typography sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>© Copyright 2022 <span> ARTEMIS</span></Typography>
        </FooterContainerCopirght>
    );
}

export default Footer;