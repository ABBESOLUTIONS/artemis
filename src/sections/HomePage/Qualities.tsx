import React from 'react';
import { styled, SxProps, Container,Grid, Typography } from '@mui/material';
import QualitieCard from '../../components/QualitieCard';
import { qualitiesInfo } from '../../common/Data';
import { PROJECT_COLORS } from '../../common/colors';

const QualitiesContainer=styled("div")(()=>({
    width:"100%",
    minHeight:"500px",
    diplay:"flex",
    flexDirection:"row",
    padding:"30px"
}))

function Qualities() {
    return (
        <QualitiesContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>NOS QUALITES</Typography>
            <Typography variant='h3' sx={{textAlign:"center", fontWeight:"bold", fontSize:"45px", marginBottom:"50px"}}>Ce qui nous distingue</Typography>
            <Grid container sx={{margintop:""}} spacing={1}>
                {
                    qualitiesInfo.map((oneQualitie,index)=> <Grid key={index} item xs={3} ><QualitieCard illus={oneQualitie.icone} titre={oneQualitie.title} texte={oneQualitie.text}/></Grid>)
                }
            </Grid>
        </QualitiesContainer>
    );
}

export default Qualities;