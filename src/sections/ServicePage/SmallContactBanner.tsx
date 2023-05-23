import React from 'react';
import { Button, Container, Grid, Stack, styled, Typography } from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { PROJECT_COLORS } from '../../common/colors';
import ImageComponent from '../../components/ImageComponent';
import { Link } from 'react-router-dom';
import { CLIENT_PAGES } from '../../routes/paths';

const SmallContactBannerStyle=styled(SectionStyle)(()=>({
    height:"300px",
    backgroundColor:"#497774",
    display:"flex",
    position:"relative",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",

}));

const EllipseWhite=styled("img")(({theme})=>({
    position:"absolute", 
    right:"50px",
    [theme.breakpoints.down("md")]: {
        display:"none",
    },
}));
const LeafDaught=styled("img")(({theme})=>({
    position:"absolute",
    marginTop:"75px", 
    left:"10px",
    [theme.breakpoints.down("md")]: {
        display:"none",
    },
}));

function SmallContactBanner() {
    return (
        <SmallContactBannerStyle>
            <Typography sx={{fontWeight:"bold", color:"white"}}>Prêt.e à nous rejoindre ?</Typography>
            <Stack direction={"row"} sx={{margin:"15px"}}>
                <Button variant="contained" type="button" component={Link} to={CLIENT_PAGES.contact} sx={{bgcolor:PROJECT_COLORS.primarySwatch, fontSize:12, padding:"15px",margin:"15px",'&:hover': {backgroundColor: '#213438',} }}>Nous joindre</Button>
                <Button variant="outlined" type="button" component={Link} to={CLIENT_PAGES.devisOption} sx={{color:"white", borderColor:"white", fontSize:12, padding:"15px",margin:"15px", '&:hover': {borderColor: '#213438',}}}>Demander un devis</Button>
            </Stack>
            <EllipseWhite src="assets/images/ellipseWhite.png" sx={{}}/>
            <LeafDaught src="assets/images/Leaf+daught.png" sx={{}}/>
        </SmallContactBannerStyle>
    );
}

export default SmallContactBanner;