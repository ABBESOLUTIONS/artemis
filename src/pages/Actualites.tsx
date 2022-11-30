import React from 'react';
import LittleBlogTextContainer from '../sections/ActualitePage/LittleBlogTextContainer';
import Page from '../components/Pages';
import AssuranceOptionLinkSection from '../sections/ActualitePage/AssuranceOptionLinkSection';
import CitationSection from '../sections/ActualitePage/CitationSection';
import ImageSection from '../sections/ActualitePage/ImageSection';
import TheLittleBlog from '../sections/ActualitePage/TheLittleBlog';


function Actualites() {
    return (
        <Page title={"Actualites"}>
            <ImageSection/>
            <TheLittleBlog/>
            <CitationSection/>
            <AssuranceOptionLinkSection/>
        </Page>
    );
}

export default Actualites;