import React from 'react';
import { styled, SxProps, Typography, Card, Container} from '@mui/material';


const AboutOverviewCardContainer=styled(Card)(()=>({
    width:"600px",
    minHeight:"100px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    padding:"10px",
    margin:"20px",
}));

const AboutIconeCircle= styled("div")(()=>({
    width:"15%",
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