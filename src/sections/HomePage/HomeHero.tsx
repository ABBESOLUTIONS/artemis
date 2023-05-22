import React from 'react';
import { styled, SxProps, Container,Grid, Typography, Button, Stack, Theme } from '@mui/material';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';
import ButtonComponent from '../../components/ButtonComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SendIcon from '@mui/icons-material/Send';
import { PROJECT_COLORS } from '../../common/colors';
import TestimonyCard from '../../components/TestimonyCard';
import Testimony from '../../components/Testimony';
import Fade from '../../components/animation/Fade';
import FadeVariants from '../../variants/FadeVariants';
import { CLIENT_PAGES } from '../../routes/paths';
import { Link } from 'react-router-dom';

const HomeHeroContainer=styled("section")(({theme})=>({
    // width:"100%",
    width:"calc(100% - 16vw)",
    padding:"0vw 8vw 0vw 8vw",
    minHeight:"100vh",
    display:"flex",
    position:"relative",
    flexDirection:"row",
    // justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:"#F5FAF9",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        minHeight:"120vh",
        // width:"100%",
        width:"calc(100% - 4vw)",
        padding:"0vw 2vw 0vw 2vw",
    },
}));
const HomeHeroBG=styled("div")(({theme})=>({
    width:"calc(100% - 16vw)",
    height:"100%",
    // backgroundColor:"#F5FAF9",
    position:"absolute",
    [theme.breakpoints.down("lg")]: {
        display:"none",
    },
}));
const HomeHeroContainerLeft=styled("div")(({theme})=>({
    width:"50%",
    // minWidth:"675px",
    // maxWidth:"45%",
    minHeight:"500px",
    // margin:"20px",
    display:"flex",
    paddingTop:"75px",
    flexDirection:"column",
    justifyContent:"center",
    // backgroundColor:"yellow",
    [theme.breakpoints.down("lg")]: {
        // maxWidth:"100%",
        // minWidth:"150px",
        width:"100%"
    },
    [theme.breakpoints.down("md")]: {
        // maxWidth:"100%",
        // minWidth:"150px",
        width:"100%"
    },
}));
const HomeHeroContainerRight=styled("div")(({theme})=>({
    // minWidth:"450px",
    minHeight:"500px",
    width:"50%",
    display:"flex",
    // placeItems:"end",
    // margin:"15px",
    // display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
    justifyContent:"center",
    // backgroundColor:"green",
    [theme.breakpoints.down("lg")]: {
        // maxWidth:"100%",
        // minWidth:"150px",
        width:"100%",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        // display:"grid",
        // placeItems:"end",

    },
    [theme.breakpoints.down("md")]: {
        // maxWidth:"300px",
        // minWidth:"200px",
        // margin:"15px"
    },

}));
const ButtonsContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
}));
const HomeHeroLeftTitle=styled(Typography)(({theme})=>({
    fontSize:"55px",
    fontWeight:600,
    color:"#000000",
    fontFamily: "RedHatBold, sans-serif !important" ,
    position:"relative",
    [theme.breakpoints.down("lg")]: {
        fontSize:"2.5em",
        textAlign:"center"
    },
}));
const HeroImage=styled("img")(({theme})=>({
    // position:"absolute",
    // width:"95%",
    maxWidth:"100%",
    // height:"500px",
    scale:"0.9",
    objectFit:"cover",
    // marginTop:"50px",
    borderRadius:"8px",
    [theme.breakpoints.down("lg")]: {
        // display:"none",
        // width:"50%",
        // height:"auto"
    },
    [theme.breakpoints.down("md")]: {
        // display:"none",
        // width:"80%",
        // height:"400px",
        // marginTop:"-20px"
    },
}));
const HomeHeroLeftSubTitle=styled(Stack)(({theme})=>({
    // backgroundColor:"red",
    marginBottom:"50px",
    [theme.breakpoints.down("lg")]: {
        justifyContent:"center",
    alignItems:"center",
    },
    [theme.breakpoints.down("lg")]: {
        justifyContent:"center",
    alignItems:"center",
    },
}));
const LeftSubTitle=styled(Typography)(({theme})=>({
    fontSize:"26px",
    fontWeight:600,
    color:"#000000",
    position:"relative",
    fontFamily: "RedHatExtraBold, sans-serif !important" ,
    [theme.breakpoints.down("md")]: {
        fontSize:"1.6em",
        textAlign:"center"
    },
    [theme.breakpoints.down("lg")]: {
        fontSize:"1.1em",
        textAlign:"center"
    },
}));
const HomeHeroLeftText=styled(Typography)(({theme})=>({
    minWidth:"  200px",
    fontSize:"20px",
    // fontWeight:75,
    // height:"40%",
    marginTop:"15px",
    color:"#616161",
    position:"relative",
    fontFamily: "RedHatRegular, sans-serif !important" ,
    // backgroundColor:"red",
    [theme.breakpoints.down("md")]: {
        minWidth:"95%",
        fontSize:"16px",
        fontWeight:75,
        textAlign:"center"
    },
    // [theme.breakpoints.down("lg")]: {
    //     fontSize:"16px",
    //     fontWeight:75,
    //     textAlign:"center",
    //     minWidth:"400px",
        
    // },
}));


