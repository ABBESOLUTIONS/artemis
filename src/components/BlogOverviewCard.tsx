import React from 'react';
import { Button, Card, CardContent, CardMedia, Divider, Rating, Stack, styled, Typography } from '@mui/material';
import ImageComponent from './ImageComponent';
import TextButton from './TextButton';
import { PROJECT_COLORS } from '../common/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BlogOverviewCardContainer=styled(Card)(({theme})=>({
    // position:"relative",
    width:"400px",
    height:"450px",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    paddingTop:"-20px",
    boxShadow:"none",
    position:"relative",
    margin:"25px",
    [theme.breakpoints.down("lg")]: {
        
    },
}));
 const DateContainer=styled("div")(()=>({
    width:"125px",
    height:"50px",
    position:"absolute",
    backgroundColor:PROJECT_COLORS.primarySwatch,
    borderRadius:"5px",
    marginLeft:"250px",
    marginTop:"75px",
    display:"flex",
    alignItems:"center"
 }))

function BlogOverviewCard() {
    return (
        <BlogOverviewCardContainer>
            <CardMedia component={"img"} image="assets/images/women.png" >
            </CardMedia>
            <DateContainer>
                <Typography sx={{fontSize:"15px", color:"white",marginLeft:"15px"}}>22 Jul 2022</Typography>
            </DateContainer>
            <CardContent sx={{}}>
                <Stack direction={"row"} sx={{}} >
                    <TextButton title={'PAR FLOBERT'} path={''}/>
                    <Divider ></Divider>
                    <TextButton title={'ASSURANCE'} path={''}/>
                </Stack>
                <TextButton title={"Je viens d'avoir mon Permis de Conduire, comment m'y prendre?"} path={''} sx={{fontWeight:"bold", fontSize:"20px",color:"black", marginTop:"30px"}}/>
                <Button variant="outlined" startIcon={<ArrowForwardIosIcon/>} sx={{color:PROJECT_COLORS.primarySwatch, borderColor:PROJECT_COLORS.primarySwatch, fontSize:13, padding:"10px", marginBottom:"-25px", marginTop:"10px"}}>Continuer</Button>
            </CardContent>
        </BlogOverviewCardContainer>
    );
}

export default BlogOverviewCard;