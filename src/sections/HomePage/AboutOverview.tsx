import React from 'react';
import { Container, Grid, styled, SxProps, Typography } from '@mui/material';
import ServiceOverviewCard from '../../components/AboutOverviewCard';
import { PROJECT_COLORS } from '../../common/colors';
import { servicesOverview } from '../../common/Data';
import AboutImage from '../../components/AboutImage';
import SectionStyle from '../../styles/SectionStyle';
import ImageComponent from '../../components/ImageComponent';
import Fade from '../../components/animation/Fade';
import FadeVariants from '../../variants/FadeVariants';

const AboutOverviewContainer=styled("section")(({theme})=>({
    width:"calc(100% - 30vw)",
    padding:"75px 15vw 75px 15vw",
    minHeight:"75vh",
    backgroundColor:"#F8F8F8",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        // width:"calc(100% - 20px)",
        // height:"auto",
        width:"calc(100% - 4vw)",
        padding:"0vw 2vw 0vw 2vw",
    },
}));

const AboutOverviewLeft=styled("div")(({theme})=>({
    width:"50%",
    // marginLeft:"5%",
    display:"flex",
    flexDirection:"column",
    // padding:"10px",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"pink",
    [theme.breakpoints.down("lg")]: {
    padding:"0px",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        // minHeight:"auto"    
    },
}));
const AboutOverviewRight=styled("div")(({theme})=>({
    width:"50%",
    // backgroundColor:"blue",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    // gap:5,
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        width:"100%",
        // marginLeft:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",


        // maxWidth:"100%",
    },
    [theme.breakpoints.down("md")]: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:"100%",   
     },
}));
const ImageRight=styled("div")(({theme})=>({
    width:"100%",
    display:"flex",
    justifyContent:"start",
    alignItems:"center",
    // backgroundColor:"red",
    [theme.breakpoints.down("lg")]: {
        width:"100%",
    },
}));
const QualityTitle = styled(Typography)(({theme}) => ({
    // fontFamily: "InterBold,sans-serif !important",
    fontSize: "35px",
    fontWeight: 800,
    width:"100%",
    [theme.breakpoints.down("lg")]: {
        fontSize: "25px",
        fontWeight: 400,
        textAlign: "center",
         width:"100%",
        

    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "30px",
        fontWeight: 400,
        textAlign: "center"
    },
}));

const LastImg= styled("img")(({theme})=>({
    // width: "285px",
    // height: "320px",
    maxWidth:"100%",
    height:"auto",
    borderRadius: "15px",
    // margin:"8px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("lg")]: {
        // width:"98%",
        // height:"98%"
        maxWidth:"100%",
        height:"auto",
    },
    [theme.breakpoints.down("md")]: {
        // width:"90%",
        // height:"90%",
        // marginRight:"50px"
        width:"100%",
        height:"auto",
    },
    [theme.breakpoints.down("sm")]: {
        // width:"90%",
        // height:"90%",
        // marginRight:"100px"
        maxWidth:"100%",
        height:"auto",
    },
}));



function AboutOverview() {
    return (
        <AboutOverviewContainer>
            <AboutOverviewLeft>
                <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>A PROPOS DE NOUS</Typography>
                {/* <Typography variant='h3' sx={{textAlign:"center", fontWeight:"bold", fontSize:"45px", marginBottom:"50px"}}>Les missions que nous nous sommes fixées</Typography> */}
                <QualityTitle>Les missions que nous nous sommes fixées</QualityTitle>
                    <Grid container rowSpacing={3}>
                            {
                                servicesOverview.map((oneService,index) => 
                                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ }}>
                                <Fade variants={FadeVariants({}).inUp}><ServiceOverviewCard icone={oneService.icone} detail={oneService.subtitle}/></Fade>
                                </Grid>
                                )
                        
                            }

                    </Grid>
            </AboutOverviewLeft>
            <AboutOverviewRight>
                <Grid container columnSpacing={2}  rowSpacing={{sm:2, xs:2}}>
                    <Grid item lg={6} md={6} sm={12} sx={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                            {/* <Container> */}
                                <Grid container rowSpacing={2} sx={{}}>                            
                                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                                        <AboutImage image={'assets/images/about/about-1.jpg'} />                                
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                                        <AboutImage image={"assets/images/about/about-2.jpg"} />                               
                                    </Grid>
                                </Grid>
                            {/* </Container>  */}
                    </Grid>
                    <Grid item lg={6} md={6}  sm={12} xs={12} sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"center"}}>
                        <LastImg src='assets/images/about/about-3.jpg' />          
                    </Grid>
                </Grid>

                {/* <div>
                </div>
                <ImageRight>
                </ImageRight> */}
            </AboutOverviewRight>
        </AboutOverviewContainer>
    );
}

export default AboutOverview;