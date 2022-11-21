import { styled, Typography, Box, Grid, TextField, MenuItem, FormHelperText, FormControl, FormGroup, Checkbox, FormControlLabel, FormLabel} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import { currencies } from '../../common/Data';
import AutoMotoGarageCheck from '../../components/AutoMotoGarageCheck';
import AutoMotoGarantieCheck from '../../components/AutoMotoGarantieCheck';
import AutoMotoOptionCheck from '../../components/AutoMotoOptionCheck';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import AutoMotoUsageVehiculaireCheck from '../../components/AutoMotoUsageVehiculaireCheck';
import ButtonComponent from '../../components/ButtonComponent';
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
      adresse:"",
      numId: "",
      telFix:"",
      telMob:"",
      email:"",
      situation:"",
      nbInfSeize:"",
      nbSupSeize:"",
      profession:"",
      dateNaiss:"",
      datePermis:"",
      marque:"",
      modele:"",
      version:"",
      puissanceFisc:"",
      typeMine:"",
      miseCirc:"",
      immatric:"",
      dateAcquis:"",
      titulaireCarte:"",
      autreConduct:"",
      coef:"",
      dateCrm:"",
      natureFirst:"",
      dateFirst:"",
      natureScnd:"",
      dateScnd:"",
      natureThird:"",
      dateThird:"",
      resiliation:"",
      motifResil:"",
      dateResil:"",
      suspension:"",
      dateSuspens:"",
      dateMotifSuspens:"",
      boxFermé: false,
      terrainClos: false,
      parkingSecurité: false,
      voiePublique: false,
      responsableCivile: false,
      volIncendie: false,
      briseDeGlace: false,
      tousDommage: false,
      assistance: false,
      vehiculeRemplacement: false,
      limite: false,
      conduiteEx: false,
      equipement: false,
      protection: false,
      permis: false,
      perte: false,
      marchandise: false, 
      prelevement: false,
      cheque: false,
      cb: false,
      virement: false,
    });

    const [natureFirst, setNatureFirst] = React.useState('Responsable');
    const [natureScnd, setNatureSecond] = React.useState('Responsable');
    const [natureThird, setNatureThird] = React.useState('Responsable');
    const [datePermis, setDatePermis] = React.useState("");
    const [marque, setMarque] = React.useState("");
    const [dateCrm, setDateCrm] = React.useState("");
    const [dateFirst, setDateFirst] = React.useState("");
    const [dateScnd, setDateScnd] = React.useState("");
    const [dateThird, setDateThird] = React.useState("");
    const [dateResil, setDateResil] = React.useState("");
    const [dateSuspens, setDateSuspens] = React.useState("");
    const [dateMotifSuspens, setDateMotifSuspens] = React.useState("");


    // const [state, setState] = React.useState({
      
    // });

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setState({
    //     ...state,
    //     [event.target.name]: event.target.checked,
    //   });
    // };
    const { boxFermé, terrainClos, parkingSecurité, voiePublique } = data;
    const { responsableCivile, volIncendie, briseDeGlace, tousDommage } = data;
    const { assistance, vehiculeRemplacement, limite, conduiteEx, equipement, protection, permis, perte, marchandise } = data;
    const { prelevement, cheque, cb, virement } = data;




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
                <TextFieldPersonnalise id={''} name="prenom" required={true}  label={"Prénom"} onChange={handleChange} value={prenom} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"adresse"} required={true} label={'Adresse'} onChange={handleChange} value={adresse} />
                <TextFieldPersonnalise id={''} name={"numId"} required={true} label={'N° Client'} onChange={handleChange} value={numId} /> 
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"telFix"} required={true} label={'Téléphone Fixe'} onChange={handleChange} value={telFix} />
                <TextFieldPersonnalise id={''} name={"telMob"} required={true} label={'Téléphone Mobile'} onChange={handleChange} value={telMob} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"email"} required={true} label={'Email'} onChange={handleChange} value={email} />
                <TextFieldPersonnalise id={''} name={"situation"} required={true} label={'Situation Familial'} onChange={handleChange} value={situation} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"nbInfSeize"} required={true} label={"Nombre d'enfants < 16"} onChange={handleChange} value={nbInfSeize} />
                <TextFieldPersonnalise id={''} name={"nbSupSeize"} required={true} label={"Nombre d'enfants > 16"} onChange={handleChange} value={nbSupSeize} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"profession"} required={true} label={'Profession'} onChange={handleChange} value={profession} />
                <TextFieldPersonnalise id={''} name={"dateNaiss"} required={true} label={'Date de Naissance'} onChange={handleChange} value={dateNaiss} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"datePermis"} required={true} label={'Date de Permis de Conduire'} onChange={handleChange} value={datePermis} />
                <TextFieldPersonnalise id={''} name={"marque"} required={true} label={"Marque (D1)"} onChange={handleChange} value={marque} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"modele"} required={true} label={"Modèle (D3)"} onChange={handleChange} value={modele} />
                <TextFieldPersonnalise id={''} name={"version"} required={true} label={"Version"} onChange={handleChange} value={version} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"puissanceFisc"} required={true} label={"Puissance Fiscale (P6)"} onChange={handleChange} value={puissanceFisc} />
                <TextFieldPersonnalise id={''} name={"typeMine"} required={true} label={"Type Mines (D2)"} onChange={handleChange} value={typeMine} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"miseCirc"} required={true} label={"Mise en Circulation (B)"} onChange={handleChange} value={miseCirc} />
                <TextFieldPersonnalise id={''} name={"immatric"} required={true} label={"Immatriculation (A)"} onChange={handleChange} value={immatric} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={""} required={true} label={"Date d'Acquisition"} onChange={handleChange} value={"dateAcquis"} />
                <TextFieldPersonnalise id={''} name={"titulaireCarte"} required={true} label={"Titulaire Carte Grise"} onChange={handleChange} value={titulaireCarte} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"autreConduct"} required={true} label={"Autres Conducteurs à désigner"} onChange={handleChange} value={autreConduct} />
                <TextFieldPersonnalise id={''} name={"coef"} required={true} label={"Coef. Bonus/Malus (CRM)"} onChange={handleChange} value={coef} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"dateCrm"} required={true} label={"Date d'Obtention du CRM"} onChange={handleChange} value={dateCrm} />
                </div>
                <Typography>Nombre de sinistres lors des dernières années(R.i)</Typography>
                <Typography>Ordre = Responsable / Demi-Responsable / Non-Responsable / Bris de Glace</Typography>
                <div>
                <TextField  id="outlined-required" select name={"natureFirst"} label="Nature" value={natureFirst} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} name={"dateFirst"} label={"Date"} onChange={handleChange} value={dateFirst} />
                </div>
                <div>
                <TextField  id="outlined-required" select name={"natureScnd"} label="Nature" value={natureScnd} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined" sx={{borderColor:"green"}}>
                    {currencies.map((option) => (<MenuItem key={option.value}  value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} name={"dateScnd"} label={"Date"} onChange={handleChange} value={dateScnd} />
                </div>
                <div>
                <TextField  id="outlined-required" select name={"natureThird"} label="Nature" value={natureThird} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} name={"dateThird"} label={"Date"} onChange={handleChange} value={dateThird} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} name={"resiliation"} label={"Résiliaton de la Compagnie"} onChange={handleChange} value={resiliation} />
                <TextFieldPersonnalise id={''} required={true} name={"motifResil"} label={"Motif de Résiliation"} onChange={handleChange} value={motifResil} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} name={"dateResil"} label={"Date de Résiliation"} onChange={handleChange} value={dateResil} />
                <TextFieldPersonnalise id={''} required={true} name={"suspension"} label={"Suspension/Annulation de Permis"} onChange={handleChange} value={suspension} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} name={"dateSuspens"} label={"Date & motif de la suspension / Annulation"} onChange={handleChange} value={dateSuspens} />
                <TextFieldPersonnalise  id="outlined-required" required={true} name={"dateMotifSuspens"} label="Date & motif de la suspension / Annulation" onChange={handleChange} value={dateMotifSuspens}/>
                </div>
                <Typography>Garage:</Typography>
            <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
              <FormGroup>
              <FormControlLabel
              control={
              <Checkbox checked={boxFermé} onChange={handleChangeChecked} name="boxFermé" />
            }
            label="Box Fermé"
          />
          <FormControlLabel
            control={
              <Checkbox checked={terrainClos} onChange={handleChangeChecked} name="terrainClos" />
            }
            label="Terrain Clos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={parkingSecurité} onChange={handleChangeChecked} name="parkingSecurité" />
            }
            label="Parking Sécurité"
          />
          <FormControlLabel
            control={
              <Checkbox checked={voiePublique} onChange={handleChangeChecked} name="voiePublique" />
            }
            label="Voie PUBLIQUE"
          />
        </FormGroup>
        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
      </FormControl>
      </Box>
      <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Garanties Souhaitées</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={responsableCivile} onChange={handleChangeChecked} name="resposableCivile" />} label="Responsable Civile"/>
                        <FormControlLabel control={<Checkbox checked={volIncendie} onChange={handleChangeChecked} name="volIncendie" />} label="Vol, Icendie"/>
                        <FormControlLabel control={<Checkbox checked={briseDeGlace} onChange={handleChangeChecked} name="briseDeGlace" />}label="Brise de Glace"/>
                        <FormControlLabel control={<Checkbox checked={tousDommage} onChange={handleChangeChecked} name="tousDommage" />}label="Dommages tous Accidant"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Garanties Souhaitées</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={assistance} onChange={handleChangeChecked} name="resposableCivile" />} label="  Assistance 0km"/>
                        <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChangeChecked} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                        <FormControlLabel control={<Checkbox checked={limite} onChange={handleChangeChecked} name="limite" />}label="Limite Km"/>
                        <FormControlLabel control={<Checkbox checked={conduiteEx} onChange={handleChangeChecked} name="conduiteEx" />}label="Conduite Exclusive"/>
                        <FormControlLabel control={<Checkbox checked={equipement} onChange={handleChangeChecked} name="equipement" />}label="Equipements"/>
                        <FormControlLabel control={<Checkbox checked={protection} onChange={handleChangeChecked} name="protection" />}label="Protection Juridique"/>
                        <FormControlLabel control={<Checkbox checked={permis} onChange={handleChangeChecked} name="permis" />}label="Permis de Conduire"/>
                        <FormControlLabel control={<Checkbox checked={perte} onChange={handleChangeChecked} name="perte" />}label="Perte Financière tous Accidant"/>
                        <FormControlLabel control={<Checkbox checked={marchandise} onChange={handleChangeChecked} name="marchandise" />}label="Marchandises Transportées"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Modes de Paiement possible</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={prelevement} onChange={handleChangeChecked} name="prelevement" />} label="Prélèvement"/>
                        <FormControlLabel control={<Checkbox checked={cheque} onChange={handleChangeChecked} name="cheque" />} label="Chèque"/>
                        <FormControlLabel control={<Checkbox checked={cb} onChange={handleChangeChecked} name="cb" />}label="CB"/>
                        <FormControlLabel control={<Checkbox checked={virement} onChange={handleChangeChecked} name="virement" />}label="Virement"/>
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        
                {/* <div><AutoMotoGarantieCheck/></div> */}
                {/* <div><AutoMotoOptionCheck/></div> */}
                {/* <div><AutoMotoPaiementCheck/></div> */}
                {/* <div><AutoMotoUsageVehiculaireCheck/></div>
                <div>
                <TextField  id="outlined-required" label="Date & motif de la suspension / Annulation" defaultValue="" variant="outlined"/>
                </div> */}
                <ButtonComponent libele={''} children={undefined} settings={''}/>
            </Box>
        </AutoMotoFormContainer>
    );
}

export default AutoMotoForm;