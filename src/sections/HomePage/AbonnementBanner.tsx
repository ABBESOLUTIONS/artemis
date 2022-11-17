import Send from '@mui/icons-material/Send';
import { Button, Stack, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';

const AbonnementBannerContainer=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"400px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function AbonnementBanner() {
    return (
        <AbonnementBannerContainer>
            <Typography sx={{color:"#138F82", }}>S'abonner à nos news</Typography>
            <Typography sx={{fontWeight:"bold", fontSize:"38px", width:"600px", textAlign:"center"}}>Restez informé de nos dernières infos</Typography>
            <Typography sx={{color:"#61617A",fontSize:"16px", width:"600px", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus..</Typography>
            <Stack direction={"row"} sx={{margin:"25px"}}>
                <TextField/>
                <Button variant='contained' startIcon={<Send/>} sx={{backgroundColor:"#138F82", '&:hover':{backgroundColor:"black"}}}>S'abonner</Button>
            </Stack>
            <ImageComponent image={"assets/images/DaughtGroup2.png"} sx={{position:"absolute", marginLeft:"-450px"}} />
            <ImageComponent image={"assets/images/Leaf+Daught.png"} sx={{position:"absolute", marginLeft:"450px"}}/>
        </AbonnementBannerContainer>
    );
}

export default AbonnementBanner;