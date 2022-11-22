import { Card, Rating, styled, SxProps, Typography } from '@mui/material';
import React from 'react';
const TestimonyCardContainer=styled(Card)(({theme})=>({
    // position:"relative",
    width:"275px",
    height:"425px",
    padding:"30px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    [theme.breakpoints.down("lg")]: {
        width:"325px"
    },
    [theme.breakpoints.down("md")]: {
        width:"300px"
    },
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
const QuotesImage= styled("div")(()=>({
    position:"relative",
}));
interface Props {
    text: string,
    profilImage: string,
    name: string,
    sx?: SxProps,
};

function TestimonyCard({text,profilImage,name, sx={}}: Props) {
    return (
        <TestimonyCardContainer sx={{...sx}}>
            <QuotesImage>
                <TestimonyCardProfilImg src={profilImage}/>
                <TestimonyCardQuotes src={"assets/images/quotes.png"} sx={{position:"absolute", marginTop:"75px", marginLeft:"-20px"}}/>
            </QuotesImage>
            <Rating name="read-only" defaultValue={4} size="small" />
            <Typography sx={{fontSize:"18px"}}>{text}</Typography>
            <Typography sx={{fontWeight:"bold", fontSize:"20px"}}>{name}</Typography>
            <Typography sx={{color:"#4AA99F", fontSize:"15px"}}>Client</Typography>
        </TestimonyCardContainer>
    );
}

export default TestimonyCard;