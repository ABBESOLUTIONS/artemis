import { Card, styled } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';

const RedirectionSectionStyle = styled("section")(()=>({
    // width:"400px",
    minHeight:"100vh",
    backgroundColor:PROJECT_COLORS.primarySwatch,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}))

function RedirectionSection() {
    return (
        <RedirectionSectionStyle>
            
        </RedirectionSectionStyle>
    );
}

export default RedirectionSection;