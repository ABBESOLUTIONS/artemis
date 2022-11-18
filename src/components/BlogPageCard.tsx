import { Card, CardMedia, CardContent, styled, Typography, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_PAGES } from '../routes/paths';
import ImageComponent from './ImageComponent';
import TextButton from './TextButton';

const BlogPageCardContainer=styled(Card)(()=>({
    // position:"relative",
    width:"450px",
    height:"500px",
    // padding:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    margin:"60px",
    borderRadius:"0px"
}));

function BlogPageCard() {
    return (
        <BlogPageCardContainer >
            <CardMedia component={"img"} height="250"  image="assets/images/BLOG.jpg">
            </CardMedia>
            <CardContent>
                <Stack direction="row" >
                    <Typography sx={{fontsize:"20px", color:"#8C96AF", marginLeft:"15px"}}>21 juin 2021</Typography>
                    <TextButton title={"Assurance"} path={""} sx={{fontsize:"20px", color:"#8C96AF", marginLeft:"15px"}}/>
                </Stack>
                    <TextButton title={'Les sapeurs pompiers éteignent un feu à Cavailleon'} path={CLIENT_PAGES.actualite} sx={{fontWeight:"bold", fontSize:"25px"}}></TextButton>
                    <Divider sx={{margin:"10px"}}/>
                        <Stack direction="row">
                            <ImageComponent image={"assets/images/admin.jpg"} sx={{width:"35px", height:"75"}}></ImageComponent>
                            {/* <Typography sx={{textDecoration:"none"}}>PAR ADMIN</Typography> */}
                            <TextButton title={"PAR ADMIN"} path={''} sx={{textDecoration:"none", marginLeft:"12px"}}/>
                        </Stack>
            </CardContent>

        </BlogPageCardContainer>
    );
}

export default BlogPageCard;