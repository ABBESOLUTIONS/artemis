import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';
import React from 'react';
const   AutoMotoGarageCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function AutoMotoGarageCheck() {
    const [state, setState] = React.useState({
        boxFermé: false,
        terrainClos: false,
        parkingSecurité: false,
        voiePublique: false,
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      // const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
      //   setData((prev) => ({...prev, [e.target.name]: e.target.checked}));
      // };

      const { boxFermé, terrainClos, parkingSecurité, voiePublique } = state;
    return (
        <AutoMotoGarageCheckContainer>
            <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={boxFermé} onChange={handleChange} name="boxFermé" />
            }
            label="Box Fermé"
          />
          <FormControlLabel
            control={
              <Checkbox checked={terrainClos} onChange={handleChange} name="terrainClos" />
            }
            label="Terrain Clos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={parkingSecurité} onChange={handleChange} name="parkingSecurité" />
            }
            label="Parking Sécurité"
          />
          <FormControlLabel
            control={
              <Checkbox checked={voiePublique} onChange={handleChange} name="voiePublique" />
            }
            label="Voie PUBLIQUE"
          />
        </FormGroup>
        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
      </FormControl>
      </Box>
        </AutoMotoGarageCheckContainer>
        
    );
}

export default AutoMotoGarageCheck;