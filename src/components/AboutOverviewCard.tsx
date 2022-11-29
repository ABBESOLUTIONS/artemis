import React from 'react';
import { styled, SxProps, Typography, Card, Container} from '@mui/material';
import ImageComponent from './ImageComponent';


const AboutOverviewCardContainer=styled(Card)(({theme})=>({
    minWidth:"550px",
    minHeight:"100px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    padding:"10px",
    margin:"10px",
    transition: "all ease 300ms",
    '&:hover':{
        transform: "scale(1.03)"
    },
    [theme.breakpoints.down("lg")]: {
        minWidth:"75%",
        minHeight:"150px",
        flexDirection:"row",   
    },
    [theme.breakpoints.down("sm")]: {
        minWidth:"75%",
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
    fontSize: "16px",
    // width:"100%",
    color:"#616161",
    maxWidth:"425px",
    [theme.breakpoints.down("lg")]: {
        fontSize: "15px",
        textAlign: "center"
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "13px",
        textAlign: "center",
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