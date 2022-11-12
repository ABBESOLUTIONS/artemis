import React from 'react';
import { Card, styled, Typography, Button, Stack} from '@mui/material';
import FooterItems from './Footer/FooterItems';
import TextButton from './TextButton';


const ServiceOverviewCardStyle=styled(Card)(()=>({
    width:"465px",
    height:"450px",
    display:"flex",
    boxShadow:"none",
    // padding:"10px"

}));
const ServiceOverviewImgStyle=styled("img")(()=>({
    width:"100%",
    height:"100%",
    // padding:"10px"
}));
const ServiceOverviewTextStyle=styled("div")(()=>({
    width:"415px",
    height:"115px",
    backgroundColor:"#389B91",
    position:"absolute",
    borderRadius:"5px",
    marginTop:"310px",
    marginLeft:"20px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
}));


function ServiceOverviewCard() {
    return (
        <ServiceOverviewCardStyle>
            <ServiceOverviewImgStyle src="assets/images/assuranceVie.jpg"/>
            <ServiceOverviewTextStyle>
                <Stack direction={"row"} spacing={2} sx={{marginLeft:"20px", color:"#DEEFED"}}>
                    <Typography> ASSURANCE    •</Typography>
                    <Typography>VIE</Typography>
                </Stack>
                <TextButton title={"Savoir plus..."} path={''} sx={{fontWeight:"bold", fontSize:"25px", color:"white", marginLeft:"20px"}}/>
            </ServiceOverviewTextStyle>
        </ServiceOverviewCardStyle>
    );
}

export default ServiceOverviewCard;