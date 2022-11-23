import { styled, Typography, Box, Grid, TextField, MenuItem, FormHelperText, FormControl, FormGroup, Checkbox, FormControlLabel, FormLabel, Button} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import { currencies } from '../../common/Data';
import AutoMotoGarageCheck from '../../components/AutoMotoGarageCheck';
import AutoMotoGarantieCheck from '../../components/AutoMotoGarantieCheck';
import AutoMotoOptionCheck from '../../components/AutoMotoOptionCheck';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import AutoMotoUsageVehiculaireCheck from '../../components/AutoMotoUsageVehiculaireCheck';
import ButtonComponent from '../../components/ButtonComponent';
import { Garage } from '../../components/Ennum/Garage';
import { Garantie } from '../../components/Ennum/Garantie';
import { ModePaiement } from '../../components/Ennum/ModePaiement';
import { Options } from '../../components/Ennum/Option';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import { DevisAutoModel } from '../../models/DevisAutoModel';
import { addDevisAuto } from '../../redux/slices/DevisAutoRed';
import { useAppDispatch, useAppSelector } from '../../redux/store';
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
    // const [data, setData] = React.useState({
    //   name: "",
    //   prenom : "",
    //   adresse:"",
    //   numId: "",
    //   telFix:"",
    //   telMob:"",
    //   email:"",
    //   situation:"",
    //   nbInfSeize:"",
    //   nbSupSeize:"",
    //   profession:"",
    //   dateNaiss:"",
    //   datePermis:"",
    //   marque:"",
    //   modele:"",
    //   version:"",
    //   puissanceFisc:"",
    //   typeMine:"",
    //   miseCirc:"",
    //   immatric:"",
    //   dateAcquis:"",
    //   titulaireCarte:"",
    //   autreConduct:"",
    //   coef:"",
    //   dateCrm:"",
    //   natureFirst:"",
    //   dateFirst:"",
    //   natureScnd:"",
    //   dateScnd:"",
    //   natureThird:"",
    //   dateThird:"",
    //   resiliation:"",
    //   motifResil:"",
    //   dateResil:"",
    //   suspension:"",
    //   dateSuspens:"",
    //   dateMotifSuspens:"",
    //   boxFermé: false,
    //   terrainClos: false,
    //   parkingSecurité: false,
    //   voiePublique: false,
    //   responsableCivile: false,
    //   volIncendie: false,
    //   briseDeGlace: false,
    //   tousDommage: false,
    //   assistance: false,
    //   vehiculeRemplacement: false,
    //   limite: false,
    //   conduiteEx: false,
    //   equipement: false,
    //   protection: false,
    //   permis: false,
    //   perte: false,
    //   marchandise: false, 
    //   prelevement: false,
    //   cheque: false,
    //   cb: false,
    //   virement: false,
    // });

    const [data, setData] = React.useState<DevisAutoModel>();
    const user = useAppSelector(state => state.auth.user);

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
    // const { boxFermé, terrainClos, parkingSecurité, voiePublique } = data;
    // const { responsableCivile, volIncendie, briseDeGlace, tousDommage } = data;
    // const { assistance, vehiculeRemplacement, limite, conduiteEx, equipement, protection, permis, perte, marchandise } = data;
    // const { prelevement, cheque, cb, virement } = data;




  // const handleChange = (value: any, name: string) => {
  //   setData((prev) => ({...prev, [name]: value}));
  // };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisAutoModel));
    console.log(data);
  };

   const handleChangeCheckedGarantie = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Garanties_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisAutoModel));
    }
    else
      if(data?.Garanties_Souhaitées.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Garanties_Souhaitées: data?.Garanties_Souhaitées.filter(one => one != e.target.name) } as DevisAutoModel));
      }
    console.log(data);
  };
   const handleChangeCheckedGarage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Garage ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Garage: gara } as DevisAutoModel));
    }
    else
      if(data?.Garage.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Garage: data?.Garage.filter(one => one != e.target.name) } as DevisAutoModel));
      }
    console.log(data);
  };
   const handleChangeCheckedOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Option ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Option: gara } as DevisAutoModel));
    }
    else
      if(data?.Option.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Option: data?.Option.filter(one => one != e.target.name) } as DevisAutoModel));
      }
    console.log(data);
  };
   const handleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Mode_Paiement ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Mode_Paiement: gara } as DevisAutoModel));
    }
    else
      if(data?.Mode_Paiement.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Mode_Paiement: data?.Mode_Paiement.filter(one => one != e.target.name) } as DevisAutoModel));
      }
    console.log(data);
  };

  const dispatch = useAppDispatch();

  const validate = () => {
    if (data && user?.uid) {
      data.id_client = user?.uid;
      dispatch(addDevisAuto({oneDevisAuto: data})).unwrap();
    }
}


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
                <TextFieldPersonnalise  id={''} name="Nom" required={true} label={'Nom'} value={data?.Nom ?? ""} onChange={handleChange} />
                <TextFieldPersonnalise id={''} name="Prenom" required={true}  label={"Prénom"} onChange={handleChange} value={data?.Prenom ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Adresse"} required={true} label={'Adresse'} onChange={handleChange} value={data?.Adresse ?? ""} />
                <TextFieldPersonnalise id={''} name={"Num_Client"} required={true} label={'N° Client'} onChange={handleChange} value={data?.Num_Client ?? ""} /> 
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Telephone_Fix"} required={true} label={'Téléphone Fixe'} onChange={handleChange} value={data?.Telephone_Fix ?? ""} />
                <TextFieldPersonnalise id={''} name={"Telephone_Mobile"} required={true} label={'Téléphone Mobile'} onChange={handleChange} value={data?.Telephone_Mobile ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Email"} required={true} label={'Email'} onChange={handleChange} value={data?.Email ?? ""} />
                <TextFieldPersonnalise id={''} name={"Situation_Familial"} required={true} label={'Situation Familial'} onChange={handleChange} value={data?.Situation_Familial?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Nombre_Enfants_Inférieur_16ans"} required={true} label={"Nombre d'enfants < 16"} onChange={handleChange} value={data?.Nombre_Enfants_Inférieur_16ans ?? ""} />
                <TextFieldPersonnalise id={''} name={"Nombre_Enfants_Superieur_16ans"} required={true} label={"Nombre d'enfants > 16"} onChange={handleChange} value={data?.Nombre_Enfants_Superieur_16ans ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Profession"} required={true} label={'Profession'} onChange={handleChange} value={data?.Profession ?? ""} />
                <TextFieldPersonnalise id={''} name={"Date_Naissance"} required={true} label={'Date de Naissance'} onChange={handleChange} value={data?.Date_Naissance ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Date_Permis_Conduite"} required={true} label={'Date de Permis de Conduire'} onChange={handleChange} value={data?.Date_Permis_Conduite ?? ""} />
                <TextFieldPersonnalise id={''} name={"Marque_D1"} required={true} label={"Marque (D1)"} onChange={handleChange} value={data?.Marque_D1 ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Modele_D3"} required={true} label={"Modèle (D3)"} onChange={handleChange} value={data?.Modele_D3 ?? ""} />
                <TextFieldPersonnalise id={''} name={"Version"} required={true} label={"Version"} onChange={handleChange} value={data?.Version ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Puissance_Fiscale"} required={true} label={"Puissance Fiscale (P6)"} onChange={handleChange} value={data?.Puissance_Fiscale ?? ""} />
                <TextFieldPersonnalise id={''} name={"Type_Mine_D2"} required={true} label={"Type Mines (D2)"} onChange={handleChange} value={data?.Type_Mine_D2 ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Mise_Circulation_B"} required={true} label={"Mise en Circulation (B)"} onChange={handleChange} value={data?.Mise_Circulation_B ?? ""} />
                <TextFieldPersonnalise id={''} name={"Immatriculation"} required={true} label={"Immatriculation (A)"} onChange={handleChange} value={data?.Immatriculation ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Date_Acquisition"} required={true} label={"Date d'Acquisition"} onChange={handleChange} value={data?.Date_Acquisition ?? ""} />
                <TextFieldPersonnalise id={''} name={"Titulaire_Carte_Grise"} required={true} label={"Titulaire Carte Grise"} onChange={handleChange} value={data?.Titulaire_Carte_Grise ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Autres_Conducteurs"} required={true} label={"Autres Conducteurs à désigner"} onChange={handleChange} value={data?.Autres_Conducteurs ?? ""} />
                <TextFieldPersonnalise id={''} name={"Coefficient_Bonus_CRM"} required={true} label={"Coef. Bonus/Malus (CRM)"} onChange={handleChange} value={data?.Coefficient_Bonus_CRM ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name={"Date_Obtention_CRM"} required={true} label={"Date d'Obtention du CRM"} onChange={handleChange} value={data?.Date_Obtention_CRM?? ""} />
                </div>
                <Typography>Nombre de sinistres lors des dernières années(R.i)</Typography>
                <Typography>Ordre = Responsable / Demi-Responsable / Non-Responsable / Bris de Glace</Typography>
                <div>
                <TextField  id="outlined-required" select name={"Nature_Sinistre_1"} label="Nature" value={data?.Nature_Sinistre_1 ?? ""} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} name={"Date_Sinistre_1"} label={"Date"} onChange={handleChange} value={data?.Date_Sinistre_1 ?? ""} />
                </div>
                <div>
                <TextField  id="outlined-required" select name={"Nature_Sinistre_2"} label="Nature" value={data?.Nature_Sinistre_2 ?? ""} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined" sx={{borderColor:"green"}}>
                    {currencies.map((option) => (<MenuItem key={option.value}  value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} name={"Date_Sinistre_2"} label={"Date"} onChange={handleChange} value={data?.Date_Sinistre_2 ?? ""} />
                </div>
                <div>
                <TextField  id="outlined-required" select name={"Nature_Sinistre_3"} label="Nature" value={data?.Nature_Sinistre_3 ?? ""} onChange={handleChange} helperText="Veuillez sélectioner la nature" variant="outlined">
                    {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextFieldPersonnalise id={''} required={true} name={"Date_Sinistre_3"} label={"Date"} onChange={handleChange} value={data?.Date_Sinistre_3 ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} name={"Resiliation_Compagnie"} label={"Résiliaton de la Compagnie"} onChange={handleChange} value={data?.Resiliation_Compagnie ?? ""} />
                <TextFieldPersonnalise id={''} required={true} name={"Motif_Resiliation"} label={"Motif de Résiliation"} onChange={handleChange} value={data?.Motif_Resiliation ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} name={"Date_Resiliation"} label={"Date de Résiliation"} onChange={handleChange} value={data?.Date_Resiliation ?? ""} />
                <TextFieldPersonnalise id={''} required={true} name={"Suspension_ou_Annulation_Permis"} label={"Suspension/Annulation de Permis"} onChange={handleChange} value={data?.Suspension_ou_Annulation_Permis?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} name={"dateSuspens"} label={"Date & motif de la suspension / Annulation"} onChange={handleChange} value={data?.Date_Motif_Suspension ?? ""} />
                {/* <TextFieldPersonnalise  id="outlined-required" required={true} name={"dateMotifSuspens"} label="Date & motif de la suspension / Annulation" onChange={handleChange} value={data?.Nature_Sinistre_1 ?? ""}/> */}
                </div>
                <Typography>Garage:</Typography>
            <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
              <FormGroup>
                  {
                    Object.keys(Garage).map((oneGarage, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedGarage} name={Garage[oneGarage as keyof typeof Garage]}/>} label={Garage[oneGarage as keyof typeof Garage]}/>)
                  }
        </FormGroup>
        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
      </FormControl>
      </Box>
      <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Garanties Souhaitées</FormLabel>
                    <FormGroup>
                      {
                        Object.keys(Garantie).map((oneGarantie, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedGarantie} name={Garantie[oneGarantie as keyof typeof Garantie]}/>} label={Garantie[oneGarantie as keyof typeof Garantie]}/>)
                      }
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Option</FormLabel>
                    <FormGroup>
                      {
                        Object.keys(Options).map((oneOptions, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedOptions} name={Options[oneOptions as keyof typeof Options]}/>} label={Options[oneOptions as keyof typeof Options]}/>)
                      }
                        {/* <FormControlLabel control={<Checkbox checked={assistance} onChange={handleChangeChecked} name="resposableCivile" />} label="  Assistance 0km"/>
                        <FormControlLabel control={<Checkbox checked={vehiculeRemplacement} onChange={handleChangeChecked} name="vehiculeRemplacement" />} label="Véhicule de Remplacement"/>
                        <FormControlLabel control={<Checkbox checked={limite} onChange={handleChangeChecked} name="limite" />}label="Limite Km"/>
                        <FormControlLabel control={<Checkbox checked={conduiteEx} onChange={handleChangeChecked} name="conduiteEx" />}label="Conduite Exclusive"/>
                        <FormControlLabel control={<Checkbox checked={equipement} onChange={handleChangeChecked} name="equipement" />}label="Equipements"/>
                        <FormControlLabel control={<Checkbox checked={protection} onChange={handleChangeChecked} name="protection" />}label="Protection Juridique"/>
                        <FormControlLabel control={<Checkbox checked={permis} onChange={handleChangeChecked} name="permis" />}label="Permis de Conduire"/>
                        <FormControlLabel control={<Checkbox checked={perte} onChange={handleChangeChecked} name="perte" />}label="Perte Financière tous Accidant"/>
                        <FormControlLabel control={<Checkbox checked={marchandise} onChange={handleChangeChecked} name="marchandise" />}label="Marchandises Transportées"/> */}
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Modes de Paiement possible</FormLabel>
                    <FormGroup>
                      {
                        Object.keys(ModePaiement).map((oneModePaiement, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedModePaiement} name={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>} label={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>)
                      }
                        {/* <FormControlLabel control={<Checkbox checked={prelevement} onChange={handleChangeChecked} name="prelevement" />} label="Prélèvement"/>
                        <FormControlLabel control={<Checkbox checked={cheque} onChange={handleChangeChecked} name="cheque" />} label="Chèque"/>
                        <FormControlLabel control={<Checkbox checked={cb} onChange={handleChangeChecked} name="cb" />}label="CB"/>
                        <FormControlLabel control={<Checkbox checked={virement} onChange={handleChangeChecked} name="virement" />}label="Virement"/> */}
                    </FormGroup>
                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                </FormControl>
            </Box>
        
                {/* <div><AutoMotoGarantieCheck/></div> */}
                {/* <div><AutoMotoOptionsCheck/></div> */}
                {/* <div><AutoMotoPaiementCheck/></div> */}
                {/* <div><AutoMotoUsageVehiculaireCheck/></div>
                <div>
                <TextField  id="outlined-required" label="Date & motif de la suspension / Annulation" defaultValue="" variant="outlined"/>
                </div> */}
                {/* <ButtonComponent libele={''} children={undefined} settings={''}/> */}
                <Button variant='outlined' onClick={validate}>valider</Button>
            </Box>
        </AutoMotoFormContainer>
    );
}

export default AutoMotoForm;