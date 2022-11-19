import { Button, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';
import TestimonyCard from '../../components/TestimonyCard';
import Testimony from '../../components/Testimony';
import GoogleRatings from '../../components/GoogleRatings';

const TestimonyOverviewStyle=styled(SectionStyle)(({theme})=>({
    // width:"100%",
    minHeight:"700px",
    backgroundColor:"#497774",
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        // maxWidth:"100%",
    },
}));
const AboutOverviewRight=styled("div")(({theme})=>({
    maxWidth:"50%",
    backgroundColor:"",
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        maxWidth:"100%",
    },
}));
const LeafImgTestimony=styled("img")(({theme})=>({
    position:"absolute", 
    marginLeft:"200px", 
    marginTop:"-360px",
    [theme.breakpoints.down("md")]: {
        display:"none",
    },
}));
const DaughtTestimony=styled("img")(({theme})=>({
    position:"absolute", 
    marginLeft:"300px", 
    marginTop:"275px",
    [theme.breakpoints.down("md")]: {
        display:"none",
    },
}));
const TestimonyOverviewLeft=styled("div")(({theme})=>({
    // width:"60%",
    // height:"100%",
    maxWidth:"65%",
    backgroundColor:"",
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        maxWidth:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
}));
const TestimonyOverviewRight=styled("div")(()=>({
    width:"45%",
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
                <div>
                <TestimonyCard text={"Client fidèle d'un courtier comme on aimerait en voir plus souvent, qui est toujours à la recherche de la solution la plus adéquate. Réactivité, disponibilité, proximité et bienveillance . Madame Battini et son équipe sont très à l’écoute et impliqués, toujours de bon conseil et très professionnels. Une équipe de confiance. Je recommande vivement."} profilImage={"assets/images/profile.jpg"} name={"Philippe Chabat"}/>
                <GoogleRatings />
                </div>
                <div>
                <TestimonyCard text={"Super accueil super service un super courtier qui saura trouvé la bonne réponse à vos questions d'assurance et cerise sur le gâteau chez Artemis on vous fait une audit de tout vos contrats assurance quand vous êtes pro oui oui."} profilImage={"assets/images/profile.jpg"} name={"Mohamad D"} sx={{margin:"20px",marginTop:"85px"}}/>
                </div>
            </TestimonyOverviewLeft>
            <TestimonyOverviewRight>
                <LeafImgTestimony src="assets/images/leaf2.png"/>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'', color:"white"}}>LES AVIS</Typography>
                <Typography variant='h3' sx={{textAlign:"start", fontWeight:"bold", fontSize:"45px", marginBottom:"50px",color:"white",width:"475px"}}>Ce que disent les clients de nous</Typography>
                <Typography variant="h6" sx={{textAlign:"start", fontSize:'18px', marginBottom:"50px",color:"white",width:"475px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus</Typography>
                <Button startIcon={<ArrowForwardIosIcon sx={{fontSize:"10px"}}/>} sx={{color:"white", backgroundColor:PROJECT_COLORS.primarySwatch, padding:"15px", fontSize:13, width:"150px"}} variant="contained">lire plus...</Button>
                <DaughtTestimony src="assets/images/DaughtGroup1.png"/>
            </TestimonyOverviewRight>
        </TestimonyOverviewStyle>
    );
}

export default TestimonyOverview;