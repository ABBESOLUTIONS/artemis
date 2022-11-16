import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   SanteOptionCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function SanteOptionCheck() {
    const [state, setState] = React.useState({
        renfortDentaire: false,
        renfortOptique: false,
        chambreIndiv: false,
        cureThermale: false,
        ostheopathie: false,
        acupuncture: false,
        chiropractie: false,
        ethiopathie: false,
        dietetivien: false,
        autre: false,

      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { renfortDentaire, renfortOptique, chambreIndiv, cureThermale,ostheopathie, acupuncture, chiropractie, ethiopathie, dietetivien, autre } = state;
    return (
        <SanteOptionCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Guaranties:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={renfortDentaire} onChange={handleChange} name="renfortDentaire" />} label="Renfort Dentaire"/>
                        <FormControlLabel control={<Checkbox checked={renfortOptique} onChange={handleChange} name="renfortOptique" />} label="Rrenfort Optique"/>
                        <FormControlLabel control={<Checkbox checked={chambreIndiv} onChange={handleChange} name="chambreIndiv" />}label="Chambre Indiv., Lit accompagnant, assistance "/>
                        <FormControlLabel control={<Checkbox checked={cureThermale} onChange={handleChange} name="cureThermale" />}label="Cure Thermale (55)"/>
                        <FormControlLabel control={<Checkbox checked={ostheopathie} onChange={handleChange} name="ostheopathie" />}label="Osthéopathie"/>
                        <FormControlLabel control={<Checkbox checked={acupuncture} onChange={handleChange} name="acupuncture" />}label="Acupuncture"/>
                        <FormControlLabel control={<Checkbox checked={chiropractie} onChange={handleChange} name="chiropractie" />}label="Chiropractie"/>
                        <FormControlLabel control={<Checkbox checked={ethiopathie} onChange={handleChange} name="ethiopathie" />}label="Ethiopathie"/>
                        <FormControlLabel control={<Checkbox checked={dietetivien} onChange={handleChange} name="dietetivien" />}label="Diétévien"/>
                        <FormControlLabel control={<Checkbox checked={autre} onChange={handleChange} name="autre" />}label="Autres, précisez ci-dessous"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </SanteOptionCheckContainer>
    );
}

export default SanteOptionCheck;