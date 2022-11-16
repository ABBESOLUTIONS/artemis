import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, styled } from '@mui/material';

const   AutoMotoPaiementCheckContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
}))

function AutoMotoPaiementCheck() {
    const [state, setState] = React.useState({
        prelevement: false,
        cheque: false,
        cb: false,
        virement: false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      const { prelevement, cheque, cb, virement } = state;
    return (
        <AutoMotoPaiementCheckContainer>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Modes de Paiement possible</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={prelevement} onChange={handleChange} name="prelevement" />} label="Prélèvement"/>
                        <FormControlLabel control={<Checkbox checked={cheque} onChange={handleChange} name="cheque" />} label="Chèque"/>
                        <FormControlLabel control={<Checkbox checked={cb} onChange={handleChange} name="cb" />}label="CB"/>
                        <FormControlLabel control={<Checkbox checked={virement} onChange={handleChange} name="virement" />}label="Virement"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        </AutoMotoPaiementCheckContainer>
    );
}

export default AutoMotoPaiementCheck;