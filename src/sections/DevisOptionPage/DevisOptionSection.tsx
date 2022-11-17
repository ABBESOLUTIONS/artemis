import { Container, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import FormAccesButton from '../../components/FormAccesButton';
import { CLIENT_PAGES } from '../../routes/paths';
import SectionStyle from '../../styles/SectionStyle';

const DevisOptionSectionContainer=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"350px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:"30px"
}));

function DevisOptionSection() {
    return (
        <DevisOptionSectionContainer>
            <Typography sx={{fontSize:"30px", textAlign:"center", fontWeight:"bold"}}>SELECTIONEZ:</Typography>
            <Container sx={{margin:"50px"}}>
            <Grid container xs rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <FormAccesButton nom={"AUTO-MOTO"} desc={"(Vélo, Trotinette,Bateau)"} chemin={CLIENT_PAGES.autoMoto}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"HABITATION"} desc={"Propriétaie ou Locataire"} chemin={CLIENT_PAGES.habitation}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"SANTE"} desc={"Mutuel et Prévoyance"} chemin={CLIENT_PAGES.sante}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"PROFESSIONELLE"} desc={"RCPRO,Multirisques et Decennal"} chemin={CLIENT_PAGES.logIn}/>
                </Grid>
            </Grid>
            
            </Container>
        </DevisOptionSectionContainer>
    );
}

export default DevisOptionSection;