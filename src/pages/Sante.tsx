import React from 'react';
import Page from '../components/UserLayout/UserPages';
import SanteForm from '../sections/SantePage/SanteForm';

function Sante() {
    return (
        <Page title="Formulaire-Sante">
           <SanteForm/>
        </Page>
    );
}

export default Sante;