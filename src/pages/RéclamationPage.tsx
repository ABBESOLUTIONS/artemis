import React from 'react';
import Page from '../components/Pages';
import { styled } from '@mui/material';
import DeclarationForm from '../sections/DéclarationPage/DeclarationForm';
import HeroComponent from '../components/HeroComponent';

const ReclamationSinistreContainer= styled("div")(()=>({

}))

function RéclamationPage() {
    return (
        <Page title={'Réclamation'}>
            <ReclamationSinistreContainer>
                <HeroComponent bigTitle={'RECLAMATION'} littleTitle={'Reclamation'}/>
                <DeclarationForm/>
            </ReclamationSinistreContainer>
        </Page>
    );
}

export default RéclamationPage;