import { styled } from '@mui/material';
import React from 'react';
import ConfidentialiteText from '../../components/ConfidentialiteText';

const ConfidentialiteSectionStyle=styled("section")(({theme})=>({
    width:"calc(100% - 40vw)",
    padding:"75px 20vw 20px 20vw",
    minHeight:"25vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"yellow",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 20px 2vw",
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        
    },
}));

function ConfidentialiteSection() {
    return (
        <ConfidentialiteSectionStyle>
            <ConfidentialiteText/>
        </ConfidentialiteSectionStyle>
    );
}

export default ConfidentialiteSection;