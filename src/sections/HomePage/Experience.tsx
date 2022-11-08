import React from 'react';
import { styled, SxProps, Typography,Container,Grid} from '@mui/material';
import { PROJECT_COLORS } from '../../common/colors';
import ExperienceButton from '../../components/ExperienceButton';
import AboutImage from '../../components/AboutImage';
import ImageComponent from '../../components/ImageComponent';


const ExperienceContainer=styled("div")(()=>({
    width:"100%",
    height:"575px",
    backgroundColor:"#F8F8F8",
    display:"flex",
    flexDirection:"row",
    padding:"25px",
}));

const ExperienceContainerLeft=styled("div")(()=>({
    width:"50%",
    padding:"25px"
}));
const ExperienceContainerRight=styled("div")(()=>({
    width:"50%",
    display:"flex",
    flexDirection:"column",
    // justifyContent:"space-around"
}));

function Experience() {
    return (
        <ExperienceContainer>
            <ExperienceContainerLeft>
                <ImageComponent image={"assets/images/choose-us-img.jpg"} sx={{width:"650px",position:"absolute"}}/>
                <ImageComponent image={"assets/images/choose-shape.png"} sx={{position:"absolute", marginLeft:"275px", marginTop:"-25px"}}/>
            </ExperienceContainerLeft>
            <ExperienceContainerRight>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>POURQUOI NOUS CHOISIR</Typography>
                <Typography variant='h3' sx={{textAlign:"start", fontWeight:"bold", fontSize:"45px", marginBottom:"50px"}}>30 années d'expérience que nous mettons à votre service</Typography>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'15px', color:"#616179", marginBottom:"50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus. Id nisl quis arcu nulla leo.</Typography>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                             <ExperienceButton text={'VEHICULE'}/>
                        </Grid>
                        <Grid item xs={6}>
                             <ExperienceButton text={'GAGNER EN TEMPS'}/>
                        </Grid>
                        <Grid item xs={6}>
                             <ExperienceButton text={'HABITATION'}/>
                        </Grid>
                        <Grid item xs={6}>
                             <ExperienceButton text={'ECONOMISER'}/>
                        </Grid>
                        <Grid item xs={6}>
                             <ExperienceButton text={'CONSULTATION'}/>
                        </Grid>
                        <Grid item xs={6}>
                             <ExperienceButton text={'VIVEZ MIEUX'}/>
                        </Grid>
                    </Grid>
                </Container>
            </ExperienceContainerRight>
        </ExperienceContainer>
    );
}

export default Experience;