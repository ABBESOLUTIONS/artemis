import React from 'react';
import { styled, SxProps, Container,Grid, Typography, Button, Stack } from '@mui/material';
import ImageComponent from '../../components/ImageComponent';
import SectionStyle from '../../styles/SectionStyle';
import ButtonComponent from '../../components/ButtonComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SendIcon from '@mui/icons-material/Send';
import { PROJECT_COLORS } from '../../common/colors';
import TestimonyCard from '../../components/TestimonyCard';
import Testimony from '../../components/Testimony';

const HomeHeroContainer=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"800px",
    display:"flex",
    flexDirection:"row",
}));
const HomeHeroBG=styled("div")(()=>({
    width:"100%",
    height:"800px",
    backgroundColor:"#F5FAF9",
    position:"absolute",
}));
const HomeHeroContainerLeft=styled("div")(()=>({
    width:"50%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
}));
const HomeHeroContainerRight=styled("div")(()=>({
    width:"50%",
    height:"100%",
    display:"flex",
    justifyContent:"center",

}));
const ButtonsContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
}));

function HomeHero() {
    return (
        <HomeHeroContainer>
            <HomeHeroBG/>
            <ImageComponent image={"assets/images/BigA.png "} sx={{position:"absolute", width:"98%",height:"100%", opacity:0.3, fill:"#F5FAF9"}} />
            <ImageComponent image={"assets/images/LittleTree.png "} sx={{position:"absolute",fill:"#F5FAF9"}} />
            <ImageComponent image={"assets/images/SmallEllipse.png "} sx={{position:"absolute", fill:"#F5FAF9", marginLeft:"175px",marginTop:"95px"}} />
            <ImageComponent image={"assets/images/leaf1.png "} sx={{position:"absolute", fill:"#F5FAF9", marginTop:"500px", marginLeft:"500px"}} />
            <ImageComponent image={"assets/images/DaughtGroup1.png "} sx={{position:"absolute", marginTop:"250px",marginLeft:"1300px",fill:"#F5FAF9"}} />
            <ImageComponent image={"assets/images/DaughtGroup2.png "} sx={{position:"absolute",marginTop:"600px",marginLeft:"50px", fill:"#F5FAF9"}} />
            {/* <TestimonyCard  text={"Super accueil super service un super courtier qui saura trouvé la bonne réponse à vos questions d'assurance et cerise sur le gâteau chez Artemis on vous fait une audit de tout vos contrats assurance quand vous êtes pro oui oui."} profilImage={"assets/images/profile.jpg"} name={"Mohamad D"}/> */}
            
            <HomeHeroContainerLeft>
                <Typography sx={{fontSize:"60px",position:"relative", fontWeight:"bold",width:"500px", marginTop:"-30px",margin:"25px"}}>Bienvenue chez ARTEMIS !</Typography>
                {/* <Typography sx={{fontSize:"60px",position:"absolute", fontWeight:"bold",width:"500px"}}>Bienvenue chez ARTEMIS !</Typography> */}
                <Typography sx={{fontSize:"30px",position:"relative", fontWeight:"bold",width:"500px", margin:"25px", marginTop:"-8px"}}>Artémis Assurance, ça Rassure !</Typography>
                <Typography sx={{fontSize:"20px",position:"relative",width:"675px", margin:"25px"}}>Artémis est une entreprise inscrite au registre du commerce et des sociétés, dont la vocation est d'analyser l'ensemble des contrats que vous avez souscrit (tant auprès d'assureurs que de banquiers ou autres) et de vous représenter auprès des sociétés d'assurances afin de négocier au mieux les garanties adaptées à vos besoins et négocier les conditions de tarif en faisant jouer la concurrence.</Typography>
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
                <ImageComponent image={"assets/images/homeHeroImg.png"} sx={{width:"600px", height:"600px", position:"absolute", borderRadius:"8px", marginTop:"50px"}}/>
                <Testimony/>
            </HomeHeroContainerRight>
        </HomeHeroContainer>
    );
}

export default HomeHero;