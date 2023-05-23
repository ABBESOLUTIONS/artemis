import React from 'react';
import SectionStyle from '../../styles/SectionStyle';
import { Box, Button, Card, Container, FormControl, Grid, Input, InputLabel, Stack, styled, TextField, Typography, OutlinedInput, FormControlLabel, Checkbox, FormGroup, TextareaAutosize } from '@mui/material';
import TextButton from '../../components/TextButton';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';


 const SinistreFormContainer=styled("section")(({theme})=>({
    width:"calc(100% - 30vw)",
    padding:"75px 15vw 75px 15vw",
    minHeight:"600px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        
    },
}));


function SinistreForm() {
    return (
        <SinistreFormContainer>
                <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Nous envoyer un message</Typography>
                <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>Veuillez renseigner le formulaire</Typography>
                <Box component={"form"} sx={{ width:"75%"}}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}} >
                        <TextField required id="outlined-required" label="Nom" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        <TextField required id="outlined-disabled" label="Prénom" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        {/* <TextField name="email"  variant="outlined" label={"Your Email"} type="email" fullWidth /> */}
                        <TextField required id="outlined-disabled" label="Email" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        {/* <TextField name="email"  variant="outlined" label={"Your Email"} type="email" fullWidth /> */}
                        <TextField required id="outlined-disabled" label="Téléphone" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="message"  variant="outlined" label={"Sujet"} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="message"  variant="outlined" label={"Votre déclaration circontancié"} fullWidth  multiline rows={6} />
                    </Grid>
                    {/* <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        <TextField required id="outlined-required" label="N° de Télephone" defaultValue=""/>
                    </Grid> */}
                </Grid>
                    <div>
                    <FormControl fullWidth sx={{ }} variant="standard">
                        {/* <CommentArea placeholder="Votre message"/> */}
                        <Typography sx={{margin:"10px"}}>Selectionner tous vos documents à envoyer</Typography>
                        <OutlinedInput type='file' id="upload"></OutlinedInput>
                        <FormControlLabel value="end" control={<Checkbox />} label={<TextButton title={"J'accepte les termes et conditions"} path={''}></TextButton>} labelPlacement="end"/>
            </FormControl>
                </div>
            </Box>
                <Button startIcon={<ArrowForwardIos/>} sx={{color:"white", backgroundColor:"#138F82", padding:"18px"}}> Envoyer </Button>
        </SinistreFormContainer>
    );
}

export default SinistreForm;