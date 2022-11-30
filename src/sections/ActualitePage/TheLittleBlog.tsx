import { styled } from '@mui/material';
import React from 'react';
import SectionStyle from '../../styles/SectionStyle';
import LittleBlogTextContainer from './LittleBlogTextContainer';

const TheBlogSectionStyle=styled(SectionStyle)(()=>({
    width:"calc(100% - 20px)",
    height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

export const FirstSectionStyle=styled("div")(({theme})=>({
    width:"75%",
    // height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red",
    [theme.breakpoints.down("md")] : {
        width:"95%"
    }
}));

function TheLittleBlog() {
    return (
        <TheBlogSectionStyle>
            <FirstSectionStyle>
                <LittleBlogTextContainer/>
            </FirstSectionStyle>
        </TheBlogSectionStyle>
    );
}

export default TheLittleBlog;