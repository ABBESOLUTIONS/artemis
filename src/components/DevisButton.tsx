import { Button, SxProps, styled } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import React from 'react';
import { CLIENT_PAGES } from '../routes/paths';

const DevisButtonStyle= styled(Button)(({theme}) => ({
    boxShadow:"none",
    fontSize:"15px",
    backgroundColor:"#138f82",
    fontWeight:"700",
    height:"50px",
    marginLeft:"-50%",
    // marginLeft:"1335px",
    display:"flex",
    // position:"absolute",
    [theme.breakpoints.down("lg")]: {
        marginLeft:"0%",
        // marginBottom:"-50px"
        
    },
    '&:hover': {
        backgroundColor: '#213438',
    }
}))

interface Props {
    sx? : SxProps
}

function DevisButton({sx={}}: Props) {
    return (
        <DevisButtonStyle variant="contained" startIcon={<DriveFileRenameOutlineIcon/>} href={CLIENT_PAGES.demande} sx={{...sx}}>Demander un devis</DevisButtonStyle>
    );
}

export default DevisButton;