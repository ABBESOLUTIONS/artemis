import React from 'react';
import SectionStyle from '../../styles/SectionStyle';
import { Box, Button, Card, Container, FormControl, Grid, Input, InputLabel, Stack, styled, TextField, Typography, OutlinedInput, FormControlLabel, Checkbox, FormGroup, TextareaAutosize } from '@mui/material';
import TextButton from '../../components/TextButton';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';


 const SinistreFormContainer=styled(SectionStyle)(()=>({
    minHeight:"600px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));
const CommentArea=styled(TextareaAutosize)(({theme})=>({
    minHeight:"100px",
    maxWidth:"850px",
    [theme.breakpoints.down("lg")]: {
        maxWidth:"450px"
    },
    [theme.breakpoints.down("md")]: {
        maxWidth:"400px"
    },
}))

function SinistreForm() {
    return (
        <SinistreFormContainer>
                <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Nous envoyer un message</Typography>
                <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>Veuillez renseigner le formulaire</Typography>
                <Box component={"form"} sx={{'& .MuiTextField-root': { m:2, width: '50ch' },}}>
                    <div>
                    <TextField required id="outlined-required" label="Nom" defaultValue=""/>
                    <TextField required id="outlined-disabled" label="Prénom (s)" defaultValue=""/>
                    </div>
                    <div>
                    <TextField required id="outlined-disabled" label="Email" defaultValue=""/>
                    <TextField required id="outlined-required" label="N° de Télephone" defaultValue=""/>
                    </div>
                    <div>
                    <TextField required id="outlined-required" label="Numéro Contrat" defaultValue=""/>
                    <TextField required id="outlined-disabled" label="Sujet" defaultValue=""/>
                    </div>
                    <div>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <CommentArea placeholder="Votre message"/>
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