import { Stack, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from './ImageComponent';

const LittleBlogTextContainerStyle=styled("div")(()=>({
    width:"60%",
    height:"175px",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F4F4F4",
    borderRadius:"5px",
    padding:"15px"
}));

function LittleBlogTextContainer() {
    return (
        <LittleBlogTextContainerStyle>
            <ImageComponent image={"assets/images/doubleQuotes.png"}/>
            <Stack direction={"column"} sx={{margin:"20px"}}>
                <Typography sx={{color:"#616161"}}>
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