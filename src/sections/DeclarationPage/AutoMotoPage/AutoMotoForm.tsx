import { styled, Typography, Box, Grid, TextField, MenuItem} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../../common/colors';
import { currencies } from '../../../common/Data';
import AutoMotoGarageCheck from '../../../components/AutoMotoGarageCheck';
import AutoMotoUsageVehiculaireCheck from '../../../components/AutoMotoUsageVehiculaireCheck';
import SectionStyle from '../../../styles/SectionStyle';
const AutoMotoFormContainer=styled(SectionStyle)(()=>({
    maxHeight:"2000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function AutoMotoForm() {

    const [currency, setCurrency] = React.useState('Responsable');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
    return (
        <AutoMotoFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Auto-Moto</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                {/* <Grid container>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                </Grid> */}
                <div>
                <TextField required id="outlined-required" label="Nom" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Prenom" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Adresse" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="N° Client" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Telephone Fixe" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Telephone Mobile" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Email" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Situation Famillial" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nombre d'enfants < 16" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nombre d'enfants > 16" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Profession" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Date de naissance" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Date de Permis de Conduire" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Marque (D1)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Modèle(D3)" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Version" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Puissance Fiscale (P6)" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Type Mines (D2) " defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Mise en circulation (B)" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Immatriulation (A)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Date d'Acquisition" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Titulaire Carte Grise" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Autres conducteurs à désigner" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Coef. Bonus/Malus (CRM)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Date d’obtention du CRM" defaultValue="" variant="outlined"/>
                </div>
                <Typography>Nombre de sinistres lors des dernières années(R.i)</Typography>
                <Typography>Ordre = Responsable / Demi-Responsable / Non-Responsable / Bris de Glace</Typography>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={currency} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextField required id="outlined-required" label="Date" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={currency} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextField required id="outlined-required" label="Date" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={currency} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextField required id="outlined-required" label="Date" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Résiliation de la compagnie" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Motif de la résiliation" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Date de résiliation de la compagnie" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Suspension/Annulation de permis" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Date & motif de la suspension / Annulation" defaultValue="" variant="outlined"/>
                </div>
                <Typography>Garage:</Typography>
                <div><AutoMotoGarageCheck/></div>
                {/* <div><AutoMotoUsageVehiculaireCheck/></div>
                <div>
                <TextField  id="outlined-required" label="Date & motif de la suspension / Annulation" defaultValue="" variant="outlined"/>
                </div> */}
                                <Typography>Garage:</Typography>
                                <Typography>Garage:</Typography>
                                <Typography>Garage:</Typography>
                                <Typography>Garage:</Typography>
                                <Typography>Garage:</Typography>
                                <Typography>Garage:</Typography>
            </Box>
        </AutoMotoFormContainer>
    );
}

export default AutoMotoForm;