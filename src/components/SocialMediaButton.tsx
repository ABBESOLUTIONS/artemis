import { styled } from '@mui/material';
import  { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const SocialMediaButtonContainer= styled(Link)(()=>({
    color:"#138f82",
    margin:"10px"
}));

interface Props{
    children: ReactNode,
    link: string,
}

function SocialMediaButton({children, link}: Props) {
    return (
        <SocialMediaButtonContainer to={link}>
            {children}
        </SocialMediaButtonContainer>
    );
}

export default SocialMediaButton;