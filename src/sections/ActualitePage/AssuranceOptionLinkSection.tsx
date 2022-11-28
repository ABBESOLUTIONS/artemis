import { Grid, styled } from '@mui/material';
import React from 'react';
import AssuranceOptionButton from '../../components/AssuranceOptionButton';
import SocialMediaButton from '../../components/SocialMediaButton';
import SocialMediaList from '../../components/SocialMediaList';
import SectionStyle from '../../styles/SectionStyle';
import { FirstSectionStyle } from './ImageSection';

const AssuranceOptionStyle=styled(SectionStyle)(()=>({
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
const ButtonSection=styled("div")(({theme})=>({
    width:"100%",
    // height:"1000px",
    display:"flex",
    flexDirection:"row",
    // alignItems:"center",
    justifyContent:"space-between",
    // backgroundColor:"red",
    [theme.breakpoints.down("md")] : {
        flexDirection:"column"
    }
}));
const OnlyButton=styled("div")(({theme})=>({
    // width:"100%",
    // height:"1000px",
    display:"flex",
    flexDirection:"row",
    // alignItems:"center",
    // justifyContent:"space-between",
    // backgroundColor:"red",
    [theme.breakpoints.down("sm")] : {
        flexDirection:"column"
    }
}));

function AssuranceOptionLinkSection() {
    return (
        <AssuranceOptionStyle>
            <ThisSection>
                <ButtonSection>
                    <OnlyButton>
                    <AssuranceOptionButton text={"ASSURANCE"} path={''}/>
                    <AssuranceOptionButton text={"VIE PROFESSIONELLE"} path={''}/>
                    <AssuranceOptionButton text={"VOYAGE"} path={''}/>
                    </OnlyButton>
                    <SocialMediaList/>
                </ButtonSection>
                {/* <Grid container>
                    <Grid item xs={2} sm={6}>
                        <AssuranceOptionButton text={"ASSURANCE"} path={''}/>
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <AssuranceOptionButton text={"VIE PROFESSIONELLE"} path={''}/>
                    </Grid>
                    <Grid item xs={2}>
                        <AssuranceOptionButton text={"VOYAGE"} path={''}/>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={2}>
                        <SocialMediaList/>
                    </Grid>
                </Grid> */}
            </ThisSection>
        </AssuranceOptionStyle>
    );
}

export default AssuranceOptionLinkSection;