import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, OutlinedInput, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import { ArrowForwardIos } from '@mui/icons-material';

const DeclarationFormContainer=styled("section")(({theme})=>({
    width:"calc(100% - 40vw)",
    padding:"75px 20vw 75px 20vw",
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

const BoxStyle=styled(Box)(({theme})=>({
    width:"65%",
    [theme.breakpoints.down("lg")]: {
    },
    [theme.breakpoints.down("md")]: {
        width:"90%"
    },
   
}));

function DeclarationForm() {
    return (
        <DeclarationFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Nous envoyer un message</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Veuillez renseigner le formulaire</Typography>
            <BoxStyle component={"form"} sx={{ width:"65%"}}>
            <Grid container spacing={3}>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}} >
                        {/* <TextField name="lastName"  variant="outlined" label={"FullName"} type="text" fullWidth sx={{color:"white"}}/> */}
                        <TextField required id="outlined-required" label="Nom" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        {/* <TextField name="email"  variant="outlined" label={"Your Email"} type="email" fullWidth /> */}
                        <TextField required id="outlined-disabled" label="Email" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        {/* <TextField name="email"  variant="outlined" label={"Your Email"} type="email" fullWidth /> */}
                        <TextField required id="outlined-disabled" label="Téléphone" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        {/* <TextField name="email"  variant="outlined" label={"Your Email"} type="email" fullWidth /> */}
                        <TextField required id="outlined-disabled" label="Sujet" defaultValue="" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="message"  variant="outlined" label={"Votre déclaration circontancié"} fullWidth  multiline rows={6} />
                    </Grid>
                </Grid>
                    <div>
                    <FormControl fullWidth sx={{  }} variant="standard">
                {/* <TextField required id="outlined-disabled" label="Sujet" defaultValue="Sujet" multiline rows={6}/> */}
                        {/* <CommentArea placeholder="Comment pouvons vous vous aider?"/> */}
                {/* <TextField variant="standard" label={"Comment pouvons nous vous aidé"} /> */}
                {/* <TextField variant="outlined" label={"Comment pouvons nous vous aidé"} fullWidth  multiline rows={6} /> */}
                    <Typography sx={{margin:"10px"}}>
                            Selectionner tous vos documents à envoyer
                     </Typography>
                     <OutlinedInput type='file' id="upload"></OutlinedInput>
            <FormControlLabel value="end" control={<Checkbox />} label="J'accepte les termes et conditions" labelPlacement="end"/>
            </FormControl>
                </div>
            </BoxStyle>
            <Button startIcon={<ArrowForwardIos/>} sx={{color:"white", backgroundColor:"#138F82", padding:"10px", '&:hover':{backgroundColor:"#213438"}}}> Envoyer </Button>
        </DeclarationFormContainer>
    );
}

export default DeclarationForm;