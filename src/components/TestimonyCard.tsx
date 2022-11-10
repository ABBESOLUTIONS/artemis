import { Card, Rating, styled, Typography } from '@mui/material';
import React from 'react';
const TestimonyCardContainer=styled(Card)(()=>({
    // position:"relative",
    width:"275px",
    height:"450px",
    padding:"30px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
}));
const TestimonyCardProfilImg= styled("img")(()=>({
    width:"100px",
    height:"100px",
    borderRadius:"50%"
}));
const TestimonyCardQuotes= styled("img")(()=>({
    width: "30px",
    height: "30px",
}));
interface Props {
    text: string,
    profilImage: string,
    name: string,
};

function TestimonyCard({text,profilImage,name}: Props) {
    return (
        <TestimonyCardContainer>
            <TestimonyCardProfilImg src={profilImage}/>
            <TestimonyCardQuotes src={"assets/images/quotes.png"} sx={{position:"absolute", marginTop:"-130px", marginLeft:"75px"}}/>
            <Rating name="read-only" defaultValue={4} size="small" />
            <Typography sx={{fontSize:"18px"}}>{text}</Typography>
            <Typography sx={{fontWeight:"bold", fontSize:"20px"}}>{name}</Typography>
            <Typography sx={{color:"#4AA99F", fontSize:"15px"}}>Client</Typography>
        </TestimonyCardContainer>
    );
}

export default TestimonyCard;