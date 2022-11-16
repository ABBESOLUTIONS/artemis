import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   ProfessionellegarantieCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function ProfessionelleGarantieCheck() {
    const [state, setState] = React.useState({
        responsabilite: false,
        multiRisque: false,
        decennale: false,
        autre: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { responsabilite, multiRisque, decennale, autre } = state;
    return (
        <ProfessionellegarantieCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Guaranties Souhaitées:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={responsabilite} onChange={handleChange} name="responsabilite" />} label="Responsabilite"/>
                        <FormControlLabel control={<Checkbox checked={multiRisque} onChange={handleChange} name="multiRisque" />} label="Multi-Risques"/>
                        <FormControlLabel control={<Checkbox checked={decennale} onChange={handleChange} name="decennale" />}label="Decennale"/>
                        <FormControlLabel control={<Checkbox checked={autre} onChange={handleChange} name="autre" />}label="Autres"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </ProfessionellegarantieCheckContainer>
    );
}

export default ProfessionelleGarantieCheck;