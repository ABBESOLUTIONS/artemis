import React from 'react';
import Page from '../components/Pages';
import DevisOptionSection from '../sections/DevisOptionPage/DevisOptionSection';
import { styled } from '@mui/material';

const DevisOptionStyle= styled("div")(()=>({
    
}))

function DevisOption() {
    return (
        <Page title="Devis">
            <DevisOptionStyle>
                <DevisOptionSection/>
            </DevisOptionStyle>
        </Page>
    );
}

export default DevisOption;