import React from 'react';
import { styled, SxProps, Typography, Card, Container} from '@mui/material';


const AboutOverviewCardContainer=styled(Card)(({theme})=>({
    minWidth:"550px",
    minHeight:"100px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    padding:"10px",
    margin:"10px",
    [theme.breakpoints.down("md")]: {
        minWidth:"390px",
        height:"200px",
        flexDirection:"column",   
    },
}));

const AboutIconeCircle= styled("div")(()=>({
    width:"85px",
    height:"85px",
    borderRadius:"50%",
    backgroundColor:"#E7F4F2",
}));

interface Props {
    icone: string,
    detail: string,
    
}

function AboutOverviewCard({icone,detail}: Props) {
    return (
        <Container>
            <AboutOverviewCardContainer>
                <AboutIconeCircle/>
                <Typography sx={{width:"75%"}}>{detail}</Typography>
            </AboutOverviewCardContainer>
        </Container>
    );
}

export default AboutOverviewCard;