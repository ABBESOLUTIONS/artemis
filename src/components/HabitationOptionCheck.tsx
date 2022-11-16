import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   HabitationOptionCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function HabitationOptionCheck() {
    const [state, setState] = React.useState({
        piscine: false,
        protectionJuri: false,
        dependance: false,
        abris: false,
        instrument: false,
        autre: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { piscine, protectionJuri, dependance, abris, instrument, autre } = state;
    return (
        <HabitationOptionCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Option:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={piscine} onChange={handleChange} name="Piscine" />} label="Piscine"/>
                        <FormControlLabel control={<Checkbox checked={protectionJuri} onChange={handleChange} name="protectionJuri" />} label=" Protection Juridique"/>
                        <FormControlLabel control={<Checkbox checked={dependance} onChange={handleChange} name="dependance" />}label="Dépendance(m2)"/>
                        <FormControlLabel control={<Checkbox checked={abris} onChange={handleChange} name="abris" />}label="Abris"/>
                        <FormControlLabel control={<Checkbox checked={instrument} onChange={handleChange} name="instrument" />}label="Instruments de Musique"/>
                        <FormControlLabel control={<Checkbox checked={autre} onChange={handleChange} name="autre" />}label="Autres"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </HabitationOptionCheckContainer>
    );
}

export default HabitationOptionCheck;