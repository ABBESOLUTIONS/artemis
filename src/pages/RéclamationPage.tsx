import React from 'react';
import Page from '../components/Pages';
import { styled } from '@mui/material';
import DeclarationForm from '../sections/DéclarationPage/DeclarationForm';

const ReclamationSinistreContainer= styled("div")(()=>({

}))

function RéclamationPage() {
    return (
        <Page title={'Réclamation'}>
            <ReclamationSinistreContainer>
                <DeclarationForm/>
            </ReclamationSinistreContainer>
        </Page>
    );
}

export default RéclamationPage;