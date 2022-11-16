import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, styled } from '@mui/material';

const   AutoMotoOptionCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function AutoMotoOptionCheck() {
    const [state, setState] = React.useState({
        assistance: true,
        vehiculeRemplacement: false,
        limite: false,
        conduiteEx: false,
        equipement: false,
        protection: false,
        permis: false,
        perte: false,
        marchandise: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { assistance, vehiculeRemplacement, limite, conduiteEx, equipement, protection, permis, perte, marchandise } = state;
    return (
        <AutoMotoOptionCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Garanties Souhaitées</FormLabel>
                    <FormGroup>
                        {/* <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                            </Grid>
                        </Grid> */}
                        <FormControlLabel control={<Checkbox checked={assistance} onChange={handleChange} name="resposableCivile" />} label="  Assistance 0km"/>
                        <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChange} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                        <FormControlLabel control={<Checkbox checked={limite} onChange={handleChange} name="limite" />}label="Limite Km"/>
                        <FormControlLabel control={<Checkbox checked={conduiteEx} onChange={handleChange} name="conduiteEx" />}label="Conduite Exclusive"/>
                        <FormControlLabel control={<Checkbox checked={equipement} onChange={handleChange} name="equipement" />}label="Equipements"/>
                        <FormControlLabel control={<Checkbox checked={protection} onChange={handleChange} name="protection" />}label="Protection Juridique"/>
                        <FormControlLabel control={<Checkbox checked={permis} onChange={handleChange} name="permis" />}label="Permis de Conduire"/>
                        <FormControlLabel control={<Checkbox checked={perte} onChange={handleChange} name="perte" />}label="Perte Financière tous Accidant"/>
                        <FormControlLabel control={<Checkbox checked={marchandise} onChange={handleChange} name="marchandise" />}label="Marchandises Transportées"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </AutoMotoOptionCheckContainer>
    );
}

export default AutoMotoOptionCheck;