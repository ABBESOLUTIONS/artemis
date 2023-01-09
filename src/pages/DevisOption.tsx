import React from 'react';
import Page from '../components/UserLayout/UserPages';
import DevisOptionSection from '../sections/DevisOptionPage/DevisOptionSection';

function DevisOption() {
    return (
        <Page title="Devis">
            <DevisOptionSection/>
        </Page>
    );
}

export default DevisOption;