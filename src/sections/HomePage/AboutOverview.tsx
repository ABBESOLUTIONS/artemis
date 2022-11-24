import React from 'react';
import { styled, SxProps, Typography } from '@mui/material';
import ServiceOverviewCard from '../../components/AboutOverviewCard';
import { PROJECT_COLORS } from '../../common/colors';
import { servicesOverview } from '../../common/Data';
import AboutImage from '../../components/AboutImage';
import SectionStyle from '../../styles/SectionStyle';

const AboutOverviewContainer=styled(SectionStyle)(({theme})=>({
    height:"750px",
    backgroundColor:"#F8F8F8",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        width:"calc(100% - 20px)",
        height:"auto",
    },
}));

const AboutOverviewLeft=styled("div")(({theme})=>({
    maxWidth:"50%",
    // marginLeft:"5%",
    display:"flex",
    flexDirection:"column",
    padding:"10px",
    [theme.breakpoints.down("lg")]: {
    padding:"0px",
        maxWidth:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        // minHeight:"auto"    
    },
}));
const AboutOverviewRight=styled("div")(({theme})=>({
    maxWidth:"50%",
    backgroundColor:"",
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down("lg")]: {
        // flexDirection:"column",
        maxWidth:"70%",
        marginLeft:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",


        // maxWidth:"100%",
    },
}));
const ImageRight=styled("div")(({theme})=>({
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
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



function AboutOverview() {
    return (
        <AboutOverviewContainer>
            <AboutOverviewLeft>
                <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>A PROPOS DE NOUS</Typography>
                {/* <Typography variant='h3' sx={{textAlign:"center", fontWeight:"bold", fontSize:"45px", marginBottom:"50px"}}>Les missions que nous nous sommes fixées</Typography> */}
                <QualityTitle>Les missions que nous nous sommes fixées</QualityTitle>
                {
                    servicesOverview.map((oneService,index) => <ServiceOverviewCard icone={''} detail={oneService.subtitle}/>)
                }
            </AboutOverviewLeft>
            <AboutOverviewRight>
                <div>
                <AboutImage image={'assets/images/about/about-1.jpg'} />
                <AboutImage image={"assets/images/about/about-2.jpg"} />
                </div>
                <ImageRight>
                {/* <AboutImage image={'assets/images/about/about-3.jpg'} /> */}
                <AboutImage image={"assets/images/about/about-2.jpg"} />
                </ImageRight>
            </AboutOverviewRight>
        </AboutOverviewContainer>
    );
}

export default AboutOverview;