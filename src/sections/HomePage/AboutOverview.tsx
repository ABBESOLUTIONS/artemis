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
    justifyContent:"space-around",
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        minHeight:"auto"    
    },
}));

const AboutOverviewLeft=styled("div")(({theme})=>({
    width:"50%",
    marginLeft:"5%",
    height:"calc(100% - 40px)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    padding:"20px",
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        minHeight:"auto"    
    },
}));
const AboutOverviewRight=styled("div")(({theme})=>({
    width:"50%",
    backgroundColor:"",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column"
    },
}));



function AboutOverview() {
    return (
        <AboutOverviewContainer>
            <AboutOverviewLeft>
                <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>A PROPOS DE NOUS</Typography>
                <Typography variant='h3' sx={{textAlign:"center", fontWeight:"bold", fontSize:"45px", marginBottom:"50px"}}>Les missions que nous nous sommes fixées</Typography>
                {
                    servicesOverview.map((oneService,index) => <ServiceOverviewCard icone={''} detail={oneService.subtitle}/>)
                }
            </AboutOverviewLeft>
            <AboutOverviewRight>
                <AboutImage image={'assets/images/about/about-1.jpg'} sx={{}}/>
                <AboutImage image={"assets/images/about/about-2.jpg"} sx={{marginLeft:"30px", marginBottom:"-150px"}}/>
                <AboutImage image={'assets/images/about/about-3.jpg'} sx={{marginTop:"25px"}}/>
            </AboutOverviewRight>
        </AboutOverviewContainer>
    );
}

export default AboutOverview;