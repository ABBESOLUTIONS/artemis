import React from 'react';
import { Button, Card, CardContent, CardMedia, Divider, Rating, Stack, styled, Typography } from '@mui/material';
import ImageComponent from './ImageComponent';
import TextButton from './TextButton';
import { PROJECT_COLORS } from '../common/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BlogOverviewCardContainer=styled(Card)(({theme})=>({
    // position:"relative",
    width:"90%",
    height:"425px",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    paddingTop:"-20px",
    boxShadow:"none",
    position:"relative",
    margin:"15px",
    [theme.breakpoints.down("lg")]: {
        width:"90%",
        
    },
}));
 const DateContainer=styled("div")(({theme})=>({
    width:"125px",
    height:"50px",
    position:"absolute",
    backgroundColor:PROJECT_COLORS.primarySwatch,
    borderRadius:"5px",
    marginLeft:"55%",
    marginTop:"-55px",
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down("lg")]: {
        
    },
 }))

function BlogOverviewCard() {
    return (
        <BlogOverviewCardContainer>
            <CardMedia component={"img"} image="assets/images/women.png" >
            </CardMedia>
            <CardContent sx={{}}>
            <DateContainer>
                <Typography sx={{fontSize:"15px", color:"white",marginLeft:"15px"}}>22 Jul 2022</Typography>
            </DateContainer>
                <Stack direction={"row"} sx={{}} >
                    <TextButton title={'PAR FLOBERT  |  '} path={''}/>
                    <Divider  ></Divider>
                    
                    <TextButton title={'   |  ASSURANCE'} path={''}/>
                </Stack>
                <TextButton title={"Je viens d'avoir mon Permis de Conduire, comment m'y prendre? "} path={''} sx={{fontWeight:"bold", fontSize:"20px",color:"black", marginTop:"30px"}}/>
                <Button variant="outlined" startIcon={<ArrowForwardIosIcon/>} sx={{color:PROJECT_COLORS.primarySwatch, borderColor:PROJECT_COLORS.primarySwatch, fontSize:13, padding:"10px", marginBottom:"-25px", marginTop:"10px"}}>Continuer</Button>
            </CardContent>
        </BlogOverviewCardContainer>
    );
}

export default BlogOverviewCard;