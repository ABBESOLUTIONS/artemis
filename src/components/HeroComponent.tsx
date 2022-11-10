import { styled, Typography } from '@mui/material';
import SectionStyle from '../styles/SectionStyle';
import ImageComponent from './ImageComponent';

const HeroComponentStyle=styled(SectionStyle)(()=>({
    height:"320px",
    backgroundColor:"#F3F9F8",
}));
const HeroTitleContent=styled("div")(()=>({
    position:"relative",
    height:"300px",
    backgroundColor:"#497774",
    maxWidth:"750px",
    margin:"auto",
    borderRadius:"0px 161px 161px 161px",
    paddingTop:"6px",
    paddingLeft:"6px",

}));
const HeroTitleContent2=styled("div")(()=>({
    position:"relative",
    height:"305px",
    backgroundColor:"#F3F9F8",
    maxWidth:"750px",
    margin:"auto",
    borderRadius:"0px 161px 161px 161px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
}))

function HeroComponent() {
    return (
        <HeroComponentStyle>
                <HeroTitleContent>
                    <HeroTitleContent2>
                        <Typography sx={{fontSize:"50px", fontWeight:"bold",marginTop:"-35px", marginLeft:"250px"}}>SERVICES</Typography>
                        <Typography sx={{marginLeft:"300px"}}>Accueil  /  Services</Typography>
                    </HeroTitleContent2>
                </HeroTitleContent>
                <ImageComponent sx={{marginTop:"-175px", position:"absolute",marginLeft:"1200px" }} image={"assets/images/Leaf+daught.png"}/>
                <ImageComponent sx={{marginTop:"-100px", position:"absolute",marginLeft:"200px"}} image={"assets/images/DaughtGroup2.png"}/>
                <ImageComponent sx={{marginTop:"-225px", position:"absolute", marginLeft:"325px"}} image={"assets/images/leaf2.png"}/>
        </HeroComponentStyle>
    );
}

export default HeroComponent;