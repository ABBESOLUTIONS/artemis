import { styled } from '@mui/material';
import React from 'react';
import Page from '../components/Pages';
import SinistreForm from '../sections/SinistrePage/SinistreForm';
import HeroComponent from '../components/HeroComponent';

const DeclarationSinistreContainer= styled("div")(()=>({

}))

function DeclarationSinistre() {
    return (
        <Page title="Declaration-Sinistre" >
            <DeclarationSinistreContainer>
                <HeroComponent bigTitle={'SINISTRE'} littleTitle={'Sinistre'}/>
                <SinistreForm />
            </DeclarationSinistreContainer>
        </Page>
        
    );
}

export default DeclarationSinistre;