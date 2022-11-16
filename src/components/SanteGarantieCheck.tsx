import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   SantePaiementCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function SanteGarantieCheck() {
    const [state, setState] = React.useState({
        hospitalisation: false,
        soinsCourant: false,
        dentaire: false,
        optique: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { hospitalisation, soinsCourant, dentaire, optique } = state;
    return (
        <SantePaiementCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Guaranties:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={hospitalisation} onChange={handleChange} name="hospitalisation" />} label="Hospitalisation"/>
                        <FormControlLabel control={<Checkbox checked={soinsCourant} onChange={handleChange} name="soinsCourant" />} label="Soins Courant"/>
                        <FormControlLabel control={<Checkbox checked={dentaire} onChange={handleChange} name="dentaire" />}label="Dentaire"/>
                        <FormControlLabel control={<Checkbox checked={optique} onChange={handleChange} name="optique" />}label="Optique"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </SantePaiementCheckContainer>
    );
}

export default SanteGarantieCheck;