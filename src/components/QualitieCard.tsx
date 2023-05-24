import React from 'react';
import { styled, SxProps, Card, Typography} from '@mui/material';
import ImageComponent from './ImageComponent';


const QualitieCardContainer=styled(Card)(({theme})=>({
    width:"80%",
    minHeight:"445px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    padding:"15px",
    boxShadow: "1px 1px 7px 0px rgb(0 0 0 / 15%), 0px 0px 2px 0px rgb(0 0 0 / 5%)",
    top:0,
    transition: "all ease 300ms",
    '&:hover':{
        transform: "scale(1.03)"
    },
    // margin:"10px",
    [theme.breakpoints.down("lg")]: {
        // // width:"auto",
        // width:"100%",
        // minHeight:"175px"
    },
    [theme.breakpoints.down("sm")]: {
        
    },
    
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
            <Typography sx={{fontSize:"20px", fontWeight:"bold", marginBottom:"-55px"}}>{titre}</Typography>
            <Typography sx={{}}>{texte}</Typography>
        </QualitieCardContainer>
    );
}

export default QualitieCard;