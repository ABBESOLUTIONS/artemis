import Send from '@mui/icons-material/Send';
import { Button, Stack, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';

const AbonnementBannerContainer=styled(SectionStyle)(({theme})=>({
    // minWidth:"100%",
    height:"400px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.up("md")]: {
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
        width:"400px",
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
        width:"400px",
        textAlign:"center",

    },
}));
const LeafDaught=styled("img")(({theme})=>({
    position:"absolute", 
    marginLeft:"450px",
    [theme.breakpoints.down("md")]: {
        display:"none",
    },
}));
const DaughtGroup=styled("img")(({theme})=>({
    position:"absolute", 
    marginLeft:"-450px",
    [theme.breakpoints.down("md")]: {
        display:"none",
    },
}));

function AbonnementBanner() {
    return (
        <AbonnementBannerContainer>
            <FirstTitle>S'abonner à nos news</FirstTitle>
            <SecondTitle>Restez informé de nos dernières infos</SecondTitle>
            <TheSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus..</TheSubTitle>
            <Typography sx={{color:"#138F82", }}></Typography>
            <Stack direction={"row"} sx={{margin:"25px"}}>
                <TextField/>
                <Button variant='contained' startIcon={<Send/>} sx={{backgroundColor:"#138F82", '&:hover':{backgroundColor:"black"}}}>S'abonner</Button>
            </Stack>
            <DaughtGroup src="assets/images/DaughtGroup2.png"/>
            <LeafDaught src="assets/images/Leaf+Daught.png"/>
        </AbonnementBannerContainer>
    );
}

export default AbonnementBanner;