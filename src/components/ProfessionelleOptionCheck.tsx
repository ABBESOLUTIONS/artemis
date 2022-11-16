import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   ProfessionelleOptionCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function ProfessionelleOptionCheck() {
    const [state, setState] = React.useState({
        indenmnite: false,
        garantieHomme: false,
        perte: false,
        mandat: false,
        autre: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { indenmnite, garantieHomme, perte, mandat,autre } = state;
    return (
        <ProfessionelleOptionCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Options:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={indenmnite} onChange={handleChange} name="indenmnite" />} label="Indemnités Journalières"/>
                        <FormControlLabel control={<Checkbox checked={garantieHomme} onChange={handleChange} name="garantieHomme" />} label=" Garantie Homme Clef"/>
                        <FormControlLabel control={<Checkbox checked={perte} onChange={handleChange} name="perte" />}label="Perte d ’Exploitation"/>
                        <FormControlLabel control={<Checkbox checked={mandat} onChange={handleChange} name="mandat" />}label="RC Mandat. Social"/>
                        <FormControlLabel control={<Checkbox checked={autre} onChange={handleChange} name="autre" />}label="Autres, préciser"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </ProfessionelleOptionCheckContainer>
    );
}

export default ProfessionelleOptionCheck;