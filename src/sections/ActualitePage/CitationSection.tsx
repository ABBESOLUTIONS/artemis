import { Grid, styled } from '@mui/material';
import React from 'react';
import CitationComponent from '../../components/CitationComponent';
import SectionStyle from '../../styles/SectionStyle';
import { FirstSectionStyle } from './ImageSection';

const CitationSectionStyle=styled(SectionStyle)(()=>({
    width:"calc(100% - 20px)",
    // height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

const ThisSection=styled("div")(({theme})=>({
    width:"75%",
    // height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red",
    [theme.breakpoints.down("md")] : {
        flexDirection:"column"
    }
}));

function CitationSection() {
    return (
        <CitationSectionStyle>
            <FirstSectionStyle>
                <Grid container xs spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <CitationComponent text={"lorem ipsum dolor admet sonchrus"}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CitationComponent text={"lorem ipsum dolor admet sonchrus"}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CitationComponent text={"lorem ipsum dolor admet sonchrus"}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CitationComponent text={"lorem ipsum dolor admet sonchrus"}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CitationComponent text={"lorem ipsum dolor admet sonchrus"}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CitationComponent text={"lorem ipsum dolor admet sonchrus"}/>
                    </Grid>
                     
                </Grid>
            </FirstSectionStyle>
        </CitationSectionStyle>
    );
}

export default CitationSection;