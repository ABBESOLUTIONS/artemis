import React from 'react';
import DeconnectModal from '../components/DeconnectModal';
import Page from '../components/UserLayout/UserPages';

function Deconnexion() {
    return (
        <Page title={'Deconnexion'}>
            <DeconnectModal/>
        </Page>
    );
}

export default Deconnexion;