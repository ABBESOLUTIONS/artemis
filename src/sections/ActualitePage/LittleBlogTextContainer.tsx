import { Stack, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';

const LittleBlogTextContainerStyle=styled("div")(({theme})=>({
    width:"60%",
    minHeight:"175px",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F4F4F4",
    borderRadius:"5px",
    padding:"15px",
    [theme.breakpoints.down("md")] : {
        flexDirection:"column",
        width:"95%"
    }
}));

function LittleBlogTextContainer() {
    return (
        <LittleBlogTextContainerStyle>
            <ImageComponent image={"assets/images/doubleQuotes.png"}/>
            <Stack direction={"column"} sx={{margin:"20px"}}>
                <Typography sx={{color:"#616161", fontSize:"1em"}}>
                    Lorem ipsum dolor sit amet, sectetur adipiscing elit. Quis placrat arcu amet rem ipsum dolor sit amecon. Lacerat arcu is a rem ipsum dolor. Lorem ipsum dolor sit amet, sectetur adipiscing elit. Quis placerat arcu amet rem ipsum dolor sit amecon.
                </Typography>
                <Typography sx={{fontWeight:"bold", fontSize:"20px"}}>
                    Manika Selven
                </Typography>
            </Stack>
            
        </LittleBlogTextContainerStyle>
    );
}

export default LittleBlogTextContainer;