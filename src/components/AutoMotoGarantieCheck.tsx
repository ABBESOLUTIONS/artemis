import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   AutoMotoGarantieCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function AutoMotoGarantieCheck() {
    const [state, setState] = React.useState({
        responsableCivile: true,
        volIncendie: false,
        briseDeGlace: false,
        tousDommage: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { responsableCivile, volIncendie, briseDeGlace, tousDommage } = state;
    return (
        <AutoMotoGarantieCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Garanties Souhaitées</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={responsableCivile} onChange={handleChange} name="resposableCivile" />} label="Responsable Civile"/>
                        <FormControlLabel control={<Checkbox checked={volIncendie} onChange={handleChange} name="volIncendie" />} label="Vol, Icendie"/>
                        <FormControlLabel control={<Checkbox checked={briseDeGlace} onChange={handleChange} name="briseDeGlace" />}label="Brise de Glace"/>
                        <FormControlLabel control={<Checkbox checked={tousDommage} onChange={handleChange} name="tousDommage" />}label="Dommages tous Accidant"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </AutoMotoGarantieCheckContainer>
    );
}

export default AutoMotoGarantieCheck;