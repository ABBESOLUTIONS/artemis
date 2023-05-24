import { styled } from '@mui/material';
import React from 'react';
import SocialMediaButton from './SocialMediaButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { REDIRECT_PAGES } from '../routes/paths';

const SocialMediaContainer=styled("div")(()=>({
    display:"flex",
    flexDirection:"row",
    // justifyContent:"space-around",
    margin:"10px",
    marginRight:"10px"
}))

function SocialMediaList() {
    return (
        <SocialMediaContainer>
            <SocialMediaButton children={<FacebookOutlinedIcon/>} link={REDIRECT_PAGES.reseauRedirection}/>
            <SocialMediaButton children={<TwitterIcon/>} link={REDIRECT_PAGES.reseauRedirection}/>
            <SocialMediaButton children={<InstagramIcon/>} link={REDIRECT_PAGES.reseauRedirection}/>
            <SocialMediaButton children={<LinkedInIcon/>} link={REDIRECT_PAGES.reseauRedirection}/>
        </SocialMediaContainer>
    );
}

export default SocialMediaList;