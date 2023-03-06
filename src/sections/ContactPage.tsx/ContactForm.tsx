import React from 'react';
import { Box, Button, Card, Container, FormControl, Grid, Input, InputLabel, Stack, styled, TextField, Typography, OutlinedInput, FormControlLabel, Checkbox, TextareaAutosize } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';

const ContactElementsContainer=styled(SectionStyle)(()=>({
    minHeight:"600px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));
const CommentArea=styled(TextareaAutosize)(({theme})=>({
    minHeight:"100px",
    maxWidth:"850px",
    border:"solid 0.5px",
    borderColor:"#919191",
    borderRadius:"5px",
    [theme.breakpoints.down("lg")]: {
        maxWidth:"850px"
    },
    [theme.breakpoints.down("md")]: {
        maxWidth:"850px"
    },
   
}));

function ContactForm() {
    return (
        <ContactElementsContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Nous envoyer un message</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>Veuillez renseigner le formulaire</Typography>
            <Box component={"form"} sx={{'& .MuiTextField-root': { m:2, width: '50ch' },}}>
                <div>
                    <TextField required id="outlined-required" label="Nom" defaultValue=""/>
                    <TextField required id="outlined-disabled" label="Email" defaultValue=""/>
                </div>
                <div>
                    <TextField required id="outlined-required" label="N° de Télephone" defaultValue=""/>
                    <TextField required id="outlined-disabled" label="Sujet" defaultValue="Sujet"/>
                </div>
                <div>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                {/* <TextField required id="outlined-disabled" label="Sujet" defaultValue="Sujet" multiline rows={6}/> */}
                        <CommentArea placeholder="Comment pouvons vous vous aider?"/>
                {/* <TextField variant="standard" label={"Comment pouvons nous vous aidé"} /> */}
                {/* <TextField variant="outlined" label={"Comment pouvons nous vous aidé"} fullWidth  multiline rows={6} /> */}
                    <Typography sx={{margin:"10px"}}>
                            Selectionner tous vos documents à envoyer
                     </Typography>
                    <OutlinedInput type='file' id="upload"></OutlinedInput>
            <FormControlLabel value="end" control={<Checkbox />} label="J'accepte les termes et conditions" labelPlacement="end"/>
            </FormControl>
                </div>
            </Box>
                <Button startIcon={<ArrowForwardIos/>} sx={{color:"white", backgroundColor:"#138F82", padding:"18px"}}> Envoyer </Button>
        </ContactElementsContainer>
    );
}

export default ContactForm;