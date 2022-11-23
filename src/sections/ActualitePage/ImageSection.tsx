import { Stack, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import TextButton from '../../components/TextButton';
import SectionStyle from '../../styles/SectionStyle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LittleBlogTextContainer from '../../components/LittleBlogTextContainer';

const ImageSectionStyle=styled(SectionStyle)(()=>({
    width:"100%",
    height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

const UnderImageElement=styled("div")(({theme})=>({
    width:"885px",
    // height:"600px",
    display:"flex",
    flexDirection:"row",
    // alignItems:"center",
    justifyContent:"space-between",
    // backgroundColor:"red",
    [theme.breakpoints.down("md")] : {
        width:"675px"
    }

}));
const BigImageStyle=styled("img")(({theme})=>({
    width:"870px",
   
    [theme.breakpoints.down("md")] : {
        width:"670px"
    }

}));
const LittleImageStyle=styled("img")(({theme})=>({
    width:"870px",
   
    [theme.breakpoints.down("md")] : {
        width:"670px"
    }

}));

function ImageSection() {
    return (
        <ImageSectionStyle>
            <BigImageStyle src={"assets/images/blog-1.jpg"}/>
            {/* <ImageComponent image="assets/images/blog-1.jpg"/> */}
            {/* <Stack direction="row" sx={{justifyContent:"space-around"}}>
                <>
                <ImageComponent image="assets/images/admin.jpg"/>
                <TextButton title={"Publié par Admin"} path={''} />
                </>
                <>
                <Typography><CalendarMonthIcon/> 14 janvier 2022</Typography>
                </>
            </Stack> */}
            <UnderImageElement>
                <Stack direction={"row"} sx={{ alignItems:"center", justifyContent:"center", margin:"15px", marginLeft:"0px"}}>
                    <ImageComponent image="assets/images/admin.jpg" sx={{margin:"15px" }}/>
                    <TextButton title={"Publié par Admin"} path={''} />
                </Stack>
                <Stack direction={"row"} sx={{alignItems:"center", justifyContent:"center", margin:"15px"}}>
                    <Typography sx={{margin:"15px"}}><CalendarMonthIcon/> 14 janvier 2022</Typography>
                    <Stack direction={"row"} sx={{margin:"15px", marginRight:"0px"}}><BookmarkBorderIcon/><TextButton title={"ASSURANCE"} path={''}/></Stack>
                </Stack>
            </UnderImageElement>
            <LittleBlogTextContainer/> 
        </ImageSectionStyle>
    );
}

export default ImageSection;