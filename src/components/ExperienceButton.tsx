import React from 'react';
import { Button, Stack, styled, Typography } from '@mui/material';
import { PROJECT_COLORS } from '../common/colors';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import useToggle from '../hooks/useToggle';

const ExperienceButtonStyle=styled("div")(({theme})=>({
    // boxShadow:"none",
    width:"90%",
    // fontSize:"15px",
    backgroundColor:"white",
    // fontWeight:"700",
    height:"45px",
    // marginLeft:"1335px",
    display:"flex",
    flexDirection:"row",
    // justifyContent:"space-evenly",
    borderRadius:"5px",
    boxShadow:"0px 0px 9px -3px rgba(0, 0, 0, 0.25)",
    // paddingTop:"15px",
    // position:"absolute",
    '&:hover': {
        backgroundColor: PROJECT_COLORS.primarySwatch,
    },
    [theme.breakpoints.down("lg")]: {
        width:"275px",
    },
}));

interface Props {
    text:string,
}

function ExperienceButton({text}:Props) {
    const [open, setOpen] = React.useState();

    const handleOpen= (e:React.MouseEventHandler<HTMLDivElement>)=>{

    }

    return (
        <div 
        // onMouseEnter={handleOpen} 
        // onMouseLeave={endHover}
        >
            <ExperienceButtonStyle>
                <DoneAllIcon sx={{margin:"12px", '&:hover':{color: "white"}}}/>
                <Typography sx={{color:"black", margin:"12px",fontSize:18,'&:hover':{color:"white"}}}>{text}</Typography>
            </ExperienceButtonStyle>
        </div>
        // <ExperienceButtonStyle variant="contained" startIcon={<DoneAllIcon/>}>{text}</ExperienceButtonStyle>
    );
}

export default ExperienceButton;