import { Box, Grid, styled, TextField } from '@mui/material';
import React from 'react';
import SectionStyle from '../../styles/SectionStyle';

const ProfessionelleFormContainer=styled(SectionStyle)(()=>({
    maxHeight:"2000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function ProfessionelleForm() {
    return (
        <ProfessionelleFormContainer>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 4, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={8} md={8}>
                            <TextField required id="outlined-required" label="Adresse" defaultValue="" variant="outlined"/>
                            <TextField required id="outlined-required" label="Adresse" defaultValue="" variant="outlined"/>
                            <TextField required id="outlined-required" label="Adresse" defaultValue="" variant="outlined"/>
                            <TextField required id="outlined-required" label="Adresse" defaultValue="" variant="outlined"/>
                    </Grid>
                </Grid>
            </Box>
        </ProfessionelleFormContainer>
    );
}

export default ProfessionelleForm;