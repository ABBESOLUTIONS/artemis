
import { AppBar, Button, Divider, Drawer, Stack, styled, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlarmIcon from '@mui/icons-material/Alarm';
import SizesText from './SizesText';

interface props {
  open: boolean,
  onClick:Function,
}
const DrawerHeader=styled("div")(()=>({
  width:"35%",
  height:"75px",
  position:"fixed",
  color:"white",
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  borderBottom:"solid 1px grey",
  backgroundColor:"white",
}));
const DrawerContentStyle=styled("div")(()=>({
  height:"calc (100% - 55px)",
  paddingTop:"75px",
  paddingRight:"22px",
  paddingLeft:"22px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  
}));

const ContactLinkStyle=styled(Link)(()=>({
  textDecoration:"none",
}))

export default function AboutDrawer({open, onClick}: props) {

  return (
    <div>
        <Drawer anchor={"right"} open={open}  PaperProps={{ sx:{ width: {xs:1, sm: 0.5, md: 450, backgroundColor:"white"}}}}>
          <DrawerHeader>
            <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
            <Button onClick={() => onClick()} sx={{width:"50px"}}>✖</Button>
          </DrawerHeader>
          <DrawerContentStyle>
          <Divider orientation="horizontal" flexItem></Divider>
          <Typography sx={{fontWeight:700, fontSize:"30px", width:"300px"}}>A propos de nous</Typography>
          {/* <Typography variant="body2" sx={{fontSize:"16px"}}>Artémis est une entreprise inscrite au registre du commerce et des sociétés, dont la vocation est d'analyser l'ensemble des contrats que vous avez souscrit (tant auprès d'assureurs que de banquiers ou autres) et de vous représenter auprès des sociétés d'assurances afin de négocier au mieux les garanties adaptées à vos besoins et négocier les conditions de tarif en faisant jouer la concurrence.</Typography> */}
          <SizesText sx={{marginTop:"15px"}} text={"Artémis est une entreprise inscrite au registre du commerce et des sociétés, dont la vocation est d'analyser l'ensemble des contrats que vous avez souscrit (tant auprès d'assureurs que de banquiers ou autres) et de vous représenter auprès des sociétés d'assurances afin de négocier au mieux les garanties adaptées à vos besoins et négocier les conditions de tarif en faisant jouer la concurrence."}></SizesText>
          <Typography sx={{fontWeight:700, fontSize:"30px", width:"300px", marginTop:"15px"}}>Contact Info</Typography>
          <ContactLinkStyle to={''}>
            <Stack direction={"row"} sx={{marginTop:"15px"}}>
              <PlaceIcon/>
              <SizesText text={"19, avenue Abel Sarnette, 84300 Cavaillon | France"} sx={{fontSize:"18px", color:"black", marginLeft:"10px"}}/>
            </Stack>
          </ContactLinkStyle>
          <ContactLinkStyle to={''}>
            <Stack direction={"row"} sx={{marginTop:"15px"}}>
              <CallIcon/>
              <SizesText text={"+33 4 90 35 47"} sx={{fontSize:"18px", color:"black", marginLeft:"10px"}}/>
            </Stack>
          </ContactLinkStyle>
          <ContactLinkStyle to={''}>
            <Stack direction={"row"} sx={{marginTop:"15px"}}>
              <MailOutlineIcon/>
              <SizesText text={"contact@artemisassurance.fr"} sx={{fontSize:"18px", color:"black", marginLeft:"10px"}}/>
            </Stack>
          </ContactLinkStyle>
            <Stack direction={"row"} sx={{marginTop:"15px"}}>
              <AlarmIcon />
              <SizesText text={"Lundi - vendredi, 09:00–12:00, 14:00–18:00"} sx={{fontSize:"18px", color:"black", marginLeft:"10px"}}/>
            </Stack>
          </DrawerContentStyle>
        </Drawer>
    </div>
  );
}