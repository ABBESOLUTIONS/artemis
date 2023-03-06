import { CloseOutlined, VpnKey } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, IconButton, InputAdornment, Snackbar, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth, { updatePassword } from '../../redux/slices/auth';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ImageComponent from '../ImageComponent';


const ResetPasswordCardStyle = styled(Card)(()=>({
    width:"400px",
    height:"350px",
    backgroundColor:"#F3F9F8",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"100px",
}))

function ResetPasswordInput() {

    const [isLoading, setIsLoading] = useState(false);
    const [pwd, setPwd] = useState("");
      const handlePwdChange = (event: any) => setPwd(event.target.value);
  
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const location = useLocation();
      const queryParamaters = new URLSearchParams(location.search);

        const [openBar, setOpenBar] = React.useState(false);

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


      const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(queryParamaters.get("oobCode"));
        const oobCode = queryParamaters.get("oobCode");
        dispatch(updatePassword({
            pwd,
            oobCode: oobCode
        })).unwrap().then((res) => {
            handleOpenBar();
            navigate("/logIn");
            // alert ("ca marche!");
        }).catch(error => {
        console.log(error);
        });
    }
    return (
        <ResetPasswordCardStyle>
            <ImageComponent image={"assets/images/logo.gif"} sx={{marginBottom:"50px", width:"55%"}}/>
            <Box component="form" sx={{ m: 1, width: "90%"}} noValidate autoComplete="off">
                <TextField type="password" value={pwd} onChange={handlePwdChange} fullWidth size="small" label="Nouveau Mot de Passe" helperText=" " variant="standard" InputProps={{startAdornment: <InputAdornment position="start"><VpnKey sx={{ color: 'action.active', }} /></InputAdornment>}}/>
            </Box>
                <LoadingButton sx={{}}  loading={isLoading} onClick={onSubmit} variant="contained" color="success" type="submit">Valider</LoadingButton>
                <Snackbar open={openBar} autoHideDuration={5000} onClose={handleCloseBar} message="Mot de Passe Réinitialisé avec Succès" action={action} />     
        </ResetPasswordCardStyle>
    );
}

export default ResetPasswordInput;