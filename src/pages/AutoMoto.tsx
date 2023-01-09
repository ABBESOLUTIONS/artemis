import React from 'react';
import Page from '../components/UserLayout/UserPages';
import AutoMotoForm from '../sections/AutoMotoPage/AutoMotoForm';

function AutoMoto() {
    return (
        <Page title="Devis-AutoMoto">
            <AutoMotoForm/> 
        </Page>
    );
}

export default AutoMoto;