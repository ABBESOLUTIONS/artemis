import React from 'react';
import { styled, SxProps, Typography, Card, Container, Stack} from '@mui/material';
import TextButton from './TextButton';
import { PROJECT_COLORS } from '../common/colors';


const OneServiceDetailsContainer=styled(Card)(()=>({
    width:"625px",
    minHeight:"135px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    padding:"15px",
    margin:"15px"
    // margin:"20px",
}));

const AboutIconeCircle= styled("div")(()=>({
    width:"110px",
    height:"110px",
    borderRadius:"50%",
    backgroundColor:"#E7F4F2",
    backgroundSize:"cover"
    // position:"absolute",
}));

interface Props {
    icone: string,
    title: string,
    detail: string,
    
}

function OneServiceDetails({icone, title, detail}:Props) {
    return (
        <Container>
            <OneServiceDetailsContainer>
                <AboutIconeCircle sx={{backgroundImage:"url('"+icone+"')"}}/>
                <Stack direction={"column"} sx={{}}>
                    <TextButton title={title} path={''} sx={{fontWeight:"bold", fontSize:"18px",textDecoration:"none",color:"black", '&hover':{color:PROJECT_COLORS.primarySwatch}}}/>
                    <Typography sx={{width:"475px", marginTop:"10px"}}>{detail}</Typography>
                </Stack>
            </OneServiceDetailsContainer>
        </Container>
    );
}

export default OneServiceDetails;