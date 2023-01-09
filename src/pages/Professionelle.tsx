import React from 'react';
import Page from '../components/UserLayout/UserPages';
import ProfessionelleForm from '../sections/ProfessionellePage.tsx/ProfessionelleForm';

function Professionelle() {
    return (
        <Page title="Devis-Pro">
           <ProfessionelleForm/>
        </Page>
    );
}

export default Professionelle;