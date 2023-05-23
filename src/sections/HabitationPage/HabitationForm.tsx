
import { styled, Typography, Box, Grid, TextField, MenuItem, RadioGroup, FormLabel, FormControlLabel, Radio, FormControl, FormGroup, Checkbox, FormHelperText, Button} from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECT_COLORS } from '../../common/colors';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import { GarantiesHabitation } from '../../components/Ennum/GarantiesHabitation';
import { InstallationsHabitation } from '../../components/Ennum/InstallationsHabitation';
import { ModePaiement } from '../../components/Ennum/ModePaiement';
import { OptionHabitation } from '../../components/Ennum/OptionsHabitation';
import HabitationGarantieCheck from '../../components/HabitationGarantieCheck';
import HabitationInstallationCheck from '../../components/HabitationInstallationCheck';
import HabitationOptionCheck from '../../components/HabitationOptionCheck';
import ModalValidation from '../../components/ModalValidation';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import { DevisHabitationModel } from '../../models/DevisHabitationModel';
import { addDevisHabitation } from '../../redux/slices/DevisHabitationRed';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import SectionStyle from '../../styles/SectionStyle';
// import { PROJECT_COLORS } from '../../../common/colors';
// import { currencies } from '../../../common/Data';
// import AutoMotoGarageCheck from '../../../components/AutoMotoGarageCheck';
// import AutoMotoUsageVehiculaireCheck from '../../../components/AutoMotoUsageVehiculaireCheck';
// import SectionStyle from '../../../styles/SectionStyle';

const HabitationFormContainer=styled(SectionStyle)(()=>({
    // maxHeight:"2000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function HabitationForm() {
    const [data, setData] = React.useState<DevisHabitationModel>();
    const user = useAppSelector(state => state.auth.user);

    
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisHabitationModel));
  console.log(data);
 };

 const handleChangeCheckedInstallation = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Installation_Exterieures ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Installation_Exterieures: gara } as DevisHabitationModel));
    }
    else
      if(data?.Installation_Exterieures.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Installation_Exterieures: data?.Installation_Exterieures.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(data);
};
 const handleChangeCheckedGarantieHabitat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Granties_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Granties_Souhaitées: gara } as DevisHabitationModel));
    }
    else
      if(data?.Granties_Souhaitées.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Granties_Souhaitées: data?.Granties_Souhaitées.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(data);
};
 const handleChangeCheckedOptionHabitat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Options ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Options: gara } as DevisHabitationModel));
    }
    else
      if(data?.Options.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Options: data?.Options.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(data);
};

const handleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Modes_Paiement ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Modes_Paiement: gara } as DevisHabitationModel));
    }
    else
      if(data?.Modes_Paiement.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Modes_Paiement: data?.Modes_Paiement.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(data);
};

const dispatch = useAppDispatch();

const validate = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
    if (data && user?.uid) {
      data.id_client = user?.uid;
      const nDate= new Date();
      data!.dateRegister= `${nDate.getFullYear()}-${(nDate.getUTCMonth()+1)}-${nDate.getDate()}`;
      data.typeDevis = "HABITATION";
      dispatch(addDevisHabitation({oneDevisHabitation: data})).unwrap().then(handleOpenDialog);
    }
}

