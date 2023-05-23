import React from 'react';
import { styled, SxProps, Typography, Card, Container, Stack} from '@mui/material';
import TextButton from './TextButton';
import { PROJECT_COLORS } from '../common/colors';
import ImageComponent from './ImageComponent';


const OneServiceDetailsContainer=styled(Card)(({theme})=>({
    minWidth:"100%",
    // minWidth:"calc(100% - 60px)",
    minHeight:"175px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    padding:"15px",
    // margin:"10px",
    [theme.breakpoints.down("lg")]: {
        flexDirection:"column",
        minWidth:"50%",
        minHeight:"250px",
    },
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        minWidth:"60%",
        minHeight:"300px",
    },
    [theme.breakpoints.down("xs")]: {
        flexDirection:"column",
        minWidth:"100%",
        minHeight:"80px",
    },

}));

const AboutIconeCircle= styled("div")(()=>({
    width:"110px",
    height:"110px",
    borderRadius:"50%",
    backgroundColor:"#E7F4F2",
    // backgroundSize:"auto",
    backgroundRepeat:"no-repeat",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // position:"absolute",
}));
const DetailsStyle= styled(Typography)(({theme})=>({
    maxWidth:"375px",
    marginTop:"10px",
    marginLeft:"20px",
    [theme.breakpoints.down("md")]: {
    width:"100%",
    marginLeft:"10px",
        
    },
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
                {/* <AboutIconeCircle sx={{backgroundImage:"url('"+icone+"')"}}/> */}
                <AboutIconeCircle>
                    <ImageComponent image={icone}/>
                </AboutIconeCircle>
                <Stack direction={"column"} sx={{}}>
                    <TextButton title={title} path={''} sx={{fontWeight:"bold",    marginLeft:"20px", fontSize:"18px",textDecoration:"none",color:"black", '&hover':{color:PROJECT_COLORS.primarySwatch}}}/>
                    <DetailsStyle>{detail}</DetailsStyle>
                </Stack>
            </OneServiceDetailsContainer>
        </Container>
    );
}

export default OneServiceDetails;