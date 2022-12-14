import React from 'react';
import { styled, SxProps, Typography,Container,Grid} from '@mui/material';
import { PROJECT_COLORS } from '../../common/colors';
import ExperienceButton from '../../components/ExperienceButton';
import AboutImage from '../../components/AboutImage';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';


const ExperienceContainer=styled(SectionStyle)(({theme})=>({
    width:"calc(100% - 50px)",
    // height:"575px",
    backgroundColor:"#F8F8F8",
    display:"flex",
    flexDirection:"row",
    // padding:"25px",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
    width:"calc(100% - 20px)",

    },
}));

const ExperienceContainerLeft=styled("div")(({theme})=>({
    position:"relative",
    width:"50%",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column"
        width:"100%"

    },
}));
const ExperienceContainerRight=styled("div")(({theme})=>({
    width:"50%",
    display:"flex",
    flexDirection:"column",
    // justifyContent:"space-around"
    [theme.breakpoints.down("md")]: {
        width:"75%"
    },
}));
const ExperienceImg=styled("img")(({theme})=>({
    // position:"absolute",
    width:"575px",
    [theme.breakpoints.down("lg")]: {

        width:"100%"
    },
}));
const LeafImage=styled("img")(({theme})=>({
    position:"absolute",
    // marginLeft:"175px",
    left:"250px",
    marginTop:"-25px",
    [theme.breakpoints.down("lg")]: {
display:"none"    },
}));
const SubtitleExp =styled(Typography)(({theme})=>({
    textAlign:"start", 
    fontWeight:"bold", 
    fontSize:"45px", 
    marginBottom:"50px",

    [theme.breakpoints.down("lg")]: {
        fontSize:"2em", 
    },
}));

function Experience() {
    return (
        <ExperienceContainer>
            <ExperienceContainerLeft>
                <ExperienceImg src="assets/images/choose-us-img.jpg"/>
                <LeafImage src="assets/images/leaf2.png"/>
            </ExperienceContainerLeft>
            <ExperienceContainerRight>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>POURQUOI NOUS CHOISIR</Typography>
                <SubtitleExp variant='h3' >30 ann??es d'exp??rience que nous mettons ?? votre service</SubtitleExp>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'15px', color:"#616179", marginBottom:"50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus. Id nisl quis arcu nulla leo.</Typography>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item md={12} lg={6}>
                             <ExperienceButton text={'VEHICULE'}/>
                        </Grid>
                        <Grid item md={12} lg={6}>
                             <ExperienceButton text={'GAGNER EN TEMPS'}/>
                        </Grid>
                        <Grid item md={12} lg={6}>
                             <ExperienceButton text={'HABITATION'}/>
                        </Grid>
                        <Grid item md={12} lg={6}>
                             <ExperienceButton text={'ECONOMISER'}/>
                        </Grid>
                        <Grid item md={12} lg={6}>
                             <ExperienceButton text={'CONSULTATION'}/>
                        </Grid>
                        <Grid item md={12} lg={6}>
                             <ExperienceButton text={'VIVEZ MIEUX'}/>
                        </Grid>
                    </Grid>
                </Container>
            </ExperienceContainerRight>
        </ExperienceContainer>
    );
}

export default Experience;