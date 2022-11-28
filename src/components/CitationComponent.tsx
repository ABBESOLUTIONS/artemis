import { styled, Typography } from '@mui/material';
import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';


const CitationStyle=styled("div")(({theme})=>({
    width:"98%",
    height:"42px",
    borderRadius:"5px",
    display:"flex",
    flexDirection:"row",
    // justifyContent:"center",
    alignItems:"center",
    boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
   
    [theme.breakpoints.down("md")] : {
    }

}));
interface Props {
    text:string,
}

function CitationComponent({text}: Props) {
    return (
        <CitationStyle>
            <DoneAllIcon fontSize="small" sx={{color:"green", margin:"10px"}}/>
            <Typography>{text}</Typography>
        </CitationStyle>
    );
}

export default CitationComponent;