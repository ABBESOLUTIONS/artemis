import { Button,Card, CardMedia, Grid, styled, Typography } from '@mui/material';
import SocialMediaList from './SocialMediaList';
import InstagramIcon from '@mui/icons-material/Instagram';
import { PROJECT_COLORS } from '../common/colors';
import { EmailSharp } from '@mui/icons-material';


const MemberCardContainer= styled(Card)(({theme})=>({
    width: "300px",
    minHeight: "395px",
    boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius:"3px",
    position:"relative",
    margin:"1px",
    [theme.breakpoints.down("md")]: {
        width:"300px",
        margin:"8px"
    },
}));
const MemberImageContainer =styled("img")(()=>({
    width:"100%",
    minHeight:"275px",
    // borderRadius:"19px 19px 0px 0px",
}));
interface Props {
    image: string,
    nom: string,
    poste: string,
}

function MemberCard({image,nom,poste}: Props) {
    return (
        <MemberCardContainer>
            <CardMedia>
                <MemberImageContainer sx={{ backgroundImage: "url('"+image+"')", backgroundSize: "100% 100%" }}/>
                <Button href='mailto:contact@artemisassurance.fr' variant='contained' sx={{width:"20px",borderRadius:"100px",bgcolor:PROJECT_COLORS.primarySwatch, marginLeft:"70%", bottom:25, positon:"absolute"}}><EmailSharp /></Button>            </CardMedia>
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={{fontWeight:"bold", margin:"10px", fontSize:"20px"}}>{nom}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{margin:"-5px", fontSize:"13px", color:"#808080", width:"80%", marginLeft:"15px"}}>{poste}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <SocialMediaList/>
                </Grid>
            </Grid>
        </MemberCardContainer>
    );
}

export default MemberCard;