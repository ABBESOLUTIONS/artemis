import { Button, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';
import TestimonyCard from '../../components/TestimonyCard';
import Testimony from '../../components/Testimony';
import GoogleRatings from '../../components/GoogleRatings';

const TestimonyOverviewStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"800px",
    backgroundColor:"#497774",
    display:"flex",
    flexDirection:"row",
}));
const TestimonyOverviewLeft=styled("div")(()=>({
    width:"60%",
    height:"100%",
}));
const TestimonyOverviewRight=styled("div")(()=>({
    width:"40%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    padding:"20px",
}));

function TestimonyOverview() {
    return (
        <TestimonyOverviewStyle>
            <TestimonyOverviewLeft>
                <TestimonyCard text={"Super accueil super service un super courtier qui saura trouvé la bonne réponse à vos questions d'assurance et cerise sur le gâteau chez Artemis on vous fait une audit de tout vos contrats assurance quand vous êtes pro oui oui."} profilImage={"assets/images/profile.jpg"} name={"Mohamad D"}/>
                <GoogleRatings/>
            </TestimonyOverviewLeft>
            <TestimonyOverviewRight>
                <ImageComponent image={"assets/images/choose-shape.png"} sx={{position:"absolute", marginLeft:"200px", marginTop:"-360px"}}/>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'', color:"white"}}>LES AVIS</Typography>
                <Typography variant='h3' sx={{textAlign:"start", fontWeight:"bold", fontSize:"45px", marginBottom:"50px",color:"white",width:"475px"}}>Ce que disent les clients de nous</Typography>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'18px', marginBottom:"50px",color:"white",width:"475px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus</Typography>
                <Button startIcon={<ArrowForwardIosIcon sx={{fontSize:"10px"}}/>} sx={{color:"white", backgroundColor:PROJECT_COLORS.primarySwatch, padding:"15px", fontSize:13, width:"150px"}} variant="contained">lire plus...</Button>
                <ImageComponent image={"assets/images/DaughtGroup1.png"} sx={{position:"absolute", marginLeft:"300px", marginTop:"275px"}}/>
            </TestimonyOverviewRight>
        </TestimonyOverviewStyle>
    );
}

export default TestimonyOverview;