const [dialogOpen, setDialogOpen] = useState(false);
const [succesState, setSuccesState] = useState(true);
const navigate = useNavigate();
const handleOpenDialog = () => {
  setDialogOpen(true);
};
const handleCloseDialog = () => {
  setDialogOpen(false);
  navigate("/contratsList");
}

    return (
        <HabitationFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Habitation</Typography>
            <Box component="form" onSubmit={validate} sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextFieldPersonnalise id={''} name="Nom" required={true} onChange={handleChange} label={"Nom"} value={data?.Nom ?? ""} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextFieldPersonnalise id={''} name="Prenom" required={true} onChange={handleChange}  label={"Prénom"} value={data?.Prenom ?? ""} />
                </Grid>
                <div>
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Adresse" required={true} onChange={handleChange} label={"Adresse"} value={data?.Adresse ?? ""} />
                <TextFieldPersonnalise id={''} name="Num_Client" required={true} onChange={handleChange} label={"N° Client"} value={data?.Num_Client ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Etage" required={true} onChange={handleChange} label={"Etage"} value={data?.Etage ?? ""} />
                <TextFieldPersonnalise id={''} name="Nbre_Etages_Immeuble" required={true} onChange={handleChange} label={"Nombre d'Etages de l'immeuble"} type="number" value={data?.Nbre_Etages_Immeuble ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Telephone_Fix" required={true} onChange={handleChange} label={"Téléphone Fixe"} value={data?.Telephone_Fix ?? ""} />
                <TextFieldPersonnalise id={''} name="Telephone_Mobile" required={true} onChange={handleChange} type="tel" label={"Téléphone Mobile"} value={data?.Telephone_Mobile ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Email" required={true} onChange={handleChange} label={"Email"} value={data?.Email ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Situation_Falilial" required={true} onChange={handleChange} label={"Situation Famillial"} value={data?.Situation_Falilial ?? ""} />
                <TextFieldPersonnalise id={''} name="Nombre_Enfants" required={true} onChange={handleChange} label={"Nombre d'Enfants"} value={data?.Nombre_Enfants ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Adresse_Bien" required={true} onChange={handleChange} label={"Adresse du bien"} value={data?.Adresse_Bien ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Utilisation_Residence" required={true} onChange={handleChange} label={"Utilisation de la Résidence"} value={data?.Utilisation_Residence ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Statut" required={true} onChange={handleChange} label={"Statut"} value={data?.Statut ?? ""} />
                {/* <TextFieldPersonnalise id={''} name="" required={true} onChange={handleChange} label={"Si Propriétaire"} value={data?. ?? ""} /> */}
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Surface_Total" required={true} onChange={handleChange} label={"Surface totale en M2"} value={data?.Surface_Total ?? ""} />
                <TextFieldPersonnalise id={''} name="Nbre_Pieces_Principal" required={true} onChange={handleChange} label={"Nombre de pièces Principales"} value={data?.Nbre_Pieces_Principal ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Age_Du_Bien" required={true} onChange={handleChange} label={"Age du bien (+ou - de 10 ans)"} value={data?.Age_Du_Bien ?? ""} />
                <TextFieldPersonnalise id={''} name="Engins_Moteur" required={true} onChange={handleChange} label={"Engins à Moteur"} value={data?.Engins_Moteur ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Plafond_Valeur_Mobiler" required={true} onChange={handleChange} label={"Plafond valeur Mobilier & Equipements"} value={data?.Plafond_Valeur_Mobiler ?? ""} />
                <TextFieldPersonnalise id={''} name="Objet_De_Valeur" required={true} onChange={handleChange} label={"Objet de Valeurs"} value={data?.Objet_De_Valeur ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Realisation_Compagnie" required={true} onChange={handleChange} label={"Réalisation par Compagnie"} value={data?.Realisation_Compagnie ?? ""} />
                <TextFieldPersonnalise id={''} name="Mot_Realisation" required={true} onChange={handleChange} label={"Mots de Réalisation"} value={data?.Mot_Realisation ?? ""} />
                </div>
                {/* <Box component={"form"} sx={{'& .MuiTextField-root': { m: 1, width: '50ch' },}}> */}
                <div>
                <TextFieldPersonnalise id={''} name="Utilisation_Residence" required={true} onChange={handleChange} label={"Utilisation de la Résidence"} value={data?.Utilisation_Residence ?? ""} />
                </div>
                <Typography sx={{textAlign:"center"}}>Assurance Scolaire:</Typography>
                <div>
                <TextFieldPersonnalise id={''} name="Nom_Prenom_Naiss_Enfant" required={true} onChange={handleChange} label={"Nom (S), Prénom (s) de Naissance des enfants (obligatoire)"} value={data?.Nom_Prenom_Naiss_Enfant ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Animaux" required={true} onChange={handleChange} label={"Animaux( Chiens dangereux, Cheavaux)"} value={data?.Animaux ?? ""} />
                {/* <TextField  id="outlined-required" label="" defaultValue="data?.Nom ?? """ variant="outlined"/> */}
                </div>
                <Typography>Si Animaux:</Typography>
                <FormLabel id="demo-row-radio-buttons-group-label">Carnet de Vaccination:</FormLabel>
                <RadioGroup row name="Carnet_de_Vaccination" value={data?.Carnet_de_Vaccination} onChange={handleChange}>
                    <FormControlLabel value="OUI" control={<Radio />} label="Oui" />
                    <FormControlLabel value="NON" control={<Radio />} label="Non" />
                </RadioGroup>
                <FormLabel id="demo-row-radio-buttons-group-label">Tatouages:</FormLabel>
                <RadioGroup row name="Tatouages" value={data?.Tatouages} onChange={handleChange}>
                    <FormControlLabel value="OUI" control={<Radio />} label="Oui" />
                    <FormControlLabel value="NON" control={<Radio />} label="Non" />
                </RadioGroup>
                <Typography>Installations Extérieures:</Typography>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                      {
                        Object.keys(InstallationsHabitation).map((oneInstallation, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedInstallation} name={InstallationsHabitation[oneInstallation as keyof typeof InstallationsHabitation]}/>} label={InstallationsHabitation[oneInstallation as keyof typeof InstallationsHabitation]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>
                <div>
                <TextFieldPersonnalise id={''} name="Autres_Installation" required={true} onChange={handleChange} label={"Autres Installations à Préciser"} value={data?.Autres_Installation ?? ""} />
                </div>
                <Typography>Garanties Souhaitées:</Typography>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup sx={{display:"flex",  height:"150px",}}>
                      {
                        Object.keys(GarantiesHabitation).map((oneHabitation, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedGarantieHabitat} name={GarantiesHabitation[oneHabitation as keyof typeof GarantiesHabitation]}/>} label={GarantiesHabitation[oneHabitation as keyof typeof GarantiesHabitation]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>

                {/* <Box sx={{ display: 'flex' }}> */}
                <Typography>Options:</Typography>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                      {
                        Object.keys(OptionHabitation).map((oneOption, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedOptionHabitat} name={OptionHabitation[oneOption as keyof typeof OptionHabitation]}/>} label={OptionHabitation[oneOption as keyof typeof OptionHabitation]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>
                <div>
                <TextFieldPersonnalise id={''} name="Autres_Options" required={true} onChange={handleChange} label={"Autres Installations à Préciser"} value={data?.Autres_Options ?? ""} />
                </div>

                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Modes de Paiement possible</FormLabel>
                        <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                          {
                            Object.keys(ModePaiement).map((oneModePaiement, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedModePaiement} name={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>} label={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>)
                          }
                        </FormGroup>
                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                    </FormControl>
                </Box>
                {/* </Box> */}
                <Button variant="contained" type="submit" sx={{ backgroundColor:"#138f82", display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"40%", width:"100px", height:"50px" }}>valider</Button>
            </Box>
            {dialogOpen && (<ModalValidation stateInit={dialogOpen} stateClose={handleCloseDialog} isSucces={succesState}  />)}
        </HabitationFormContainer>
    );
}

export default HabitationForm;