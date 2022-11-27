import { Card, Rating, styled, Typography } from '@mui/material';
import React from 'react';
const GoogleRatingStyle=styled(Card)(({theme})=>({
    width:"250px",
    height:"125px",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    marginTop:"20px",
    [theme.breakpoints.down("lg")]: {
        width:"175px",
        // marginBottom:"-50px"
        
    },
    [theme.breakpoints.down("md")]: {
        width:"90%",
        // marginBottom:"-50px"
        
    },
    // [theme.breakpoints.down("md")]: {
    //     width:"330px",
    //     // marginBottom:"-50px"
        
    // },
}))

function GoogleRatings() {
    return (
        <GoogleRatingStyle>
            <Rating name="read-only" defaultValue={4} size="small" />
            <Typography sx={{fontWeight:"bold", fontSize:"16px"}}>Avis Google</Typography>
            <Typography sx={{fontSize:"18px"}}>Nous sommes noté 3.8/5 par +1130 clients</Typography>
        </GoogleRatingStyle>
    );
}

export default GoogleRatings;