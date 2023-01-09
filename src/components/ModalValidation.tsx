import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, styled } from '@mui/material';
import React from 'react';

const ModalValidationContainer = styled("div")(()=> ({

}))

interface Props {
    // isSucces:boolean,
    stateInit: boolean,
    stateClose: ()=>void,
    isSucces: boolean,
}

function ModalValidation({stateInit, stateClose, isSucces}:Props) {
    return (
        <ModalValidationContainer>
            {isSucces ? (
                <Dialog open={stateInit} >
                    <DialogContent sx={{width:"400px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <DialogTitle sx={{color:"#138f82"}}>Demande Effectué avec Succes</DialogTitle>
                    <DialogContentText>Vous recevrez une réponse</DialogContentText>
                    <DialogContent>
                        <Button variant="contained" sx={{backgroundColor:"#138f82"}} onClick={stateClose}>Terminer</Button>
                        {/* <Button onClick={execute()}>Terminer</Button> */}
                    </DialogContent>
                    </DialogContent>
                </Dialog>
            ):(
                <Dialog open={stateInit} >
                    <DialogContent sx={{width:"400px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <DialogTitle sx={{color:"red"}}>Echec de la demande</DialogTitle>
                    <DialogContentText>Consultez votre connexion Internet</DialogContentText>
                    {/* <DialogContent> */}
                        <Button variant="contained" sx={{backgroundColor:"#138f82"}} onClick={stateClose}>Terminer</Button>
                        {/* <Button onClick={execute()}>Terminer</Button> */}
                    {/* </DialogContent> */}
                    </DialogContent>
            </Dialog>
            )}
        </ModalValidationContainer>
    );
}

export default ModalValidation;