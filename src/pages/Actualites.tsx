import React from 'react';
import LittleBlogTextContainer from '../components/LittleBlogTextContainer';
import Page from '../components/Pages';
import AssuranceOptionLinkSection from '../sections/ActualitePage/AssuranceOptionLinkSection';
import CitationSection from '../sections/ActualitePage/CitationSection';
import ImageSection from '../sections/ActualitePage/ImageSection';


function Actualites() {
    return (
        <Page title={"Actualites"}>
            <ImageSection/>
            <CitationSection/>
            <AssuranceOptionLinkSection/>
        </Page>
    );
}

export default Actualites;