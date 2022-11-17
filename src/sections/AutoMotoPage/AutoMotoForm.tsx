import { styled, Typography, Box, Grid, TextField, MenuItem} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import { currencies } from '../../common/Data';
import AutoMotoGarageCheck from '../../components/AutoMotoGarageCheck';
import AutoMotoGarantieCheck from '../../components/AutoMotoGarantieCheck';
import AutoMotoOptionCheck from '../../components/AutoMotoOptionCheck';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import AutoMotoUsageVehiculaireCheck from '../../components/AutoMotoUsageVehiculaireCheck';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import SectionStyle from '../../styles/SectionStyle';
const AutoMotoFormContainer=styled(SectionStyle)(()=>({
    // maxHeight:"5000px",
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
                <TextFieldPersonnalise id={''} required={true} label={'Nom'} value={'name'} />
                <TextFieldPersonnalise id={''} required={true}  label={"Prénom"} value={'prenom'} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Adresse'} value={'adresse'} />
                <TextFieldPersonnalise id={''} required={true} label={'N° Client'} value={'number'} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Téléphone Fixe'} value={'telFix'} />
                <TextFieldPersonnalise id={''} required={true} label={'Téléphone Mobile'} value={'telMob'} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Email'} value={'email'} />
                <TextFieldPersonnalise id={''} required={true} label={'Situation Familial'} value={'situattion'} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nombre d'enfants < 16"} value={'nb<16'} />
                <TextFieldPersonnalise id={''} required={true} label={"Nombre d'enfants > 16"} value={'nb>16'} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Profession'} value={'profession'} />
                <TextFieldPersonnalise id={''} required={true} label={'Date de Naissance'} value={'dateNaiss'} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Date de Permis de Conduire'} value={'datePermis'} />
                <TextFieldPersonnalise id={''} required={true} label={"Marque (D1)"} value={"marque"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Modèle (D3)"} value={"modele"} />
                <TextFieldPersonnalise id={''} required={true} label={"Version"} value={"version"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Puissance Fiscale (P6)"} value={"puissanceFisc"} />
                <TextFieldPersonnalise id={''} required={true} label={"Type Mines (D2)"} value={"typeMine"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Mise en Circulation (B)"} value={"miseCirc"} />
                <TextFieldPersonnalise id={''} required={true} label={"Immatriculation (A)"} value={"miseCirc"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Date d'Acquisition"} value={"dateAcquis"} />
                <TextFieldPersonnalise id={''} required={true} label={"Titulaire Carte Grise"} value={"titulaireCarte"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Autres Conducteurs à désigner"} value={"autreConduct"} />
                <TextFieldPersonnalise id={''} required={true} label={"Coef. Bonus/Malus (CRM)"} value={"coef"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Date d'Obtention du CRM"} value={"dateCrm"} />
                </div>
                <Typography>Nombre de sinistres lors des dernières années(R.i)</Typography>
                <Typography>Ordre = Responsable / Demi-Responsable / Non-Responsable / Bris de Glace</Typography>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={currency} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                {/* <TextFieldPersonnalise id={''} required={true} label={"Marque (D1)"} value={"marque"} variant={"outlined"}>

                </TextFieldPersonnalise> */}
                <TextFieldPersonnalise id={''} required={true} label={"Date"} value={"date"} />
                </div>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={currency} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} label={"Date"} value={"date"} />
                </div>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={currency} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} label={"Date"} value={"date"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Résiliaton de la Compagnie"} value={"resiliation"} />
                <TextFieldPersonnalise id={''} required={true} label={"Motif de Résiliation"} value={"motif"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Date de Résiliation"} value={"dateResil"} />
                <TextFieldPersonnalise id={''} required={true} label={"Suspension/Annulation de Permis"} value={"suspension"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Date & motif de la suspension / Annulation"} value={"date"} />
                <TextField  id="outlined-required" label="Date & motif de la suspension / Annulation" defaultValue="" variant="outlined"/>
                </div>
                <Typography>Garage:</Typography>
                <div><AutoMotoGarageCheck/></div>
                <div><AutoMotoGarantieCheck/></div>
                <div><AutoMotoOptionCheck/></div>
                <div><AutoMotoPaiementCheck/></div>
                {/* <div><AutoMotoUsageVehiculaireCheck/></div>
                <div>
                <TextField  id="outlined-required" label="Date & motif de la suspension / Annulation" defaultValue="" variant="outlined"/>
                </div> */}
            </Box>
        </AutoMotoFormContainer>
    );
}

export default AutoMotoForm;