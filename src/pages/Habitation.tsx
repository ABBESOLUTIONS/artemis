import React from 'react';
import Page from '../components/UserLayout/UserPages';
import HabitationForm from '../sections/HabitationPage/HabitationForm';

function Habitation() {
    return (
        <Page title="Devis-Habitation">
            <HabitationForm/>
        </Page>
    );
}

export default Habitation;