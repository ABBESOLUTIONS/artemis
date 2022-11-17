import React from 'react';
import { styled, SxProps, Typography,Container,Grid, Card, TextField, Box, FormControl, InputLabel, Input, IconButton, InputAdornment, Link} from '@mui/material';
import ImageComponent from './ImageComponent';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import TextButton from './TextButton';
import { CLIENT_PAGES } from '../routes/paths';
import PasswordIcon from '@mui/icons-material/Password';



const LogInCardContainer=styled(Card)(()=>({
    width:"400px",
    height:"475px",
    backgroundColor:"#F3F9F8",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

interface State {
    password: string;
    showPassword: boolean;
  }
  

function LogInCard() {

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
      });

      const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    return (
        <LogInCardContainer>
            <ImageComponent image={"assets/images/logo.gif"} sx={{marginBottom:"50px"}}/>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="E-Mail" variant="standard" sx={{width:"30ch"}}/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                                >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
            }
          />
        </FormControl>
            </Box>

                {/* <Typography variant="caption" display="block" >
            <Link>
                caption text
            </Link>
            </Typography> */}
            <TextButton title={"Vous n'avez pas de compte?"} path={CLIENT_PAGES.signUp} sx={{ fontSize:"10px"}}/>
        </LogInCardContainer>
    );
}

export default LogInCard;