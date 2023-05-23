import React from 'react';
import { styled, SxProps, Typography,Container,Grid} from '@mui/material';
import { PROJECT_COLORS } from '../../common/colors';
import ExperienceButton from '../../components/ExperienceButton';
import AboutImage from '../../components/AboutImage';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';


const ExperienceContainer=styled("section")(({theme})=>({
    // width:"calc(100% - 50px)",
    width:"calc(100% - 30vw)",
    padding:"75px 15vw 75px 15vw",
    minHeight:"50vh",
    backgroundColor:"#F8F8F8",
    display:"flex",
    flexDirection:"row",
    // padding:"25px",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
    // width:"calc(100% - 20px)",
    width:"calc(100% - 4vw)",
    padding:"75px 2vw 75px 2vw",

    },
}));

const ExperienceContainerLeft=styled("div")(({theme})=>({
    position:"relative",
    width:"50%",
    display:"grid",
    placeItems:"center",
    // backgroundColor:"yellow",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column"
        paddingTop:"5vh",
        width:"100%"
    },
}));

const ExperienceContainerRight=styled("div")(({theme})=>({
    width:"calc(50% - 3vw)",
    display:"flex",
    padding:"0vw 0vw 0vw 3vw",
    flexDirection:"column",
    // backgroundColor:"blue",
    // justifyContent:"space-around"
    [theme.breakpoints.down("lg")]: {
        width:"85%",
        padding:"5vw 0vw 0vw 0vw",

    },
}));
const RightContent=styled("div")(({theme})=>({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    width:"100%",
    height:"100%",
    [theme.breakpoints.down("lg")]: {
        // width:"75%"
        margin:"5vh 0vh 5vh 0vh"
    },
}));
const ExperienceImg=styled("img")(({theme})=>({
    // position:"absolute",
    maxWidth:"100%",
    height:"auto",
    [theme.breakpoints.down("lg")]: {

        width:"100%"
    },
}));
const LeafImage=styled("img")(({theme})=>({
    position:"absolute",
    // marginLeft:"175px",
    left:"250px",
    // marginTop:"-125px",
    top:0,
    [theme.breakpoints.down("lg")]: {
display:"none"    },
}));
const SubtitleExp =styled(Typography)(({theme})=>({
    textAlign:"start", 
    fontWeight:"bold", 
    fontSize:"35px", 
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
                <RightContent>
                    <Typography variant="h6" sx={{textAlign:"start", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>POURQUOI NOUS CHOISIR</Typography>
                    <SubtitleExp  >30 années d'expérience que nous mettons à votre service</SubtitleExp>
                    <Typography variant="h6" sx={{textAlign:"start", fontSize:'16px', color:"#616179", marginBottom:"50px"}}>Une équipe diplômée en assurance vous accueille pour vous faire bénéficier de leurs conseils et des meilleures propositions négociées auprès des Compagnies.</Typography>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item md={6} sm={6} xs={12} lg={6} >
                                <ExperienceButton text={'ECONOMIES'}/>
                            </Grid>
                            <Grid item md={6} sm={6} xs={12} lg={6} >
                                <ExperienceButton text={'PROXIMITE'}/>
                            </Grid>
                            <Grid item md={6} sm={6} xs={12} lg={6} >
                                <ExperienceButton text={'CONSEILS'}/>
                            </Grid>
                            <Grid item md={6} sm={6} xs={12} lg={6} >
                                <ExperienceButton text={'ACCOMPAGNEMENTS'}/>
                            </Grid>
                            {/* <Grid item md={12} lg={6}>
                                <ExperienceButton text={'CONSULTATION'}/>
                            </Grid>
                            <Grid item md={12} lg={6}>
                                <ExperienceButton text={'VIVEZ MIEUX'}/>
                            </Grid> */}
                        </Grid>
                    </Container>

                </RightContent>
            </ExperienceContainerRight>
        </ExperienceContainer>
    );
}

export default Experience;