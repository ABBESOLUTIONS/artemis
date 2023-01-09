import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../redux/slices/auth';
import { useAppDispatch } from '../redux/store';

const DeconnectModalContainer = styled("div")(()=>({

}))

function DeconnectModal() {
    const [open, setOpen]=useState(true)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleClose = () => {
        setOpen(false)
        navigate("/contratsList")
    }

    const handleDeconnect = () => {
        dispatch(signOut()).unwrap().then((res) => {
            navigate("/");
        }).catch(error => {
            console.log(error);
            
        });
    };
    return (
        <DeconnectModalContainer>
            <Dialog open={open}>
                <DialogContent sx={{width:"400px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <DialogTitle sx={{color:"#138f82", textAlign:"center"}}>Deconnexion</DialogTitle>
                        <DialogContentText>Voulez vous vous déconnecter?</DialogContentText>
                        
                    <DialogContent>
                            <Button variant="contained" sx={{backgroundColor:"#138f82", margin:"8px"}} onClick={handleDeconnect}>OUI</Button>
                            <Button variant="contained" sx={{backgroundColor:"#138f82", margin:"8px"}} onClick={handleClose}>NON</Button>
                    </DialogContent>
                        
                </DialogContent>
            </Dialog>
        </DeconnectModalContainer>
    );
}

export default DeconnectModal;