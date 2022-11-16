import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   HabitationInstallationCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function HabitationInstallationCheck() {
    const [state, setState] = React.useState({
        eclairage: false,
        portailElec: false,
        autre: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { eclairage, portailElec, autre} = state;
    return (
        <HabitationInstallationCheckContainer>
            {/* <Box sx={{ display: 'flex' }}> */}
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Installations-Extérieures</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={eclairage} onChange={handleChange} name="resposableCivile" />} label="Responsable Civile"/>
                        <FormControlLabel control={<Checkbox checked={portailElec} onChange={handleChange} name="volIncendie" />} label="Vol, Icendie"/>
                        <FormControlLabel control={<Checkbox checked={autre} onChange={handleChange} name="briseDeGlace" />}label="Brise de Glace"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            {/* </Box> */}
        </HabitationInstallationCheckContainer>
    );
}

export default HabitationInstallationCheck;