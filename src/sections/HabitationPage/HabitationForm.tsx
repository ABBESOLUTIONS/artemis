
import { styled, Typography, Box, Grid, TextField, MenuItem, RadioGroup, FormLabel, FormControlLabel, Radio} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import HabitationGarantieCheck from '../../components/HabitationGarantieCheck';
import HabitationInstallationCheck from '../../components/HabitationInstallationCheck';
import HabitationOptionCheck from '../../components/HabitationOptionCheck';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
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
    const [name, setName] = React.useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
    const [prenom, setPrenom] = React.useState("");

  const handlePrenomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrenom(event.target.value);
  };
  const [adresse, setAdresse] = React.useState("");

  const handleAdresseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdresse(event.target.value);
  };
    const [numId, setNumId] = React.useState("");

  const handleNumIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumId(event.target.value);
  };
    const [etage, setEtage] = React.useState("");

  const handleEtageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEtage(event.target.value);
  };
    const [nbEtage, setNbEtage] = React.useState("");

  const handleNbEtageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNbEtage(event.target.value);
  };
  const [telFix, setTelFix] = React.useState("");

  const handleTelFixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelFix(event.target.value);
  };
    const [telMob, setTelMob] = React.useState("");

  const handleTelMobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelMob(event.target.value);
  };
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const [situationFami, setSituationFami] = React.useState("");

  const handlesituationFamiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSituationFami(event.target.value);
  };
  const [nbEfts, setNbEfts] = React.useState("");

  const handleNbEftsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNbEfts(event.target.value);
  };
  const [adresseBien, setAdresseBien] = React.useState("");

  const handleAdresseBienChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdresseBien(event.target.value);
  };
  const [utilisationResidence, setUtilisationResidence] = React.useState("");

  const handleUtilisationResidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUtilisationResidence(event.target.value);
  };
  const [statut, setStatut] = React.useState("");

  const handleStatutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatut(event.target.value);
  };
  const [siProprio, setSiProprio] = React.useState("");

  const handleSiProprioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiProprio(event.target.value);
  };
  const [surface, setSurface] = React.useState("");

  const handleSurfaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurface(event.target.value);
  };
  const [nbPieces, setNbPieces] = React.useState("");

  const handleNbPiecesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNbPieces(event.target.value);
  };
  const [ageBien, setAgeBien] = React.useState("");

  const handleAgeBienChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeBien(event.target.value);
  };
  const [engin, setEngin] = React.useState("");

  const handleEnginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEngin(event.target.value);
  };
  const [plafondValeur, setPlafondValeur] = React.useState("");

  const handlePlafondValeurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlafondValeur(event.target.value);
  };
  const [objetValeur, setObjetValeur] = React.useState("");

  const handleObjetValeurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjetValeur(event.target.value);
  };
  const [realisationComp, setRealisationComp] = React.useState("");

  const handleRealisationCompChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRealisationComp(event.target.value);
  };
  const [motifReal, setMotifReal] = React.useState("");

  const handleMotifRealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMotifReal(event.target.value);
  };
  const [utilResidence, setUtilResidence] = React.useState("");

  const handleUtilResidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUtilResidence(event.target.value);
  };
  const [nomsPenomNaissEfts, setNomsPenomNaissEfts] = React.useState("");

  const handleNomsPenomNaissEftsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomsPenomNaissEfts(event.target.value);
  };
  const [animaux, setAnimaux] = React.useState("");

  const handleAnimauxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnimaux(event.target.value);
  };
    return (
        <HabitationFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Habitation</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nom"} value={name} />
                <TextFieldPersonnalise id={''} required={true}  label={"Prénom"} value={prenom} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Adresse"} value={adresse} />
                <TextFieldPersonnalise id={''} required={true} label={"N° Client"} value={numId} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Etage"} value={etage} />
                <TextFieldPersonnalise id={''} required={true} label={"Nombre d'Etages de l'immeuble"} value={nbEtage} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Téléphone Fixe"} value={telFix} />
                <TextFieldPersonnalise id={''} required={true} label={"Téléphone Mobile"} value={telMob} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Email"} value={email} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Situation Famillial"} value={situationFami} />
                <TextFieldPersonnalise id={''} required={true} label={"Nombre d'Enfants"} value={nbEfts} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Adresse du bien"} value={adresseBien} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Utilisation de la Résidence"} value={utilisationResidence} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Statut"} value={statut} />
                <TextFieldPersonnalise id={''} required={true} label={"Si Propriétaire"} value={siProprio} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Surface totale en M2"} value={surface} />
                <TextFieldPersonnalise id={''} required={true} label={"Nombre de pièces Principales"} value={nbPieces} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Age du bien (+ou - de 10 ans)"} value={ageBien} />
                <TextFieldPersonnalise id={''} required={true} label={"Engins à Moteur"} value={engin} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Plafond valeur Mobilier & Equipements"} value={plafondValeur} />
                <TextFieldPersonnalise id={''} required={true} label={"Objet de Valeurs"} value={objetValeur} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Réalisation par Compagnie"} value={realisationComp} />
                <TextFieldPersonnalise id={''} required={true} label={"Mots de Réalisation"} value={motifReal} />
                </div>
                {/* <Box component={"form"} sx={{'& .MuiTextField-root': { m: 1, width: '50ch' },}}> */}
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Utilisation de la Résidence"} value={utilResidence} />
                </div>
                <div>
                <TextField required id="outlined-required" label="Réalisation par Compagnie" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Mots de la Réalisation" defaultValue="" variant="outlined"/>
                </div>
                <Typography sx={{textAlign:"center"}}>Assurance Scolaire:</Typography>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nom (S), Prénom (s) de Naissance des enfants (obligatoire)"} value={nomsPenomNaissEfts} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Animaux( Chiens dangereux, Cheavaux)"} value={animaux} />
                <TextField  id="outlined-required" label="" defaultValue="" variant="outlined"/>
                </div>
                <Typography>Si Animaux:</Typography>
                <FormLabel id="demo-row-radio-buttons-group-label">Carnet de Vaccination:</FormLabel>
                <RadioGroup row name="animaux">
                    <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="non" control={<Radio />} label="Non" />
                </RadioGroup>
                <FormLabel id="demo-row-radio-buttons-group-label">Tatouages:</FormLabel>
                <RadioGroup row name="animaux">
                    <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="non" control={<Radio />} label="Non" />
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