import React from 'react';
import Page from '../../components/UserLayout/UserPages';
import DevisOptionSection from '../../sections/DevisOptionPage/DevisOptionSection';

function ContratsList() {
    return (
        <Page title="devis">
            <DevisOptionSection/>
        </Page>
    );
}

export default ContratsList;