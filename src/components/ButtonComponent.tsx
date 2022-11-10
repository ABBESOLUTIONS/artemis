import React from 'react';
import { Button, styled, SxProps } from '@mui/material';

const ButtonComponentContainer= styled(Button)(()=>({
    
}));
interface Props {
    libele: string,
    children:React.ReactNode,
    settings:string,
    sx?: SxProps
}

function ButtonComponent({children, libele = "", sx = {},settings}: Props) {
    return (
        <ButtonComponentContainer startIcon={children} >{libele}</ButtonComponentContainer>
    );
}

export default ButtonComponent;