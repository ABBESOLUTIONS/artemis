import React from 'react';
import LittleBlogTextContainer from '../components/LittleBlogTextContainer';
import Page from '../components/Pages';
import ImageSection from '../sections/ActualitePage/ImageSection';


function Actualites() {
    return (
        <Page title={"Actualites"}>
            <ImageSection/>
        </Page>
    );
}

export default Actualites;