function HomeHero() {
    return (
        <HomeHeroContainer>
            <HomeHeroBG>
                <ImageComponent image={"assets/images/BigA.png "} sx={{position:"absolute", width:"100%",height:"100%", opacity:0.3,}} />
                <ImageComponent image={"assets/images/LittleTree.png "} sx={{position:"absolute", }} />
                <ImageComponent image={"assets/images/SmallEllipse.png "} sx={{position:"absolute", marginTop:"125px", marginLeft:"500px"}} />
                <ImageComponent image={"assets/images/leaf1.png "} sx={{position:"absolute", marginTop:"600px", marginLeft:"425px"}} />
                <ImageComponent image={"assets/images/DaughtGroup1.png "} sx={{position:"absolute", right:"0px", marginTop:"500px" }} />
                <ImageComponent image={"assets/images/DaughtGroup2.png "} sx={{position:"absolute", marginTop:"725px", marginLeft:"20px"}} />
                <ImageComponent image={"assets/images/bottomShape.png "} sx={{position:"absolute", bottom:"0px", width:"100%", height:"50px"}} />
            </HomeHeroBG>
            
            {/* <TestimonyCard  text={"Super accueil super service un super courtier qui saura trouvé la bonne réponse à vos questions d'assurance et cerise sur le gâteau chez Artemis on vous fait une audit de tout vos contrats assurance quand vous êtes pro oui oui."} profilImage={"assets/images/profile.jpg"} name={"Mohamad D"}/> */}
            
            <HomeHeroContainerLeft>
                <HomeHeroLeftTitle>
                    Bienvenue chez ARTEMIS !
                </HomeHeroLeftTitle>
                <HomeHeroLeftSubTitle direction={"row"}>
                <LeftSubTitle  sx={{color:"green", marginRight:"8px"}}>Artémis </LeftSubTitle><LeftSubTitle >Assurance, ça Rassure !</LeftSubTitle>
                </HomeHeroLeftSubTitle>
                <HomeHeroLeftText>
                Une équipe de professionnels compétents et diplômés en Assurance afin de vous conseiller au mieux. Nous avons fait le choix d'être courtier en assurance pour vous offrir un large éventail de compagnies. Seuls vos besoins guident notre choix et non notre dépendance à une enseigne..                </HomeHeroLeftText>
                <ButtonsContainer>
                    {/* <ButtonComponent libele={"Lire plus..."} children={<ArrowBackIosNewIcon/>}/>
                    <ButtonComponent libele={"Nous contacter"} children={<SendIcon/>}/> */}
                    
                </ButtonsContainer>
                <HomeHeroLeftSubTitle spacing={4} direction="row" sx={{margin:"25px 0px 0px 0px"}}>
                    <Button variant="contained" component={Link} to={CLIENT_PAGES.services} type="button" startIcon={<ArrowForwardIosIcon sx={{fontSize:"large"}}/>} sx={{color:"white", backgroundColor:PROJECT_COLORS.primarySwatch, padding:"15px", fontSize:13}}>Lire plus...</Button>
                    <Button variant="outlined" component={Link} to={CLIENT_PAGES.contact} type="button" startIcon={<SendIcon/>} sx={{color:PROJECT_COLORS.primarySwatch, borderColor:PROJECT_COLORS.primarySwatch, fontSize:13}}>Nous contacter</Button>
                </HomeHeroLeftSubTitle>
            </HomeHeroContainerLeft>
            <HomeHeroContainerRight>
            <HeroImage src="assets/images/homeHeroImg.png" />
            </HomeHeroContainerRight>
        </HomeHeroContainer>
    );
}

export default HomeHero;