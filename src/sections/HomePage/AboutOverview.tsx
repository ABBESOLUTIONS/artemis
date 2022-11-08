import React from 'react';
import { styled, SxProps, Typography } from '@mui/material';
import ServiceOverviewCard from '../../components/AboutOverviewCard';
import { PROJECT_COLORS } from '../../common/colors';
import { servicesOverview } from '../../common/Data';
import AboutImage from '../../components/AboutImage';

const AboutOverviewContainer=styled("div")(()=>({
    width:"100%",
    height:"750px",
    backgroundColor:"#F8F8F8",
    display:"flex",
    flexDirection:"row",
    padding:"25px"
}));

const AboutOverviewLeft=styled("div")(()=>({
    width:"50%",
    backgroundColor:"",
    
}));
const AboutOverviewRight=styled("div")(()=>({
    width:"50%",
    backgroundColor:"",
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