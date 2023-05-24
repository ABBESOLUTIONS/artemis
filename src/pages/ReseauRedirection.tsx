import React from 'react';
import Page from '../components/Pages';
import RedirectionSection from '../sections/ReseauRedirection/RedirectionSection';

function ReseauRedirection() {
    return (
        <Page title='Reseau' sx={{paddingTop:"0px"}}>
            <RedirectionSection/>
        </Page>
    );
}

export default ReseauRedirection;