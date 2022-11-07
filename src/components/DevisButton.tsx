import { Button, styled } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import React from 'react';

const DevisButtonStyle= styled(Button)(() => ({
    boxShadow:"none",
    fontSize:"15px",
    backgroundColor:"#138f82",
    fontWeight:"700",
    height:"50px",
    // marginLeft:"1335px",
    display:"flex",
    // position:"absolute",
    '&:hover': {
        backgroundColor: '#213438',
    }
}))

function DevisButton() {
    return (
        <DevisButtonStyle variant="contained" startIcon={<DriveFileRenameOutlineIcon/>}>Demander un devis</DevisButtonStyle>
    );
}

export default DevisButton;