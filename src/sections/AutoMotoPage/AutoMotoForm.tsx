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
    backgroundAttachment:"fixed",
}));

function AutoMotoForm() {
    const [data, setData] = React.useState({
      name: "",
      prenom : "",
      email: "",
    });

    const [natureFirst, setNatureFirst] = React.useState('Responsable');
    const [natureScnd, setNatureSecond] = React.useState('Responsable');
    const [natureThird, setNatureThird] = React.useState('Responsable');
    const [natureFour, setNatureFour] = React.useState('Responsable');


  // const handleChange = (value: any, name: string) => {
  //   setData((prev) => ({...prev, [name]: value}));
  // };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.checked}));
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
    const [situation, setSituation] = React.useState("");

  const handleSituationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSituation(event.target.value);
  };
    const [nbInfSeize, setNbInfSeize] = React.useState("");

  const handleNbInfSeizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNbInfSeize(event.target.value);
  };
    const [nbSupSeize, setNbSupSeize] = React.useState("");

  const handleNbSupSeizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNbSupSeize(event.target.value);
  };
    const [profession, setProfession] = React.useState("");

  const handleProfessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfession(event.target.value);
  };
    const [dateNaiss, setDateNaiss] = React.useState("");

  const handleDateNaissChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateNaiss(event.target.value);
  };
    const [modele, setModele] = React.useState("");

  const handleModeleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModele(event.target.value);
  };
    const [version, setVersion] = React.useState("");

  const handleVersionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVersion(event.target.value);
  };
    const [puissanceFisc, setPuissanceFisc] = React.useState("");

  const handlePuissanceFiscChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPuissanceFisc(event.target.value);
  };
  const [typeMine, setTypeMine] = React.useState("");

  const handleTypeMineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeMine(event.target.value);
  };
    const [miseCirc, setMiseCirc] = React.useState("");

  const handleMiseCircChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMiseCirc(event.target.value);
  };
    const [immatric, setImmatric] = React.useState("");

  const handleImmatricChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImmatric(event.target.value);
  };
    const [titulaireCarte, setTitulaireCarte] = React.useState("");

  const handleTitulaireCarteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitulaireCarte(event.target.value);
  };
    const [autreConduct, setAutreConduc] = React.useState("");

  const handleAutreConducChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutreConduc(event.target.value);
  };
    const [coef, setCoef] = React.useState("");

  const handlCoefChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoef(event.target.value);
  };
    const [resiliation, setResiliation] = React.useState("");

  const handlResiliationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResiliation(event.target.value);
  };
    const [motif, setMotif] = React.useState("");

  const handlMotifChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMotif(event.target.value);
  };
    const [motifResil, setMotifResil] = React.useState("");

  const handlMotifResilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMotifResil(event.target.value);
  };
    const [suspension, setSuspension] = React.useState("");

  const handlSuspensionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuspension(event.target.value);
  };
    
    return (
        <AutoMotoFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Auto-Moto</Typography>
            <Typography variant="caption" sx={{color:PROJECT_COLORS.primarySwatch, textAlign:"flex-start"}}>(*)=Champs Obligatoire</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                {/* <Grid container>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                    <Grid item xs={12}><TextField required label="Firstname"/></Grid>
                </Grid> */}
                <div>
                <TextFieldPersonnalise  id={''} name="name" required={true} label={'Nom'} value={name} onChange={handleChange} />
                <TextFieldPersonnalise id={''} name="prenom" required={true}  label={"Prénom"} value={prenom} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"adresse"} required={true} label={'Adresse'} value={adresse} />
                <TextFieldPersonnalise id={''} name={"numId"} required={true} label={'N° Client'} value={numId} />
 name={""}                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"telFix"} required={true} label={'Téléphone Fixe'} value={telFix} />
                <TextFieldPersonnalise id={''} name={"telMob"} required={true} label={'Téléphone Mobile'} value={telMob} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"email"} required={true} label={'Email'} value={email} />
                <TextFieldPersonnalise id={''} name={"situation"} required={true} label={'Situation Familial'} value={situation} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"nbInfSeize"} required={true} label={"Nombre d'enfants < 16"} value={nbInfSeize} />
                <TextFieldPersonnalise id={''} name={"nbSupSeize"} required={true} label={"Nombre d'enfants > 16"} value={nbSupSeize} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"profession"} required={true} label={'Profession'} value={profession} />
                <TextFieldPersonnalise id={''} name={"dateNaiss"} required={true} label={'Date de Naissance'} value={dateNaiss} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"datePermis"} required={true} label={'Date de Permis de Conduire'} value={'datePermis'} />
                <TextFieldPersonnalise id={''} name={"marque"} required={true} label={"Marque (D1)"} value={"marque"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"modele"} required={true} label={"Modèle (D3)"} value={modele} />
                <TextFieldPersonnalise id={''} name={"version"} required={true} label={"Version"} value={version} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"puissanceFisc"} required={true} label={"Puissance Fiscale (P6)"} value={puissanceFisc} />
                <TextFieldPersonnalise id={''} name={"typeMine"} required={true} label={"Type Mines (D2)"} value={typeMine} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"miseCirc"} required={true} label={"Mise en Circulation (B)"} value={miseCirc} />
                <TextFieldPersonnalise id={''} name={"immatric"} required={true} label={"Immatriculation (A)"} value={immatric} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={""} required={true} label={"Date d'Acquisition"} value={"dateAcquis"} />
                <TextFieldPersonnalise id={''} name={"titulaireCarte"} required={true} label={"Titulaire Carte Grise"} value={titulaireCarte} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"autreConduct"} required={true} label={"Autres Conducteurs à désigner"} value={autreConduct} />
                <TextFieldPersonnalise id={''} name={"coef"} required={true} label={"Coef. Bonus/Malus (CRM)"} value={coef} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"dateCrm"} required={true} label={"Date d'Obtention du CRM"} value={"dateCrm"} />
                </div>
                <Typography>Nombre de sinistres lors des dernières années(R.i)</Typography>
                <Typography>Ordre = Responsable / Demi-Responsable / Non-Responsable / Bris de Glace</Typography>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={natureFirst} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                {/* <TextFieldPersonnalise id={''} required={true} label={"Marque (D1)"} value={"marque"} variant={"outlined"}>

                </TextFieldPersonnalise> */}
                <TextFieldPersonnalise id={''} required={true} label={"Date"} value={"date"} />
                </div>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={natureFirst} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined" sx={{borderColor:"green"}}>
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} label={"Date"} value={"date"} />
                </div>
                <div>
                <TextField  id="outlined-required" select label="Nature" value={natureScnd} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} label={"Date"} value={"date"} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Résiliaton de la Compagnie"} value={resiliation} />
                <TextFieldPersonnalise id={''} required={true} label={"Motif de Résiliation"} value={motifResil} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Date de Résiliation"} value={"dateResil"} />
                <TextFieldPersonnalise id={''} required={true} label={"Suspension/Annulation de Permis"} value={suspension} />
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