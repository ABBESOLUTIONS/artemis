import Send from '@mui/icons-material/Send';
import { Button, Stack, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import { CLIENT_PAGES } from '../../routes/paths';
import SectionStyle from '../../styles/SectionStyle';

const AbonnementBannerContainer=styled(SectionStyle)(({theme})=>({
    // minWidth:"100%",
    height:"400px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"blue",
    [theme.breakpoints.down("lg")]: {
        width:"calc(100% - 20px)",
        // minWidth:"100%"
    },
}));
const FirstTitle=styled(Typography)(({theme})=>({
    color:"#138F82",
    [theme.breakpoints.down("md")]: {

    },
}));
const SecondTitle=styled(Typography)(({theme})=>({
    fontWeight:"bold", 
    fontSize:"38px", 
    width:"600px", 
    textAlign:"center",
    [theme.breakpoints.down("md")]: {
        fontWeight:500,
        fontSize:"28px",
        width:"300px",
        textAlign:"center",

    },
}));
const TheSubTitle=styled(Typography)(({theme})=>({
    color:"#61617A",
    fontSize:"16px", 
    width:"600px", 
    textAlign:"center",
    [theme.breakpoints.down("md")]: {
        fontSize:"12px",
        width:"75%",
        textAlign:"center",

    },
}));
const LeafDaught=styled("img")(({theme})=>({
    position:"absolute", 
    marginLeft:"450px",
    [theme.breakpoints.down("lg")]: {
        display:"none",
    },
}));
const DaughtGroup=styled("img")(({theme})=>({
    position:"absolute", 
    marginLeft:"-450px",
    [theme.breakpoints.down("lg")]: {
        display:"none",
    },
}));
const FieldButton=styled(Stack)(({theme})=>({
    margin:"25px",
    [theme.breakpoints.down("md")]: {
    margintop:"10px",
    width:"85%",
    justifyContent:"center",
    // backgroundColor:"red",
        
    },
}));

function AbonnementBanner() {
    return (
        <AbonnementBannerContainer>
            <FirstTitle>S'abonner à nos news</FirstTitle>
            <SecondTitle>Restez informé de nos dernières infos</SecondTitle>
            {/* <TheSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus..</TheSubTitle> */}
            <Typography sx={{color:"#138F82", }}></Typography>
            <FieldButton direction={"row"} sx={{}}>
                <TextField/>
                <Button variant='contained'  startIcon={<Send/>} sx={{backgroundColor:"#138F82", '&:hover':{backgroundColor:"black"}}}>S'abonner</Button>
                {/* <Button variant='contained' href={CLIENT_PAGES.authentification} startIcon={<Send/>} sx={{backgroundColor:"#138F82", '&:hover':{backgroundColor:"black"}}}>S'abonner</Button> */}
            </FieldButton>
            <DaughtGroup src="assets/images/DaughtGroup2.png"/>
            <LeafDaught src="assets/images/Leaf+Daught.png"/>
        </AbonnementBannerContainer>
    );
}

export default AbonnementBanner;