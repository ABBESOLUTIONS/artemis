import { Card, Rating, styled, SxProps, Typography } from '@mui/material';
import React from 'react';
const TestimonyCardContainer=styled(Card)(({theme})=>({
    // position:"relative",
    width:"275px",
    minHeight:"425px",
    padding:"30px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    [theme.breakpoints.down("lg")]: {
        width:"90%",
        minHeight:"350px",
        padding:"10px",
    },
    // [theme.breakpoints.down("md")]: {
    //     width:"300px"
    // },
}));
const TestimonyCardProfilImg= styled("img")(({theme})=>({
    width:"100px",
    height:"100px",
    borderRadius:"50%",
    [theme.breakpoints.down("lg")]: {
        width:"75px",
        height:"75px",
        borderRadius:"50%",
    },
    [theme.breakpoints.down("md")]: {
        width:"90px",
        height:"90px",
        borderRadius:"50%",
    },
}));
const TestimonyCardQuotes= styled("img")(()=>({
    width: "30px",
    height: "30px",
    position:"absolute", 
    marginTop:"75px", 
    marginLeft:"-20px",
}));
const QuotesImage= styled("div")(()=>({
    position:"relative",
}));
const TextTypo= styled(Typography)(({theme})=>({
    fontSize:"1em",
    [theme.breakpoints.down("lg")]: {
        
    },
}));
const NameTypo= styled(Typography)(({theme})=>({
    fontWeight:"bold", 
    fontSize:"20px",
    [theme.breakpoints.down("lg")]: {
        
    },
}));
const ClientTypo= styled(Typography)(({theme})=>({
    color:"#4AA99F", 
    fontSize:"15px",
    [theme.breakpoints.down("lg")]: {
        
    },
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
                <TestimonyCardQuotes src={"assets/images/quotes.png"} sx={{}}/>
            </QuotesImage>
            <Rating name="read-only" defaultValue={4} size="small" />
            <TextTypo sx={{}}>{text}</TextTypo>
            <NameTypo sx={{}}>{name}</NameTypo>
            <ClientTypo sx={{}}>Client</ClientTypo>
        </TestimonyCardContainer>
    );
}

export default TestimonyCard;