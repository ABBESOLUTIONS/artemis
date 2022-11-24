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

const HomeHeroContainer=styled(SectionStyle)(({theme})=>({
    // width:"100%",
    // width:"calc(100% - 100px)",
    minHeight:"150vh",
    display:"flex",
    position:"relative",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5FAF9",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        minHeight:"120vh"
    },
}));
const HomeHeroBG=styled("div")(({theme})=>({
    width:"100%",
    height:"100%",
    // backgroundColor:"#F5FAF9",
    position:"absolute",
    [theme.breakpoints.down("lg")]: {
        display:"none",
    },
}));
const HomeHeroContainerLeft=styled("div")(({theme})=>({
    minWidth:"675px",
    maxWidth:"45%",
    minHeight:"500px",
    margin:"20px",
    display:"flex",
    paddingTop:"75px",
    flexDirection:"column",
    justifyContent:"center",
    [theme.breakpoints.down("md")]: {
        maxWidth:"100%",
        minWidth:"150px",
    },
}));
const HomeHeroContainerRight=styled("div")(({theme})=>({
    minWidth:"450px",
    minHeight:"400px",
    margin:"15px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("md")]: {
        maxWidth:"300px",
        minWidth:"200px",
        margin:"15px"
    },

}));
const ButtonsContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
}));
const HomeHeroLeftTitle=styled(Typography)(({theme})=>({
    fontSize:"64px",
    fontWeight:800,
    color:"#000000",
    position:"relative",
    [theme.breakpoints.down("md")]: {
        fontSize:"2.5em",
        textAlign:"center"
    },
}));
const HeroImage=styled("img")(({theme})=>({
    position:"absolute",
    width:"42%",
    height:"550px",
    marginTop:"50px",
    borderRadius:"10px",
    [theme.breakpoints.down("md")]: {
        // display:"none",
        width:"90%",
        height:"auto"
    },
}));
const HomeHeroLeftSubTitle=styled(Typography)(({theme})=>({
    fontSize:"30px",
    fontWeight:600,
    color:"#000000",
    position:"relative",
    [theme.breakpoints.down("md")]: {
        fontSize:"1.6em",
        textAlign:"center"
    },
}));
const HomeHeroLeftText=styled(Typography)(({theme})=>({
    minWidth:"  600px",
    fontSize:"20px",
    fontWeight:75,
    marginTop:"15px",
    color:"#616161",
    position:"relative",
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
                {/* <Typography sx={{fontSize:"60px",position:"relative", fontWeight:"bold",width:"500px", marginTop:"-30px",margin:"25px"}}>Bienvenue chez ARTEMIS !</Typography> */}
                {/* <Typography sx={{fontSize:"60px",position:"absolute", fontWeight:"bold",width:"500px"}}>Bienvenue chez ARTEMIS !</Typography> */}
                {/* <Typography sx={{fontSize:"30px",position:"relative", fontWeight:"bold",width:"500px", margin:"25px", marginTop:"-8px"}}>Artémis Assurance, ça Rassure !</Typography> */}
                {/* <Typography sx={{fontSize:"20px",position:"relative",width:"675px", margin:"25px"}}>Artémis est une entreprise inscrite au registre du commerce et des sociétés, dont la vocation est d'analyser l'ensemble des contrats que vous avez souscrit (tant auprès d'assureurs que de banquiers ou autres) et de vous représenter auprès des sociétés d'assurances afin de négocier au mieux les garanties adaptées à vos besoins et négocier les conditions de tarif en faisant jouer la concurrence.</Typography> */}
                <HomeHeroLeftTitle>
                Bienvenue chez ARTEMIS !
                </HomeHeroLeftTitle>
                <HomeHeroLeftSubTitle>
                <Typography component={"span"} sx={{color:"green"}}>Artémis </Typography><Typography component={"span"}>Assurance, ça Rassure !</Typography>
                </HomeHeroLeftSubTitle>
                <HomeHeroLeftText>
                Artémis est une entreprise inscrite au registre du commerce et des sociétés, dont la vocation est d'analyser l'ensemble des contrats que vous avez souscrit (tant auprès d'assureurs que de banquiers ou autres) et de vous représenter auprès des sociétés d'assurances afin de négocier au mieux les garanties adaptées à vos besoins et négocier les conditions de tarif en faisant jouer la concurrence.
                </HomeHeroLeftText>
                <ButtonsContainer>
                    {/* <ButtonComponent libele={"Lire plus..."} children={<ArrowBackIosNewIcon/>}/>
                    <ButtonComponent libele={"Nous contacter"} children={<SendIcon/>}/> */}
                    
                </ButtonsContainer>
                <Stack spacing={4} direction="row" sx={{margin:"25px"}}>
                <Button variant="contained" startIcon={<ArrowForwardIosIcon sx={{fontSize:"large"}}/>} sx={{color:"white", backgroundColor:PROJECT_COLORS.primarySwatch, padding:"15px", fontSize:13}}>Lire plus...</Button>
                    <Button variant="outlined" startIcon={<SendIcon/>} sx={{color:PROJECT_COLORS.primarySwatch, borderColor:PROJECT_COLORS.primarySwatch, fontSize:13}}>Nous contacter</Button>
                </Stack>
            </HomeHeroContainerLeft>
            <HomeHeroContainerRight>
                <HeroImage src="assets/images/homeHeroImg.png" />
            </HomeHeroContainerRight>
        </HomeHeroContainer>
    );
}

export default HomeHero;