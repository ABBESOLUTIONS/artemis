import React from 'react';
import SectionStyle from '../../styles/SectionStyle';
import { Box, Button, Card, Container, FormControl, Grid, Input, InputLabel, Stack, styled, TextField, Typography, OutlinedInput, FormControlLabel, Checkbox, FormGroup, TextareaAutosize } from '@mui/material';
import TextButton from '../../components/TextButton';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';
// import  {nodemailer} from "nodemailer/lib";:

// import nodemailer from 'nodemailer';
// @ts-ignore
import * as nodemailer from "nodemailer";
// import { render } from '@react-email/render';
// import EmailEx from '../../components/EmailEx';


 const SinistreFormContainer=styled("section")(({theme})=>({
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


function SinistreForm() {

    // const MyEmail = render(<EmailEx/>, {plainText:true})
    // const transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     port: 587,
    //     host:"smtp.ethereal.email",
    //     auth : {
    //         user:'hervekaohk@gmail.com',
    //         pass:"developpeurFULLSTACK98"
    //     }
    // })

    // const mailOptions = {
    //     from: 'hervekaohk@gmail.com',
    //     to: 'achhmorning@gmail.com',
    //     subject: 'Test',
    //     html: MyEmail,
    //   };

    //   const validate = () => {
    //     transporter.sendMail(mailOptions).then(()=> {
    //         console.log("marche");
            
    //     })
    //   }
    return (
        <SinistreFormContainer>
                <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Nous envoyer un message</Typography>
                <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Veuillez renseigner le formulaire</Typography>
                <BoxStyle component={"form"} >
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
            </BoxStyle>
            <Button startIcon={<ArrowForwardIos/>} sx={{color:"white", backgroundColor:"#138F82", padding:"10px", '&:hover':{backgroundColor:"#213438"}}}> Envoyer </Button>
        </SinistreFormContainer>
    );
}

export default SinistreForm;