import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import FormAccesButton from '../../components/FormAccesButton';
import { CLIENT_PAGES } from '../../routes/paths';
import SectionStyle from '../../styles/SectionStyle';

const DevisOptionSectionContainer=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"300px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function DevisOptionSection() {
    return (
        <DevisOptionSectionContainer>
            <Typography sx={{fontSize:"35px", textAlign:"center"}}>SELECTIONEZ:</Typography>
            <Grid container xs spacing={2}>
                <Grid item xs={6}>
                    <FormAccesButton nom={"AUTO-MOTO"} desc={"(Vélo, Trotinette,Bateau)"} chemin={CLIENT_PAGES.autoMoto}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"HABITATION"} desc={"Propriétaie ou Locataire"} chemin={''}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"SANTE"} desc={"Mutuel et Prévoyance"} chemin={CLIENT_PAGES.sante}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"PROFESSIONELLE"} desc={"RCPRO,Multirisques et Decennal"} chemin={''}/>
                </Grid>
            </Grid>
        </DevisOptionSectionContainer>
    );
}

export default DevisOptionSection;