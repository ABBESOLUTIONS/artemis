
import { styled, Typography, Box, Grid, TextField, MenuItem, RadioGroup, FormLabel, FormControlLabel, Radio} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import HabitationGarantieCheck from '../../components/HabitationGarantieCheck';
import HabitationInstallationCheck from '../../components/HabitationInstallationCheck';
import HabitationOptionCheck from '../../components/HabitationOptionCheck';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import { DevisHabitationModel } from '../../models/DevisHabitationModel';
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

    
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisHabitationModel));
  console.log(data);
 }

  //   const [name, setName] = React.useState("");

  // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };
  //   const [prenom, setPrenom] = React.useState("");

  // const handlePrenomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPrenom(event.target.value);
  // };
  // const [adresse, setAdresse] = React.useState("");

  // const handleAdresseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAdresse(event.target.value);
  // };
  //   const [numId, setNumId] = React.useState("");

  // const handleNumIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNumId(event.target.value);
  // };
  //   const [etage, setEtage] = React.useState("");

  // const handleEtageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEtage(event.target.value);
  // };
  //   const [nbEtage, setNbEtage] = React.useState("");

  // const handleNbEtageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNbEtage(event.target.value);
  // };
  // const [telFix, setTelFix] = React.useState("");

  // const handleTelFixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTelFix(event.target.value);
  // };
  //   const [telMob, setTelMob] = React.useState("");

  // const handleTelMobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTelMob(event.target.value);
  // };
  // const [email, setEmail] = React.useState("");

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };
  // const [situationFami, setSituationFami] = React.useState("");

  // const handlesituationFamiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSituationFami(event.target.value);
  // };
  // const [nbEfts, setNbEfts] = React.useState("");

  // const handleNbEftsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNbEfts(event.target.value);
  // };
  // const [adresseBien, setAdresseBien] = React.useState("");

  // const handleAdresseBienChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAdresseBien(event.target.value);
  // };
  // const [utilisationResidence, setUtilisationResidence] = React.useState("");

  // const handleUtilisationResidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUtilisationResidence(event.target.value);
  // };
  // const [statut, setStatut] = React.useState("");

  // const handleStatutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setStatut(event.target.value);
  // };
  // const [siProprio, setSiProprio] = React.useState("");

  // const handleSiProprioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSiProprio(event.target.value);
  // };
  // const [surface, setSurface] = React.useState("");

  // const handleSurfaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSurface(event.target.value);
  // };
  // const [nbPieces, setNbPieces] = React.useState("");

  // const handleNbPiecesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNbPieces(event.target.value);
  // };
  // const [ageBien, setAgeBien] = React.useState("");

  // const handleAgeBienChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAgeBien(event.target.value);
  // };
  // const [engin, setEngin] = React.useState("");

  // const handleEnginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEngin(event.target.value);
  // };
  // const [plafondValeur, setPlafondValeur] = React.useState("");

  // const handlePlafondValeurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPlafondValeur(event.target.value);
  // };
  // const [objetValeur, setObjetValeur] = React.useState("");

  // const handleObjetValeurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setObjetValeur(event.target.value);
  // };
  // const [realisationComp, setRealisationComp] = React.useState("");

  // const handleRealisationCompChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRealisationComp(event.target.value);
  // };
  // const [motifReal, setMotifReal] = React.useState("");

  // const handleMotifRealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setMotifReal(event.target.value);
  // };
  // const [utilResidence, setUtilResidence] = React.useState("");

  // const handleUtilResidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUtilResidence(event.target.value);
  // };
  // const [nomsPenomNaissEfts, setNomsPenomNaissEfts] = React.useState("");

  // const handleNomsPenomNaissEftsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNomsPenomNaissEfts(event.target.value);
  // };
  // const [animaux, setAnimaux] = React.useState("");

  // const handleAnimauxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAnimaux(event.target.value);
  // };
    return (
        <HabitationFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Habitation</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextFieldPersonnalise id={''} name="Nom" required={true} onChange={handleChange} label={"Nom"} value={data?.Nom ?? ""} />
                <TextFieldPersonnalise id={''} name="Prenom" required={true} onChange={handleChange}  label={"Prénom"} value={data?.Prenom ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Adresse" required={true} onChange={handleChange} label={"Adresse"} value={data?.Adresse ?? ""} />
                <TextFieldPersonnalise id={''} name="Num_Client" required={true} onChange={handleChange} label={"N° Client"} value={data?.Num_Client ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Etage" required={true} onChange={handleChange} label={"Etage"} value={data?.Etage ?? ""} />
                <TextFieldPersonnalise id={''} name="Nbre_Etages_Immeuble" required={true} onChange={handleChange} label={"Nombre d'Etages de l'immeuble"} value={data?.Nbre_Etages_Immeuble ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Telephone_Fix" required={true} onChange={handleChange} label={"Téléphone Fixe"} value={data?.Telephone_Fix ?? ""} />
                <TextFieldPersonnalise id={''} name="Telephone_Mobile" required={true} onChange={handleChange} label={"Téléphone Mobile"} value={data?.Telephone_Mobile ?? ""} />
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
                <HabitationInstallationCheck/>
                <HabitationGarantieCheck/>
                <HabitationOptionCheck/>
                <AutoMotoPaiementCheck/>
                {/* </Box> */}
            </Box>
        </HabitationFormContainer>
    );
}

export default HabitationForm;