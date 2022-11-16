import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   SanteOptionCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function HabitationGarantieCheck() {
    const [state, setState] = React.useState({
        incendie: false,
        catastropheNat: false,
        vol: false,
        degatEau: false,
        brisDeGlace: false,
        remplacementNeuf: false,
        dommagesElect: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { incendie, catastropheNat, vol, degatEau,brisDeGlace, remplacementNeuf, dommagesElect } = state;
    return (
        <SanteOptionCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Guaranties Souhaitées:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={incendie} onChange={handleChange} name="incendie" />} label="Incendie"/>
                        <FormControlLabel control={<Checkbox checked={catastropheNat} onChange={handleChange} name="catastropheNat" />} label="Catastrophes Naturelles"/>
                        <FormControlLabel control={<Checkbox checked={vol} onChange={handleChange} name="vol" />}label="Vol"/>
                        <FormControlLabel control={<Checkbox checked={degatEau} onChange={handleChange} name="degatEau" />}label="Dégats des Eaux"/>
                        <FormControlLabel control={<Checkbox checked={brisDeGlace} onChange={handleChange} name="brisDeGlace" />}label="Bris de Glace"/>
                        <FormControlLabel control={<Checkbox checked={remplacementNeuf} onChange={handleChange} name="remplacementNeuf" />}label="Remplacement à Neuf"/>
                        <FormControlLabel control={<Checkbox checked={dommagesElect} onChange={handleChange} name="dommagesElect" />}label="Dommages Electriques"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </SanteOptionCheckContainer>
    );
}

export default HabitationGarantieCheck;