import { Container, Grid, styled, Typography } from '@mui/material';
import { PROJECT_COLORS } from '../../common/colors';
import { members } from '../../common/Data';
import MemberCard from '../../components/MemberCard';
import SectionStyle from '../../styles/SectionStyle';

const MembersContainer = styled(SectionStyle)(() => ({
    minHeight: "750px",
    display: "flex",
    flexDirection:"column",
    justifyContent:"space-around",

}));

const QualityTitle = styled(Typography)(({theme}) => ({
    // fontFamily: "InterBold,sans-serif !important",
    fontSize: "35px",
    fontWeight: 800,
    width:"100%",
    [theme.breakpoints.down("lg")]: {
        fontSize: "25px",
        fontWeight: 400,
        textAlign: "center",
    width:"100%",
        

    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "30px",
        fontWeight: 400,
        textAlign: "center"
    },
}));


function Members() {
    return (
        <MembersContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>NOTRE EQUIPE</Typography>
            {/* <Typography variant='h3' sx={{textAlign:"center", fontWeight:"bold", fontSize:"55px", marginBottom:"50px"}}>Notre équipe de professionnels compétents</Typography> */}
            <QualityTitle>Notre équipe de professionnels compétents</QualityTitle>
            <Grid container sx={{margintop:"50px"}} >
                    {
                        members.map((OneMember, index) => <Grid key={index} item xs ><MemberCard image={OneMember.picture} nom={OneMember.name} poste={OneMember.job} /></Grid>)
                    }
                </Grid>
            <Typography sx={{textAlign:"center", fontWeight:"75", fontSize:"18px", marginTop:"30px"}}>Toute notre équipe est contituée de professionnels compétents et diplomés en Assurance.</Typography>
        </MembersContainer>
    );
}

export default Members;