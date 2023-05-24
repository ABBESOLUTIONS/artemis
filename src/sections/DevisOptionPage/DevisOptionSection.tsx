import { Container, Grid, MenuItem, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import FormAccesButton from '../../components/FormAccesButton';
import { CLIENT_PAGES, USER_PAGES } from '../../routes/paths';
import SectionStyle from '../../styles/SectionStyle';

const DevisOptionSectionContainer=styled(SectionStyle)(()=>({
    // width:"100%",
    minHeight:"60vh",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:"30px"
}));

function DevisOptionSection() {
    const [formType, setFormType] = useState('');

    return (
        <DevisOptionSectionContainer>
            <Typography sx={{fontSize:"30px", textAlign:"center", fontWeight:"bold"}}>SELECTIONEZ:</Typography>
            <Container sx={{margin:"50px"}}>
            <Grid container xs rowSpacing={1} >
                <Grid item xs={6}>
                    <FormAccesButton nom={"AUTO-MOTO"} desc={"(Vélo, Trotinette,Bateau)"} chemin={CLIENT_PAGES.autoMoto}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"HABITATION"} desc={"(Propriétaie ou Locataire)"} chemin={CLIENT_PAGES.habitation}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"SANTE"} desc={"(Mutuel et Prévoyance)"} chemin={CLIENT_PAGES.sante}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"PROFESSIONELLE"} desc={"(RCPRO,Multirisques et Decennal)"} chemin={CLIENT_PAGES.professionelle}/>
                </Grid>
            </Grid>
            <TextField></TextField>
            <TextField></TextField>
            <TextField select value={formType} onChange={(e) => setFormType(e.target.value)}>
                <MenuItem>AUTO</MenuItem>
                <MenuItem >PRO</MenuItem>
                <MenuItem>SANTE</MenuItem>
                <MenuItem>HABITATION</MenuItem>
            </TextField>
            </Container>
        </DevisOptionSectionContainer>
    );
}

export default DevisOptionSection;