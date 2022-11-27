import React from 'react';
import { styled, SxProps, Container,Grid, Typography } from '@mui/material';
import QualitieCard from '../../components/QualitieCard';
import { qualitiesInfo } from '../../common/Data';
import { PROJECT_COLORS } from '../../common/colors';

const QualitiesContainer=styled("div")(()=>({
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "80px",
    paddingBottom: "80px",
}));

export const QualityTitle = styled(Typography)(({theme}) => ({
    // fontFamily: "InterBold,sans-serif !important",
    fontSize: "35px",
    fontWeight: 800,
    textAlign:"center",
    marginTop:"0px",
    marginBottom:"50px",
    [theme.breakpoints.down("md")]: {
        fontSize: "25px",
        fontWeight: 400,
        textAlign: "center"
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "30px",
        fontWeight: 400,
        textAlign: "center"
    },
}));

const QualitiesCardContainer = styled("div")(({theme}) => ({
    // width: "100%",
    // display: "flex",
    // alignItems: "center",
    // [theme.breakpoints.down("lg")]: {
    //     flexDirection: "column",
    // },
}));

function Qualities() {
    return (
        <QualitiesContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>NOS QUALITES</Typography>
            {/* <Typography variant='h3' sx={{textAlign:"center", fontWeight:"bold", fontSize:"45px", marginBottom:"50px"}}></Typography> */}
            <QualityTitle>Ce qui nous distingue</QualityTitle>
            <Grid container xs  >
                {
                    qualitiesInfo.map((oneQualitie,index)=> <Grid key={index} item xs alignItems={"center"} ><QualitieCard illus={oneQualitie.icone} titre={oneQualitie.title} texte={oneQualitie.text}/></Grid>)
                }
            </Grid>
            {/* <Grid container sx={{margintop:""}} spacing={1}>
                {
                    qualitiesInfo.map((oneQualitie,index)=> <Grid key={index} item xs={3} ><QualitieCard illus={oneQualitie.icone} titre={oneQualitie.title} texte={oneQualitie.text}/></Grid>)
                }
            </Grid> */}
        </QualitiesContainer>
    );
}

export default Qualities;