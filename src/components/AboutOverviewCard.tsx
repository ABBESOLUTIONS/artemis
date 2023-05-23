import React from 'react';
import { styled, SxProps, Typography, Card, Container} from '@mui/material';
import ImageComponent from './ImageComponent';


const AboutOverviewCardContainer=styled(Card)(({theme})=>({
    width:"calc(95% - 20px)",
    // width:"75%",
    minHeight:"100px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    padding:"10px",
    // margin:"10px",
    transition: "all ease 300ms",
    '&:hover':{
        transform: "scale(1.03)"
    },
    [theme.breakpoints.down("lg")]: {
        // width:"calc(95% - 20px) ",
        width:"100%",
        minHeight:"150px",
        flexDirection:"row",   
    },
    [theme.breakpoints.down("sm")]: {
        width:"100%",
        minHeight:"200px",
        flexDirection:"column",
        // flexDirection:"column",   
    },
}));

const AboutIconeCircle= styled("div")(({theme})=>({
    width:"85px",
    height:"85px",
    borderRadius:"50%",
    backgroundColor:"#E7F4F2",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("lg")]: {
        width:"80px",
        height:"80px",
         borderRadius:"50%",
    },
    // [theme.breakpoints.down("md")]: {
    //    width:"75px",
    //    height:"75px",
    //     borderRadius:"50%",
    // },
}));

const AboutTextStyle = styled(Typography)(({theme}) => ({
    // fontFamily: "InterBold,sans-serif !important",
    // fontSize: "16px",
    // width:"100%",
    color:"#616161",
    maxWidth:"75%",
    [theme.breakpoints.down("lg")]: {
        fontSize: "16px",
        textAlign: "center",
        maxWidth:"90%",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "15px",
        textAlign: "center",
        maxWidth:"90%",
    },
}));

interface Props {
    icone: string,
    detail: string,
    
}

function AboutOverviewCard({icone,detail}: Props) {
    return (
            <AboutOverviewCardContainer>
                <AboutIconeCircle>
                    <ImageComponent image={icone} />
                </AboutIconeCircle>
                <AboutTextStyle>{detail}</AboutTextStyle>
            </AboutOverviewCardContainer>
    );
}

export default AboutOverviewCard;