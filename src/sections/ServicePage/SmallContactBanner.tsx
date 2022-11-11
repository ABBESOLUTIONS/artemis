import React from 'react';
import { Button, Container, Grid, Stack, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { PROJECT_COLORS } from '../../common/colors';
import ImageComponent from '../../components/ImageComponent';

const SmallContactBannerStyle=styled(SectionStyle)(()=>({
    height:"300px",
    backgroundColor:"#497774",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",

}))

function SmallContactBanner() {
    return (
        <SmallContactBannerStyle>
            <Typography sx={{fontWeight:"bold", color:"white"}}>Prêt.e à nous rejoindre ?</Typography>
            <Stack direction={"row"} sx={{margin:"15px"}}>
                <Button variant="contained" sx={{bgcolor:PROJECT_COLORS.primarySwatch, fontSize:13, padding:"15px",margin:"15px" }}>Nous joindre</Button>
                <Button variant="outlined" sx={{color:"white", borderColor:"white", fontSize:13, padding:"15px",margin:"15px"}}>Demander un devis</Button>
            </Stack>
            <ImageComponent image={"assets/images/ellipseWhite.png"} sx={{position:"absolute",marginLeft:"450px",}}/>
            <ImageComponent image={"assets/images/Leaf+daught.png"} sx={{position:"absolute", marginLeft:"-450px", marginTop:"70px"}}/>
        </SmallContactBannerStyle>
    );
}

export default SmallContactBanner;