import { styled } from '@mui/material';
import React from 'react';
import SinistreForm from '../sections/SinistrePage/SinistreForm';

const DeclarationSinistreContainer= styled("div")(()=>({

}))

function DeclarationSinistre() {
    return (
            <DeclarationSinistreContainer>
                <SinistreForm />
            </DeclarationSinistreContainer>
        
    );
}

export default DeclarationSinistre;