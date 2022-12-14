import { Link, Stack, styled, Typography } from '@mui/material';
import { PROJECT_COLORS } from '../common/colors';
import SectionStyle from '../styles/SectionStyle';
import ImageComponent from './ImageComponent';
import TextButton from './TextButton';

const HeroComponentStyle=styled(SectionStyle)(({theme})=>({
    height:"320px",
    backgroundColor:"#F3F9F8",
    position:"relative",
    [theme.breakpoints.down("lg")]: {
        height:"250px"

    },
}));
const HeroTitleContent=styled("div")(({theme})=>({
    position:"relative",
    height:"300px",
    backgroundColor:"#497774",
    maxWidth:"750px",
    margin:"auto",
    borderRadius:"0px 161px 161px 161px",
    paddingTop:"6px",
    paddingLeft:"6px",
    [theme.breakpoints.down("lg")]: {
        height:"230px"

    },

}));
const HeroTitleContent2=styled("div")(({theme})=>({
    position:"relative",
    height:"305px",
    backgroundColor:"#F3F9F8",
    maxWidth:"750px",
    margin:"auto",
    borderRadius:"0px 161px 161px 161px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("lg")]: {
        height:"235px"

    },
}));
const BigTitle=styled(Typography)(({theme})=>({
    fontSize:"50px", 
    fontWeight:"bold",
    [theme.breakpoints.down("md")]: {
        fontSize:"12px",
        textAlign:"center",

    },
}));
const LittleTitle=styled(Typography)(({theme})=>({
    color:PROJECT_COLORS.primarySwatch,
    [theme.breakpoints.down("md")]: {
        
        fontSize:"12px",
        textAlign:"center",

    },
}));
const AccueilButton=styled(Typography)(({theme})=>({
    // fontSize:"50px", 
    color:"black",
    textDecoration:"none",
    [theme.breakpoints.down("md")]: {
        fontSize:"12px",
        textAlign:"center",
    },
}));
const LeafHero=styled("img")(({theme})=>({
   position:"absolute",
   marginRight:"700px",

    [theme.breakpoints.down("lg")]: {
        display:"none",
    },
}));
const DaughtHero=styled("img")(({theme})=>({
    position:"absolute",
    marginRight:"1000px",
    marginTop:"150px",
    [theme.breakpoints.down("lg")]: {
        display:"none",
    },
}));
const DaughtLeafHero=styled("img")(({theme})=>({
   position:"absolute",
   marginLeft:"900px",
   marginTop:"100px",
    [theme.breakpoints.down("lg")]: {
        display:"none",
    },
}));
const TitleContent=styled("div")(({theme})=>({
    
    [theme.breakpoints.down("lg")]: {
        
    },
}));

interface Props{
    bigTitle:string,
    littleTitle:string,

}

function HeroComponent({bigTitle, littleTitle}: Props) {
    return (
        <HeroComponentStyle>
                <HeroTitleContent>
                    <HeroTitleContent2>
                        <BigTitle>{bigTitle}</BigTitle>
                        <Stack direction={"row"}>
                            {/* <AccueilButton title="Accueil" path=''/> */}
                            {/* <AccueilButton><Typography>Accueil</Typography></AccueilButton> */}
                            <Link>
                                <AccueilButton sx={{textDecoration:"none"}}>Accueil</AccueilButton>
                            </Link>
                            <LittleTitle>  /  {littleTitle}</LittleTitle>
                        </Stack>
                        <LeafHero src="assets/images/leaf2.png"/>
                        <DaughtHero src="assets/images/DaughtGroup2.png"/>
                        <DaughtLeafHero src="assets/images/Leaf+daught.png"/>
                    </HeroTitleContent2>
                </HeroTitleContent>
        </HeroComponentStyle>
    );
}

export default HeroComponent;