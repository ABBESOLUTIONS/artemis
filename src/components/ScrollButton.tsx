import { Button, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PROJECT_COLORS } from '../common/colors';
import FadeVariants from '../variants/FadeVariants';
import Fade from './animation/Fade';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollButtonStyled = styled(Button)(()=>({
    height:"50px",
    width:"55px",
    borderRadius:"50%",
    position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: PROJECT_COLORS.primarySwatch,
          color: '#fff',
          textAlign: 'center',
          "&:hover" :{
            backgroundColor:"black",
          }
}))

function ScrollButton() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <div>
            {
                showTopBtn && (
                        <ScrollButtonStyled onClick={() => {
                        window.scrollTo({top:0, left:0, behavior:"smooth"})
                    }}>
                        <KeyboardArrowUpIcon/>
                    </ScrollButtonStyled>
                    
                )
            }
        </div>
    );
}

export default ScrollButton;