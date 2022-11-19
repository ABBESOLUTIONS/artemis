import React from 'react';
import SectionStyle from '../../styles/SectionStyle';
import { Box, Button, Card, Container, FormControl, Grid, Input, InputLabel, Stack, styled, TextField, Typography, OutlinedInput, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import TextButton from '../../components/TextButton';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';


const SinistreFormContainer=styled(SectionStyle)(()=>({
    // height:"900px",
    display:"flex",
    flexDirection:"column",
    aligneItems:"center",
    jsutifyContent:"center",
}))

function SinistreForm() {
    return (
        <SinistreFormContainer>
                <Container>
                    <Grid container xs sx={{padding:"75px"}}>
                        <Grid item xs={24} md={12} sx={{display:"flex", flexDirection:"row", '& .MuiTextField-root': { m: 2, width: '61ch' },}}>
                            <TextField variant="outlined" label={"Nom"}/>
                            <TextField variant="outlined" label={"Prénoms"}/>
                        </Grid>
                        <Grid item xs={24} md={12} sx={{display:"flex", flexDirection:"row", '& .MuiTextField-root': { m: 2, width: '61ch' },}}>
                            <TextField variant="outlined" label={"Télephone"}/>
                            <TextField variant="outlined" label={"Email"}/>
                        </Grid>
                        <Grid item xs={24} md={12} sx={{'& .MuiTextField-root': { m: 2, },}}>
                            <TextField variant="outlined" label={"Nom de société"} fullWidth />
                        </Grid>
                        <Grid item xs={24} md={12} sx={{'& .MuiTextField-root': { m: 2, },}}>
                            <TextField variant="outlined" label={"Comment pouvons nous vous aidé"} fullWidth  multiline rows={6} />
                        </Grid>
                        <Typography sx={{margin:"10px"}}>Selectionner tous vos documents à envoyer</Typography>
                        <Grid item xs={24} sx={{'& .MuiTextField-root': { m: 2, },}}>
                        <OutlinedInput type='file'fullWidth id="upload" sx={{margin:"10px"}}></OutlinedInput>
                        </Grid>
                        <FormGroup>
                            <Stack direction={"row"}>
                                <Checkbox  />
                                <Typography component={"span"}> J'accepte les </Typography>
                                <TextButton  title={" termes & conditions"} path={''}/>
                            </Stack>
                        </FormGroup>
                    <Button startIcon={<ArrowForwardIos/>}  variant="contained" sx={{width:"100px"}}>Envoyer</Button>
                    </Grid>
                </Container>
        </SinistreFormContainer>
    );
}

export default SinistreForm;