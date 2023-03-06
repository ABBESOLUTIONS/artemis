import React from 'react';
import Page from '../components/Pages';
import ResetPasswordSection from '../sections/ResetPasswordPage/ResetPasswordSection';

function ResetPassword() {
    return (
        <Page title="Nouveau Mot de Passe">
            <ResetPasswordSection/>
        </Page>
    );
}

export default ResetPassword;