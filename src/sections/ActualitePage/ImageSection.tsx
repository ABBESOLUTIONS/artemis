import { Stack, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import TextButton from '../../components/TextButton';
import SectionStyle from '../../styles/SectionStyle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LittleBlogTextContainer from '../../components/LittleBlogTextContainer';

const ImageSectionStyle=styled(SectionStyle)(()=>({
    // width:"100%",
    height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

const UnderImageElement=styled("div")(()=>({
    width:"88%",
    // height:"600px",
    display:"flex",
    flexDirection:"row",
    // alignItems:"center",
    justifyContent:"space-around",
}));

function ImageSection() {
    return (
        <ImageSectionStyle>
            <ImageComponent image="assets/images/blog-1.jpg"/>
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
                <Stack direction={"row"} sx={{ alignItems:"center", justifyContent:"center", margin:"15px"}}>
                    <ImageComponent image="assets/images/admin.jpg" sx={{margin:"15px"}}/>
                    <TextButton title={"Publié par Admin"} path={''} />
                </Stack>
                <Stack direction={"row"} sx={{alignItems:"center", justifyContent:"center", margin:"15px"}}>
                    <Typography sx={{margin:"15px"}}><CalendarMonthIcon/> 14 janvier 2022</Typography>
                    <Stack direction={"row"} sx={{margin:"15px"}}><BookmarkBorderIcon/><TextButton title={"ASSURANCE"} path={''}/></Stack>
                </Stack>
            </UnderImageElement>
            <LittleBlogTextContainer/> 
        </ImageSectionStyle>
    );
}

export default ImageSection;