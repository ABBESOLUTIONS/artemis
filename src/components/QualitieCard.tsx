import React from 'react';
import { styled, SxProps, Card, Typography} from '@mui/material';
import ImageComponent from './ImageComponent';


const QualitieCardContainer=styled(Card)(()=>({
    width:"260px",
    minHeight:"450px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    padding:"25px",
}))

interface Props {
    illus:string,
    titre:string,
    texte:string,
}

function QualitieCard({illus,titre,texte}: Props) {
    return (
        <QualitieCardContainer>
            <ImageComponent image={illus}/>
            <Typography sx={{fontSize:"20px", fontWeight:"bold", marginTop:"-50px", marginBottom:"20px"}}>{titre}</Typography>
            <Typography sx={{}}>{texte}</Typography>
        </QualitieCardContainer>
    );
}

export default QualitieCard;