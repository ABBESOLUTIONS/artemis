import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';
import React from 'react';

const   AutoMotoUsageVehiculaireCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
    height:"75px"
}))

function AutoMotoUsageVehiculaireCheck() {
    const [state, setState] = React.useState({
        promenade: true,
        promenadeTravail: false,
        affaire: false,
        tous: false,
      });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      const {promenade, promenadeTravail, affaire, tous}= state;
    return (
        <AutoMotoUsageVehiculaireCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={promenade} onChange={handleChange} name="promenade" />} label="Promenade"/>
                        <FormControlLabel control={<Checkbox checked={promenadeTravail} onChange={handleChange} name="promenadeTravail" />} label="Promenade/ Trajet travail"/>
                        <FormControlLabel control={<Checkbox checked={affaire} onChange={handleChange} name="affaire" />} label="Affaire"/>
                        <FormControlLabel control={<Checkbox checked={tous} onChange={handleChange} name="tous" />} label="Tous"/>
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
            </Box>
        </AutoMotoUsageVehiculaireCheckContainer>
    );
}

export default AutoMotoUsageVehiculaireCheck;