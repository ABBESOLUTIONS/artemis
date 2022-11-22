import { Button,Card, Grid, styled, Typography } from '@mui/material';
import SocialMediaList from './SocialMediaList';
import InstagramIcon from '@mui/icons-material/Instagram';
import { PROJECT_COLORS } from '../common/colors';


const MemberCardContainer= styled(Card)(({theme})=>({
    width: "300px",
    height: "395px",
    boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius:"3px",
    position:"relative",
    margin:"1px",
    [theme.breakpoints.down("md")]: {
        width:"350px",
        margin:"8px"
    },
}));
const MemberImageContainer =styled("img")(()=>({
    width:"100%",
    height:"275px",
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
            <MemberImageContainer sx={{ backgroundImage: "url('"+image+"')", backgroundSize: "100% 100%" }}/>
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
                <Button variant='contained' sx={{width:"20px",borderRadius:"100px",bgcolor:PROJECT_COLORS.primarySwatch, marginLeft:"70%", bottom:"150px", positon:"absolute"}}><InstagramIcon/></Button>
            </Grid>
        </MemberCardContainer>
    );
}

export default MemberCard;