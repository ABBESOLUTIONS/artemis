import React from 'react';
import { Box, Button, Card, Container, FormControl, Grid, Input, InputLabel, Stack, styled, TextField, Typography, OutlinedInput, FormControlLabel, Checkbox, TextareaAutosize, FormHelperText, withStyles } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';
import { CheckText } from '../SinistrePage/SinistreForm';
import { CLIENT_PAGES } from '../../routes/paths';

export const ContactElementsContainer=styled("section")(({theme})=>({
    width:"calc(100% - 40vw)",
    padding:"65px 20vw 75px 20vw",
    minHeight:"600px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("lg")]: {
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

// const CustomOutlinedInput = withStyles(() => ({
//     root: {
//       '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//         borderColor: 'red', // Couleur des bordures au survol
//       },
//       '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//         borderColor: 'green', // Couleur des bordures au clic (focus)
//       },
//     },
//   }))(OutlinedInput);

const FileFieldStyle=styled(OutlinedInput)(({theme})=>({
    ":root":{
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red', // Couleur des bordures au survol
          },
    }
    //   '& .MuiInputLabel-root.Mui-focused': {
    //     color: 'green', // Remplacez "your-focus-color" par votre couleur personnalisée après le clic/focus
    //   },
   
}));

function ContactForm() {
    return (
        <ContactElementsContainer>
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
                    {/* <Grid item md={6} xs={12} sx={{display:"flex", flexDirection:"row"}}>
                        <TextField required id="outlined-required" label="N° de Télephone" defaultValue=""/>
                    </Grid> */}
                </Grid>
                <div>
                    <FormControl fullWidth sx={{  }} variant="standard">
                    <Typography sx={{margin:"10px"}}>
                            Selectionner tous vos documents à envoyer
                     </Typography>
                    <FileFieldStyle type='file' id="upload" inputProps={{accept:".pdf, .png, .jpg, .docx", multiple:true}} ></FileFieldStyle>
                    <FormHelperText>Type de fichier recquis: .pdf, .jpeg, .png, .docx</FormHelperText>
                    <FormControlLabel value="end" control={<Checkbox />} label={<CheckText>J'accepte les<span><a href={CLIENT_PAGES.home} style={{color:PROJECT_COLORS.primarySwatch, textDecoration:"none", fontWeight:"bold"}}> termes et conditions</a></span></CheckText>} labelPlacement="end"/>
            </FormControl>
                </div>
            </BoxStyle>
                <Button startIcon={<ArrowForwardIos/>} sx={{color:"white", backgroundColor:"#138F82", padding:"10px", '&:hover':{backgroundColor:"#213438"}}}> Envoyer </Button>
        </ContactElementsContainer>
    );
}

export default ContactForm;