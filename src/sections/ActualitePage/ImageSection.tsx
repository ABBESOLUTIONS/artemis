import { Button, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from '../../components/ImageComponent';
import TextButton from '../../components/TextButton';
import SectionStyle from '../../styles/SectionStyle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LittleBlogTextContainer from './LittleBlogTextContainer';

const ImageSectionStyle=styled(SectionStyle)(()=>({
    width:"calc(100% - 20px)",
    height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));
export const FirstSectionStyle=styled("div")(({theme})=>({
    width:"75%",
    // height:"1000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red",
    [theme.breakpoints.down("md")] : {
        width:"95%"
    }
}));

const UnderImageElement=styled(Grid)(({theme})=>({
    marginTop:"15px",
    width:"100%",
    [theme.breakpoints.down("md")] : {
        width:"100%",

    }

}));
const BigImageStyle=styled("img")(({theme})=>({
    width:"100%",
   
    [theme.breakpoints.down("md")] : {
        width:"100%"
    }

}));
const LittleImageStyle=styled("img")(({theme})=>({
    width:"870px",
   
    [theme.breakpoints.down("md")] : {
        width:"670px"
    }

}));
const MonthText=styled(Typography)(({theme})=>({
    margin:"15px",
    fontSize:"1em",
   
    [theme.breakpoints.down("md")] : {
        fontSize:"10px",
        margin:"5px",
    }

}));
const AssuranceText=styled(TextButton)(({theme})=>({
    margin:"15px",
    fontSize:"1em",
   
    [theme.breakpoints.down("md")] : {
        margin:"5px",
        fontSize:"5px",
    }

}));
const UnderImageButton=styled(Button)(({theme})=>({
    fontWeight:525,
    color:"grey",
    // margin:"15px",
    // fontSize:"1em",
   
    [theme.breakpoints.down("md")] : {
        // width:"30px",
        fontSize:"10px"
    },
    [theme.breakpoints.down("sm")] : {
        width:"100px",
        fontSize:"7px"
    },

}));

function ImageSection() {
    return (
        <ImageSectionStyle>
            <FirstSectionStyle>
                <Grid container xs>
                        <Grid item xs>
                        <BigImageStyle src={"assets/images/blog-1.jpg"}/>
                        </Grid>
                </Grid>
                <UnderImageElement container xs sx={{}}>
                        <Grid md={7} lg={7} xs={5} sx={{}}>
                            <Stack direction={"row"} sx={{ alignItems:"center",  margin:"0px", left:"0px"}}>
                                <ImageComponent image="assets/images/admin.jpg" sx={{ }}/>
                                {/* <TextButton title={"Publié par Admin"} path={''} /> */}
                                <UnderImageButton>Publié par Admin</UnderImageButton>
                            </Stack>
                        </Grid>
                        <Grid md={3} lg={3}  xs={4} sx={{}}>
                             {/* <MonthText sx={{}} ><CalendarMonthIcon/> 14 janvier 2022</MonthText> */}
                             <UnderImageButton startIcon={<CalendarMonthIcon/>}>14 Janvier 2022</UnderImageButton>
                        </Grid>
                        <Grid md={2} lg={2}  xs={3} sx={{}}>
                            {/* <Stack direction={"row"} sx={{margin:"15px", marginRight:"0px"}}><BookmarkBorderIcon/><AssuranceText title={"ASSURANCE"} path={''}/></Stack> */}
                            <Stack direction={"row"} sx={{marginRight:"0px"}}>
                                <UnderImageButton startIcon={<BookmarkBorderIcon/>}>ASSURANCE</UnderImageButton>
                            </Stack>
                        </Grid>
                </UnderImageElement>

            </FirstSectionStyle>
            {/* <BigImageStyle src={"assets/images/blog-1.jpg"}/>
            <ImageComponent image="assets/images/blog-1.jpg"/>
            <Stack direction="row" sx={{justifyContent:"space-around"}}>
                <>
                <ImageComponent image="assets/images/admin.jpg"/>
                <TextButton title={"Publié par Admin"} path={''} />
                </>
                <>
                <Typography><CalendarMonthIcon/> 14 janvier 2022</Typography>
                </>
            </Stack>
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
            <LittleBlogTextContainer/>  */}
        </ImageSectionStyle>
    );
}

export default ImageSection;