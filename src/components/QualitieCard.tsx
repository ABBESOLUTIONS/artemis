import React from 'react';
import { styled, SxProps, Card, Typography} from '@mui/material';
import ImageComponent from './ImageComponent';


const QualitieCardContainer=styled(Card)(({theme})=>({
    width:"250px",
    minHeight:"450px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    padding:"15px",
    margin:"10px",
    [theme.breakpoints.down("sm")]: {
        // width:"auto",
        Width:"315px",
        height:"275px"
    }
}))

interface Props {
    illus:string,
    titre:string,
    texte:string,
}

function QualitieCard({illus,titre,texte}: Props) {
    return (
        <QualitieCardContainer>
            <ImageComponent image={illus} sx={{width:"80px"}}/>
            <Typography sx={{fontSize:"20px", fontWeight:"bold"}}>{titre}</Typography>
            <Typography sx={{}}>{texte}</Typography>
        </QualitieCardContainer>
    );
}

export default QualitieCard;