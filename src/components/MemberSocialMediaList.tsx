import { styled } from '@mui/material';
import React from 'react';
import SocialMediaButton from './SocialMediaButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const MemberSocialMediaContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
    // justifyContent:"space-around",
    margin:"10px",
    marginRight:"10px"
}))

function MemberSocialMediaList() {
    return (
        <MemberSocialMediaContainer>
            <SocialMediaButton children={<FacebookOutlinedIcon/>} link={""}/>
            <SocialMediaButton children={<TwitterIcon/>} link={""}/>
            <SocialMediaButton children={<InstagramIcon/>} link={""}/>
            <SocialMediaButton children={<LinkedInIcon/>} link={""}/>
        </MemberSocialMediaContainer>
    );
}

export default MemberSocialMediaList;