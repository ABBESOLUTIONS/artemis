import { styled } from '@mui/material';
import React from 'react';
import Page from '../components/Pages';
import SinistreForm from '../sections/SinistrePage/SinistreForm';

const DeclarationSinistreContainer= styled("div")(()=>({

}))

function DeclarationSinistre() {
    return (
        <Page title="Declaration-Sinistre" >
            <DeclarationSinistreContainer>
                <SinistreForm />
            </DeclarationSinistreContainer>
        </Page>
        
    );
}

export default DeclarationSinistre;