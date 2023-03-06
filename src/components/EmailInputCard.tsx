import { AccountCircle, CloseOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, IconButton, InputAdornment, Snackbar, styled, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from '../redux/slices/auth';
import { useAppDispatch } from '../redux/store';
import ImageComponent from './ImageComponent';

const EmailInputCardStyle = styled(Card)(()=>({
    width:"400px",
    height:"350px",
    backgroundColor:"#F3F9F8",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"100px",
}))

function EmailInputCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [openBar, setOpenBar] = React.useState(false);
    const handleEmailChange = (event: any) => setEmail(event.target.value);

    const handleOpenBar = () => {
        setOpenBar(true);
      };

      const handleCloseBar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenBar(false);
      };

      const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleCloseBar}>
            OK
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseBar}
          >
            <CloseOutlined fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        dispatch(sendPasswordResetEmail({email})).unwrap().then(handleOpenBar)
    }

    return (
        <EmailInputCardStyle>
            <ImageComponent image={"assets/images/logo.gif"} sx={{marginBottom:"50px", width:"55%"}}/>
            <Box component="form" sx={{ m: 1, width: "90%"}} noValidate autoComplete="off">
                <TextField type={"email"} value={email} onChange={handleEmailChange} fullWidth size="small" label="Email" helperText=" " variant="standard" InputProps={{startAdornment: <InputAdornment position="start"><AccountCircle sx={{ color: 'action.active', }} /></InputAdornment>}}/>
            </Box>  
            <LoadingButton sx={{}}  loading={isLoading} onClick={onSubmit} variant="contained" color="success" type="submit">Valider</LoadingButton>
            <Snackbar open={openBar} autoHideDuration={5000} onClose={handleCloseBar} message="Un lien de Réinitialisation vous a été envoyé dans votre boite Mail" action={action} />     
        </EmailInputCardStyle>
    );
}

export default EmailInputCard;