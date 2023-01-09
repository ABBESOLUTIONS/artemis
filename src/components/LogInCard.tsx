import React, { useState } from 'react';
import { styled, SxProps, Typography,Container,Grid, Card, TextField, Box, FormControl, InputLabel, Input, IconButton, InputAdornment, Link} from '@mui/material';
import ImageComponent from './ImageComponent';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Visibility, VisibilityOff, VpnKeyRounded } from '@mui/icons-material';
import TextButton from './TextButton';
import { CLIENT_PAGES, USER_PAGES } from '../routes/paths';
import PasswordIcon from '@mui/icons-material/Password';
import { useAppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';
// import LoadingButton from "@mui/lab/LoadingButton";
import { LoadingButton } from '@mui/lab';
import { signInWithEmailAndPassword } from '../redux/slices/auth';



const LogInCardContainer=styled(Card)(()=>({
    width:"400px",
    height:"450px",
    backgroundColor:"#F3F9F8",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"100px",
}));

function LogInCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      setIsLoading(true);
      dispatch(signInWithEmailAndPassword({email, pwd})).unwrap().then((res) => {
        navigate("/contratsList");
      }).catch(error => {
        console.log(error);
      });
    };
  
    const handleEmailChange = (event: any) => setEmail(event.target.value);
    const handlePwdChange = (event: any) => setPwd(event.target.value);

    return (
        <LogInCardContainer>
            <ImageComponent image={"assets/images/logo.gif"} sx={{marginBottom:"50px", width:"55%"}}/>
            <Box component="form" sx={{ m: 1, width: "90%"}} noValidate autoComplete="off">
                <TextField value={email} onChange={handleEmailChange} fullWidth size="small" label="Email" helperText=" " variant="standard" InputProps={{startAdornment: <InputAdornment position="start"><AccountCircle sx={{ color: 'action.active', }} /></InputAdornment>}}/>
                <TextField value={pwd} onChange={handlePwdChange} fullWidth size="small" label="Mot de passe" helperText=" " variant="standard" type={"password"} InputProps={{startAdornment: <InputAdornment position="start"><VpnKeyRounded sx={{ color: 'action.active' }} /></InputAdornment>}}/>
            </Box>
            <TextButton title={"Vous n'avez pas de compte?"} path={CLIENT_PAGES.signUp} sx={{ fontSize:"10px"}}/>
          <LoadingButton sx={{}}  loading={isLoading} onClick={onSubmit} variant="outlined" color="success" type="submit">Valider</LoadingButton>
        </LogInCardContainer>
    );
}

export default LogInCard;