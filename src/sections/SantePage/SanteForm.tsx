import React from 'react';
import { styled, Typography, Box, Grid, TextField, MenuItem} from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { PROJECT_COLORS } from '../../common/colors';
import SanteGarantieCheck from '../../components/SanteGarantieCheck';
import SanteOptionCheck from '../../components/SanteOptionCheck';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';


const SanteFormContainer=styled(SectionStyle)(()=>({
    // maxHeight:"2000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function SanteForm() {
    const [currency, setCurrency] = React.useState('Responsable');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
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
  const [numSecu, setNumSecu] = React.useState("");

  const handleNumSecuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumSecu(event.target.value);
  };
  const [profession, setprofession] = React.useState("");

  const handleprofessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setprofession(event.target.value);
  };
  const [caisseDateCreat, setCaisseDateCreat] = React.useState("");

  const handleCaisseDateCreatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaisseDateCreat(event.target.value);
  };
  const [situFami, setSituFami] = React.useState("");

  const handleSituFamiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSituFami(event.target.value);
  };
  const [nomConj, setNomConj] = React.useState("");

  const handleNomConjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomConj(event.target.value);
  };
  const [numSecuConj, setNumSecuConj] = React.useState("");

  const handleNumSecuConjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumSecuConj(event.target.value);
  };
  const [nbEftSouscript, setNbEftSouscript] = React.useState("");

  const handleNbEftSouscriptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNbEftSouscript(event.target.value);
  };
  const [nbEftConj, setNbEftConj] = React.useState("");

  const handleNbEftConjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNbEftConj(event.target.value);
  };
  const [nomEftSouscript, setNomEftSouscript] = React.useState("");

  const handleNomEftSouscriptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomEftSouscript(event.target.value);
  };
  const [dateNaissSex, setDateNaissSex] = React.useState("");

  const handleDateNaissSexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateNaissSex(event.target.value);
  };
  
    return (
        <SanteFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Sante</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Nom'} value={name} />
                <TextFieldPersonnalise id={''} required={true}  label={"Prénom"} value={prenom} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Adresse'} value={adresse} />
                <TextFieldPersonnalise id={''} required={true} label={'N° Client'} value={numId} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={'Téléphone Fixe'} value={telFix} />
                <TextFieldPersonnalise id={''} required={true} label={'Téléphone Mobile'} value={telMob} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Email"} value={email} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Numéro de sécurité social"} value={numSecu} />
                <TextFieldPersonnalise id={''} required={true} label={"Date de naissance"} value={"dateNaiss"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Profession"} value={profession} />
                <TextFieldPersonnalise id={''} required={true} label={"Statut Pro. (Si Indépendant :Caisse + Date de Création"} value={caisseDateCreat} />
                </div>                
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Situation Familial"} value={situFami} />
                <TextFieldPersonnalise id={''} required={true} label={"Nom , Prénom Conjoint"} value={nomConj} />
                </div>                
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Date Naiss. Conjoint"} value={"nomConj"} />
                <TextFieldPersonnalise id={''} required={true} label={"N° Sécurité Social du Conjoint"} value={numSecuConj} />
                </div>                
                {/* <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nombre enfants rattachés du souscripteur"} value={nbEftSouscript} />
                <TextFieldPersonnalise id={''} required={true} label={"Nombre enfants rattachés du conjoint"} value={nbEftConj} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nom et Prénom (enfant du souscripteur)"} value={nomEftSouscript} />
                <TextFieldPersonnalise id={''} required={true} label={"Date de Naissance (Sexe)"} value={dateNaissSex} />
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom et Prénom (enfant du souscripteur)" value={} variant="outlined"/>
                <TextField  id="outlined-required" label="Date de Naissance (Sexe)" value={} variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom et Prénom (enfant du souscripteur)" value={} variant="outlined"/>
                <TextField  id="outlined-required" label="Date de Naissance (Sexe)" value={} variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom et Prénom (enfant du souscripteur)" value={} variant="outlined"/>
                <TextField  id="outlined-required" label="Date de Naissance (Sexe)" value={} variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom et Prénom (enfant du souscripteur)" value={} variant="outlined"/>
                <TextField  id="outlined-required" label="Date de Naissance (Sexe)" value={} variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom et Prénom (enfant du souscripteur)" value={} variant="outlined"/>
                <TextField  id="outlined-required" label="Date de Naissance (Sexe)" value={} variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom et Prénom (enfant du souscripteur)" value={} variant="outlined"/>
                <TextField  id="outlined-required" label="Date de Naissance (Sexe)" value={} variant="outlined"/>
                </div> */}
                <SanteGarantieCheck/>
                <SanteOptionCheck/>
                <AutoMotoPaiementCheck/>
            </Box>
        </SanteFormContainer>
    );
}

export default SanteForm;