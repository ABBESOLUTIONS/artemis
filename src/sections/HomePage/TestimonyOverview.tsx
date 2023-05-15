import { Button, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PROJECT_COLORS } from '../../common/colors';
import TestimonyCard from '../../components/TestimonyCard';
import Testimony from '../../components/Testimony';
import GoogleRatings from '../../components/GoogleRatings';

const TestimonyOverviewStyle=styled("section")(({theme})=>({
    // width:"100%",
    minHeight:"700px",
    backgroundColor:"#497774",
    display:"flex",
    flexDirection:"row",
    width:"calc(100% - 30vw)",
    padding:"75px 15vw 75px 15vw",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    },
    
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        width:"calc(100% - 20px)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
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
    marginTop:"-500px",
    // top:0,
    [theme.breakpoints.down("lg")]: {
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
    minHeight:"700px",
    // width:"60%",
    // height:"100%",
    // maxWidth:"65%",
    width:"60%",
    // backgroundColor:"red",
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"90%",
        // backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center",
    },
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        maxWidth:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
}));
const TestimonyOverviewRight=styled("div")(({theme})=>({
    // width:"45%",
    width:"calc(40% - 3vw)",
    minHeight:"700px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    padding:"0px 0px 0px 3vw",
    // backgroundColor:"yellow",
    [theme.breakpoints.down("lg")]: {
        // right:"15px",
        minHeight:"400px",
        flexDirection:"column",
        width:"90%",
        alignItems:"flex-start",
        justifyContent:"center",
        padding:"0px",
    },
    // [theme.breakpoints.down("lg")]: {
    //     // right:"15px",
    //     flexDirection:"column",
    //     width:"100%",
    //     alignItems:"flex-start",
    //     justifyContent:"center",
    //     padding:"0px",
    // },
}));
const   Title=styled(Typography)(({theme})=>({
    textAlign:"start", 
    fontSize:'', 
    color:"white",
    [theme.breakpoints.down("lg")]: {
        fontSize:"35px",
        // marginBottom:"25px",
    },
}));
const Subtitle=styled(Typography)(({theme})=>({
    textAlign:"start", 
    fontWeight:"bold", 
    fontSize:"45px",
    marginBottom:"50px",
    color:"white",
    maxWidth:"80%",
    [theme.breakpoints.down("md")]: {
        fontSize:"30px",
        width:"275px",

        // marginBottom:"25px",
        // textAlign:"start", 
        // fontWeight:"bold", 
        // color:"white",
    },
}));
const TextDesc=styled(Typography)(({theme})=>({
    textAlign:"start", 
    fontSize:'18px', 
    marginBottom:"50px",
    color:"white",
    maxWidth:"80%",
    [theme.breakpoints.down("md")]: {
        width:"75%",
    textAlign:"start", 
    fontSize:'16px', 
    },
}));
const TestimonyLastCard=styled("div")(({theme})=>({
    margin:"20px",
    marginTop:"85px",
    [theme.breakpoints.down("lg")]: {
        margin:"10px",
        marginTop:"75px",
    },
    [theme.breakpoints.down("md")]: {
        // margin:"10px",
        marginTop:"15px",
        width:"100%",
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
        // margin:"5vh 0vh 5vh 0vh"
    },
}));

function TestimonyOverview() {
    return (
        <TestimonyOverviewStyle>
            <TestimonyOverviewLeft>
                <div>
                <TestimonyCard text={"Client fidèle d'un courtier comme on aimerait en voir plus souvent, qui est toujours à la recherche de la solution la plus adéquate. Réactivité, disponibilité, proximité et bienveillance . Madame Battini et son équipe sont très à l’écoute et impliqués, toujours de bon conseil et très professionnels. Une équipe de confiance. Je recommande vivement."} profilImage={"assets/images/profile.jpg"} name={"Philippe Chabat"}/>
                <GoogleRatings />
                </div>
                <TestimonyLastCard>
                    <TestimonyCard text={"Super accueil super service un super courtier qui saura trouvé la bonne réponse à vos questions d'assurance et cerise sur le gâteau chez Artemis on vous fait une audit de tout vos contrats assurance quand vous êtes pro oui oui."} profilImage={"assets/images/profile.jpg"} name={"Mohamad D"} sx={{}}/>
                </TestimonyLastCard>
            </TestimonyOverviewLeft>
            <TestimonyOverviewRight>
                <RightContent>
                    <LeafImgTestimony src="assets/images/leaf2.png"/>
                    <Title variant="h6" >LES AVIS</Title>
                    <Subtitle variant='h3' sx={{}}>Ce que disent les clients de nous</Subtitle>
                    <TextDesc variant="h6" sx={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus</TextDesc>
                    <Button startIcon={<ArrowForwardIosIcon sx={{fontSize:"10px"}}/>} sx={{color:"white", backgroundColor:PROJECT_COLORS.primarySwatch, padding:"15px", fontSize:13, width:"150px"}} variant="contained">lire plus...</Button>
                    <DaughtTestimony src="assets/images/DaughtGroup1.png"/>
                </RightContent>
            </TestimonyOverviewRight>
        </TestimonyOverviewStyle>
    );
}

export default TestimonyOverview;