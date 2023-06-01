import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Input, MenuItem, Radio, RadioGroup, styled, TextField, Typography } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import FormAccesButton from '../../components/FormAccesButton';
import { CLIENT_PAGES, USER_PAGES } from '../../routes/paths';
import SectionStyle from '../../styles/SectionStyle';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import { DevisAutoModel } from '../../models/DevisAutoModel';
import { Garage } from '../../components/Ennum/Garage';
import { currencies, residence, situationFamille, statut } from '../../common/Data';
import { Garantie } from '../../components/Ennum/Garantie';
import { Options } from '../../components/Ennum/Option';
import { ModePaiement } from '../../components/Ennum/ModePaiement';
import { DevisSanteModel } from '../../models/DevisSanteModel';
import { GarantieSante } from '../../components/Ennum/GarantiesSante';
import { OptionsSante } from '../../components/Ennum/OptionsSante';
import { DevisHabitationModel } from '../../models/DevisHabitationModel';
import { InstallationsHabitation } from '../../components/Ennum/InstallationsHabitation';
import { GarantiesHabitation } from '../../components/Ennum/GarantiesHabitation';
import { OptionHabitation } from '../../components/Ennum/OptionsHabitation';
import { DevisProModel } from '../../models/DevisProModel';
import { GarantiesPro } from '../../components/Ennum/GarantiesPro';
import { OptionsPro } from '../../components/Ennum/OptionsPro';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { ContactElementsContainer } from '../ContactPage.tsx/ContactForm';
import { PROJECT_COLORS } from '../../common/colors';
import DatePickerComponent from '../../components/DatePickerComponent';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DevisModelPdf from '../../components/DevisAutoPdf';





const DevisOptionSectionContainer=styled('section')(()=>({
    width:"calc(100% - 27vw)",
    padding:"65px 15vw 75px 12vw",
    // width:"100%",
    minHeight:"60vh",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    // paddingBottom:"30px"
}));

const BoxStyle=styled(Box)(({theme})=>({
    width:"65%",
    [theme.breakpoints.down("lg")]: {
    },
    [theme.breakpoints.down("md")]: {
        width:"90%"
    },
   
}));
const TextFieldStyle=styled(TextField)(({theme})=>({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'grey', // Remplacez "your-color" par votre couleur personnalisée
        },
        '&:hover fieldset': {
            borderColor: 'black', // Remplacez "your-hover-color" par votre couleur au survol
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green', // Remplacez "your-focus-color" par votre couleur au clic/focus
          },
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'green', // Remplacez "your-focus-color" par votre couleur personnalisée après le clic/focus
      },
   
}));

const customDatePickerStyles = {
    // Styles par défaut
    root: {
      border: '1px solid red', // Exemple de couleur de bordure par défaut
    },
    // Styles au survol
    '&:hover': {
      border: '1px solid blue', // Exemple de couleur de bordure au survol
    },
    // Styles au focus
    '&:focus': {
      border: '1px solid green', // Exemple de couleur de bordure au focus
    },
  };

function DevisOptionSection() {
    const [formType, setFormType] = useState('');

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [adresse, setAdresse] = useState('');

    // information devis Auto Moto

    const validate = (event: FormEvent<HTMLFormElement>) => {
        autoData!.typeDevis= formType
        if (!formType) {
            return null
        }
        if (formType === "AUTO-MOTO") {
            event.preventDefault();
            
            autoData!.Nom = nom;
            autoData!.Prenom = prenom;
            autoData!.Telephone_Fix = telephone;
            autoData!.Adresse = adresse;
            console.log(autoData);

        } else if (formType === "SANTE") {
            event.preventDefault();
            santeData!.Nom = nom;
            santeData!.Prenom = prenom;
            santeData!.Telephone_Fix = telephone;
            santeData!.Adresse = adresse;
            console.log(santeData);
        }  else if (formType === "HABITATION") {
            event.preventDefault();
            habitationData!.Nom = nom;
            habitationData!.Prenom = prenom;
            habitationData!.Telephone_Fix = telephone;
            habitationData!.Adresse = adresse;
            console.log(habitationData);
        }   else {
            event.preventDefault();
            proData!.Nom = nom;
            proData!.Prenom = prenom;
            proData!.Telephone_Fix = telephone;
            proData!.Adresse = adresse;
            console.log(proData);
        }
        
        // if (data && user?.uid) {
        //   data.id_client = user?.uid;
        //   const nDate= new Date();
        //   data!.dateRegister= `${nDate.getFullYear()}-${(nDate.getUTCMonth()+1)}-${nDate.getDate()}`;
        //   data.typeDevis = "AUTO-MOTO";
        //   dispatch(addDevisAuto({oneDevisAuto: data})).unwrap().then(handleOpenDialog);
        // }
    } 
    const defaultDate = dayjs('2022-04-17');

    const [autoData, setAutoData] = React.useState<DevisAutoModel>();

    const handleChangeAuto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutoData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisAutoModel));
        console.log(autoData);
      };
    const handleChangeAutoDate = (propertyName: string, newValue: string | null) => {
        const parsedValue = newValue ? dayjs(newValue).format("YYYY/MM/DD") : null;
        setAutoData((prev) => ({ ...prev, [propertyName]: parsedValue } as DevisAutoModel));
        console.log(autoData);
      };

      const AutohandleChangeCheckedGarage = (e: React.ChangeEvent<HTMLInputElement>) => {
        let gara: Array<string> = Array.from(autoData?.Garage ?? []);
        if(e.target.checked) {
          gara?.push(e.target.name);
          setAutoData((prev) => ({ ...prev, Garage: gara } as DevisAutoModel));
        }
        else
          if(autoData?.Garage.filter(one => one != e.target.name).length) {
            setAutoData((prev) => ({ ...prev, Garage: autoData?.Garage.filter(one => one != e.target.name) } as DevisAutoModel));
          }
        console.log(autoData);
  };

  const AutohandleChangeCheckedGarantie = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(autoData?.Garanties_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setAutoData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisAutoModel));
    }
      else
      if(autoData?.Garanties_Souhaitées.filter(one => one != e.target.name).length) {
        setAutoData((prev) => ({ ...prev, Garanties_Souhaitées: autoData?.Garanties_Souhaitées.filter(one => one != e.target.name) } as DevisAutoModel));
      }
    console.log(autoData);
};

const AutohandleChangeCheckedOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(autoData?.Option ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setAutoData((prev) => ({ ...prev, Option: gara } as DevisAutoModel));
    }
    else
      if(autoData?.Option.filter(one => one != e.target.name).length) {
        setAutoData((prev) => ({ ...prev, Option: autoData?.Option.filter(one => one != e.target.name) } as DevisAutoModel));
      }
    console.log(autoData);
};

const AutohandleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(autoData?.Mode_Paiement ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setAutoData((prev) => ({ ...prev, Mode_Paiement: gara } as DevisAutoModel));
    }
    else
      if(autoData?.Mode_Paiement.filter(one => one != e.target.name).length) {
        setAutoData((prev) => ({ ...prev, Mode_Paiement: autoData?.Mode_Paiement.filter(one => one != e.target.name) } as DevisAutoModel));
      }
    console.log(autoData);
};

// information devis Auto Moto fin

// information devis Sante

const [santeData, setSanteData] = React.useState<DevisSanteModel>();

const handleChangeSante = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSanteData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisSanteModel));
    console.log(santeData);
  };

  const SantehandleChangeCheckedGarantie = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(santeData?.Garantie_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setSanteData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisSanteModel));
    }
      else
      if(santeData?.Garantie_Souhaitées.filter(one => one != e.target.name).length) {
        setSanteData((prev) => ({ ...prev, Garantie_Souhaitées: santeData?.Garantie_Souhaitées.filter(one => one != e.target.name) } as DevisSanteModel));
      }
    console.log(santeData);
};

const SantehandleChangeCheckedOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(santeData?.Garantie_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setSanteData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisSanteModel));
    }
      else
      if(santeData?.Garantie_Souhaitées.filter(one => one != e.target.name).length) {
        setSanteData((prev) => ({ ...prev, Garantie_Souhaitées: santeData?.Garantie_Souhaitées.filter(one => one != e.target.name) } as DevisSanteModel));
      }
    console.log(santeData);
};

const SantehandleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(santeData?.Mode_Paiement ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setSanteData((prev) => ({ ...prev, Mode_Paiement: gara } as DevisSanteModel));
    }
    else
      if(santeData?.Mode_Paiement.filter(one => one != e.target.name).length) {
        setSanteData((prev) => ({ ...prev, Mode_Paiement: santeData?.Mode_Paiement.filter(one => one != e.target.name) } as DevisSanteModel));
      }
    console.log(santeData);
  }

// information devis Sante Fin



// information devis Habitation
const [habitationData, setHabitationData] = React.useState<DevisHabitationModel>();

const handleChangeHabitation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabitationData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisHabitationModel));
    console.log(habitationData);
   };

const HabitationhandleChangeCheckedInstallation = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(habitationData?.Installation_Exterieures ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setHabitationData((prev) => ({ ...prev, Installation_Exterieures: gara } as DevisHabitationModel));
    }
    else
      if(habitationData?.Installation_Exterieures.filter(one => one != e.target.name).length) {
        setHabitationData((prev) => ({ ...prev, Installation_Exterieures: habitationData?.Installation_Exterieures.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(habitationData);
};

const HabitationhandleChangeCheckedGarantieHabitat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(habitationData?.Granties_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setHabitationData((prev) => ({ ...prev, Granties_Souhaitées: gara } as DevisHabitationModel));
    }
    else
      if(habitationData?.Granties_Souhaitées.filter(one => one != e.target.name).length) {
        setHabitationData((prev) => ({ ...prev, Granties_Souhaitées: habitationData?.Granties_Souhaitées.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(habitationData);
};

const handleChangeCheckedOptionHabitat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(habitationData?.Options ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setHabitationData((prev) => ({ ...prev, Options: gara } as DevisHabitationModel));
    }
    else
      if(habitationData?.Options.filter(one => one != e.target.name).length) {
        setHabitationData((prev) => ({ ...prev, Options: habitationData?.Options.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(habitationData);
};

const HabitationhandleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(habitationData?.Modes_Paiement ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setHabitationData((prev) => ({ ...prev, Modes_Paiement: gara } as DevisHabitationModel));
    }
    else
      if(habitationData?.Modes_Paiement.filter(one => one != e.target.name).length) {
        setHabitationData((prev) => ({ ...prev, Modes_Paiement: habitationData?.Modes_Paiement.filter(one => one != e.target.name) } as DevisHabitationModel));
      }
    console.log(habitationData);
};
// information devis Habitation Fin


// information devis Pro
const [proData, setProData] = React.useState<DevisProModel>();


const handleChangePro = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisProModel));
    console.log(proData);
   };

const ProhandleChangeCheckedGarantiePro = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(proData?.Garanties_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setProData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisProModel));
    }
    else
      if(proData?.Garanties_Souhaitées.filter(one => one != e.target.name).length) {
        setProData((prev) => ({ ...prev, Garanties_Souhaitées: proData?.Garanties_Souhaitées.filter(one => one != e.target.name) } as DevisProModel));
      }
    console.log(proData);
};

const ProhandleChangeCheckedOptionPro = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(proData?.Options ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setProData((prev) => ({ ...prev, Options: gara } as DevisProModel));
    }
    else
      if(proData?.Options.filter(one => one != e.target.name).length) {
        setProData((prev) => ({ ...prev, Options: proData?.Options.filter(one => one != e.target.name) } as DevisProModel));
      }
    console.log(proData);
  };

  const ProhandleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(proData?.Mode_Paiements ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setProData((prev) => ({ ...prev, Mode_Paiements: gara } as DevisProModel));
    }
    else
      if(proData?.Mode_Paiements.filter(one => one != e.target.name).length) {
        setProData((prev) => ({ ...prev, Mode_Paiements: proData?.Mode_Paiements.filter(one => one != e.target.name) } as DevisProModel));
      }
    console.log(proData);
  };


// information devis 

    return (
        // <ContactElementsContainer>
        <DevisOptionSectionContainer>
            {/* <Typography sx={{fontSize:"30px", textAlign:"center", fontWeight:"bold"}}>SELECTIONEZ:</Typography>
            <Container sx={{margin:"50px"}}>
            <Grid container xs rowSpacing={1} >
                <Grid item xs={6}>
                    <FormAccesButton nom={"AUTO-MOTO"} desc={"(Vélo, Trotinette,Bateau)"} chemin={CLIENT_PAGES.autoMoto}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"HABITATION"} desc={"(Propriétaie ou Locataire)"} chemin={CLIENT_PAGES.habitation}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"SANTE"} desc={"(Mutuel et Prévoyance)"} chemin={CLIENT_PAGES.sante}/>
                </Grid>
                <Grid item xs={6}>
                    <FormAccesButton nom={"PROFESSIONELLE"} desc={"(RCPRO,Multirisques et Decennal)"} chemin={CLIENT_PAGES.professionelle}/>
                </Grid>
            </Grid> */}
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Renseignez le formulaire suivant:</Typography>

            <BoxStyle  >
                <Box component={"form"} onSubmit={validate}  sx={{width:"100%"}}>
                {/* <Container> */}
                    <Grid container spacing={{xs: 2, md: 5}} sx={{margin:"35px 0px 40px 0px", }}>
                    {/* <Grid container > */}
                        <Grid item  lg={6} md={6} sm={6} xs={12}>
                            <TextFieldPersonnalise  id={''} name="Nom" required={true} label={'Nom'} value={nom} onChange={(e) => setNom(e.target.value)} />
                        </Grid>
                        <Grid item  lg={6} md={6} sm={6} xs={12}>
                            <TextFieldPersonnalise  id={''} name="Nom" required={true} label={'Prenom(s)'} value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                        </Grid>
                        <Grid item  lg={6} md={6} sm={6} xs={12}>
                            <TextFieldPersonnalise  id={''} name="Nom" required={true} label={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item  lg={6} md={6} sm={6} xs={12}>
                            <TextFieldPersonnalise  id={''} name="Nom" required={true} label={'Telephone'} value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                        </Grid>
                        <Grid item  lg={12} md={12} sm={12} xs={12}>
                            <TextFieldPersonnalise  id={''} name="Nom" required={true} label={'Adresse'} value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                        </Grid>
                        {/* <Grid item  lg={12} md={12} sm={12} xs={12}>
                            <TextFieldStyle fullWidth label={"Test"}/>
                        </Grid> */}
                        {/* <Grid item  lg={12} md={12} sm={12} xs={12}>
                            <Input  fullWidth type='file' inputProps={{}} />
                        </Grid> */}
                        <Grid item  lg={12} md={12} sm={12} xs={12}>
                            {/* <TextFieldPersonnalise  id={''} name="Nom" required={true} label={'Adresse'} value={adresse} onChange={(e) => setAdresse(e.target.value)} /> */}
                            <TextFieldStyle  defaultValue={"Selectionner Un Devis"} select value={formType} onChange={(e) => setFormType(e.target.value)} label="Selectioner le Type de Devis" fullWidth >
                                <MenuItem value={"AUTO-MOTO"}>AUTO-MOTO</MenuItem>
                                <MenuItem value={"SANTE"}>SANTE</MenuItem>
                                <MenuItem value={"HABITATION"}>HABITATION</MenuItem>
                                <MenuItem value={"PRO"}>RC-PRO</MenuItem>
                            </TextFieldStyle>
                        </Grid>
                    </Grid>

                        {formType === "AUTO-MOTO" && (
                            <>
                            <Grid container spacing={{xs: 2, md: 5}} sx={{margin:"0px 0px 24px 0px"}}>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextField fullWidth id={''} select name={"Situation_Familial"} required={true} label={'Situation Familial'} onChange={handleChangeAuto} value={autoData?.Situation_Familial?? ""} >
                                        {situationFamille.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Nombre_Enfants_Inférieur_16ans"} required={true} label={"Nombre d'enfants < 16"} type="number" onChange={handleChangeAuto} value={autoData?.Nombre_Enfants_Inférieur_16ans ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Nombre_Enfants_Superieur_16ans"} required={true} label={"Nombre d'enfants > 16"} type="number" onChange={handleChangeAuto} value={autoData?.Nombre_Enfants_Superieur_16ans ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Profession"} required={true} label={'Profession'} onChange={handleChangeAuto} value={autoData?.Profession ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <DatePickerComponent child={<DatePicker label={"Date_Naissance"}  sx={{width:"100%"}}  value={autoData?.Date_Naissance} onChange={(newValue) => handleChangeAutoDate("Date_Naissance", newValue )} />}/>
                                    {/* <TextFieldPersonnalise id={''} name={"Date_Naissance"} required={true} label={'Date de Naissance'} type="date" onChange={handleChangeAuto} value={autoData?.Date_Naissance ?? ""} /> */}
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {/* <TextFieldPersonnalise id={''} name={"Date_Permis_Conduite"} required={true} label={'Date de Permis de Conduire'}  type="date" onChange={handleChangeAuto} value={autoData?.Date_Permis_Conduite ?? ""} /> */}
                                    <DatePickerComponent child={<DatePicker label={"Date_Permis_Conduite"}  sx={{width:"100%"}}  value={autoData?.Date_Permis_Conduite } onChange={(newValue) => handleChangeAutoDate("Date_Permis_Conduite", newValue )} />}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Marque_D1"} required={true} label={"Marque (D1)"} onChange={handleChangeAuto} value={autoData?.Marque_D1 ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Modele_D3"} required={true} label={"Modèle (D3)"} onChange={handleChangeAuto} value={autoData?.Modele_D3 ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Version"} required={true} label={"Version"} onChange={handleChangeAuto} value={autoData?.Version ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Puissance_Fiscale"} required={true} label={"Puissance Fiscale (P6)"} onChange={handleChangeAuto} value={autoData?.Puissance_Fiscale ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Type_Mine_D2"} required={true} label={"Type Mines (D2)"} onChange={handleChangeAuto} value={autoData?.Type_Mine_D2 ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Mise_Circulation_B"} required={true} label={"Mise en Circulation (B)"} onChange={handleChangeAuto} value={autoData?.Mise_Circulation_B ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Immatriculation"} required={true} label={"Immatriculation (A)"} onChange={handleChangeAuto} value={autoData?.Immatriculation ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {/* <TextFieldPersonnalise id={''} name={"Date_Acquisition"} required={true} label={"Date d'Acquisition"}  type="date" onChange={handleChangeAuto} value={autoData?.Date_Acquisition ?? ""} /> */}
                                    <DatePickerComponent child={<DatePicker label={"Date d'Acquisition"}  sx={{width:"100%"}}  value={autoData?.Date_Acquisition} onChange={(newValue) => handleChangeAutoDate("Date_Acquisition", newValue )} />}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Titulaire_Carte_Grise"} required={true} label={"Titulaire Carte Grise"} onChange={handleChangeAuto} value={autoData?.Titulaire_Carte_Grise ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Autres_Conducteurs"} required={true} label={"Autres Conducteurs à désigner"} onChange={handleChangeAuto} value={autoData?.Autres_Conducteurs ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} name={"Coefficient_Bonus_CRM"} required={true} label={"Coef. Bonus/Malus (CRM)"} onChange={handleChangeAuto} value={autoData?.Coefficient_Bonus_CRM ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {/* <TextFieldPersonnalise id={''} name={"Date_Obtention_CRM"} required={true} label={"Date d'Obtention du CRM"}  type="date" onChange={handleChangeAuto} value={autoData?.Date_Obtention_CRM?? ""} /> */}
                                    <DatePickerComponent child={<DatePicker  label={"Date d'Obtention du CRM"}  sx={{width:"100%"}}  value={autoData?.Date_Obtention_CRM} onChange={(newValue) => handleChangeAutoDate("Date_Obtention_CRM", newValue )} />}/>
                                </Grid>
                            </Grid>
                            <Typography>Nombre de sinistres lors des dernières années(R.i)</Typography>
                            <Typography>Ordre = Responsable / Demi-Responsable / Non-Responsable / Bris de Glace</Typography>
                            <Grid container spacing={{xs: 2, md: 3}} sx={{margin:"0px 0px 35px 0px"}}>
                    
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextField fullWidth   id="outlined-required" select name={"Nature_Sinistre_1"} label="Nature" value={autoData?.Nature_Sinistre_1 ?? ""} onChange={handleChangeAuto} helperText="Veuillez sélectioner la nature" variant="outlined">
                                        {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {/* <TextFieldPersonnalise id={''} required={true} name={"Date_Sinistre_1"} label={"Date"} onChange={handleChangeAuto}  type="date" value={autoData?.Date_Sinistre_1 ?? ""} /> */}
                                    <DatePickerComponent child={<DatePicker  label={"Date_Sinistre_1"}  sx={{width:"100%"}}  value={autoData?.Date_Sinistre_1} onChange={(newValue) => handleChangeAutoDate("Date_Sinistre_1", newValue )} />}/>

                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <TextField fullWidth>
                                                <DatePicker label="Basic date picker" sx={{color:"green", width:"100%"}} />
                                            </TextField>
                                        </DemoContainer>
                                    </LocalizationProvider> */}
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextField fullWidth id="outlined-required" select name={"Nature_Sinistre_2"} label="Nature" value={autoData?.Nature_Sinistre_2 ?? ""} onChange={handleChangeAuto} helperText="Veuillez sélectioner la nature" variant="outlined" >
                                        {currencies.map((option) => (<MenuItem key={option.value}  value={option.value}>{option.label}</MenuItem>))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {/* <TextFieldPersonnalise id={''} required={true} name={"Date_Sinistre_2"} label={"Date"} onChange={handleChangeAuto}  type="date" value={autoData?.Date_Sinistre_2 ?? ""} /> */}
                                    <DatePickerComponent  child={<DatePicker label={"Date_Sinistre_2"}  sx={{width:"100%"}}  value={autoData?.Date_Sinistre_2} onChange={(newValue) => handleChangeAutoDate("Date_Sinistre_2", newValue )} />}/>

                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextField fullWidth id="outlined-required" select name={"Nature_Sinistre_3"} label="Nature" value={autoData?.Nature_Sinistre_3 ?? ""} onChange={handleChangeAuto} helperText="Veuillez sélectioner la nature" variant="outlined">
                                        {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {/* <TextFieldPersonnalise id={''} required={true} name={"Date_Sinistre_3"} label={"Date"} onChange={handleChangeAuto}  type="date" value={autoData?.Date_Sinistre_3 ?? ""} /> */}
                                    <DatePickerComponent child={<DatePicker label={"Date_Sinistre_3"}  sx={{width:"100%"}}   value={autoData?.Date_Sinistre_3} onChange={(newValue) => handleChangeAutoDate("Date_Sinistre_3", newValue )} />}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} required={true} name={"Resiliation_Compagnie"} label={"Résiliaton de la Compagnie"} onChange={handleChangeAuto} value={autoData?.Resiliation_Compagnie ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} required={true} name={"Motif_Resiliation"} label={"Motif de Résiliation"} onChange={handleChangeAuto} value={autoData?.Motif_Resiliation ?? ""} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker/>
                                    </LocalizationProvider> */}
                                    {/* <TextFieldPersonnalise id={''} required={true} name={"Date_Resiliation"} label={"Date de Résiliation"}  type="date" onChange={handleChangeAuto} value={autoData?.Date_Resiliation ?? ""}  /> */}
                                    <DatePickerComponent child={<DatePicker label={"Date de Résiliation"} sx={{width:"100%"}} value={autoData?.Date_Resiliation} onChange={(newValue) => handleChangeAutoDate("Date_Resiliation", newValue )}/>}/>

                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextFieldPersonnalise id={''} required={true} name={"Suspension_ou_Annulation_Permis"} label={"Suspension/Annulation de Permis"} onChange={handleChangeAuto} value={autoData?.Suspension_ou_Annulation_Permis?? ""} />
                                </Grid>
                            </Grid>
                                {/* // <> */}
                                <Box sx={{ }}>
                                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">Garage</FormLabel>
                                        <FormGroup sx={{display:"flex",  height:"auto",}}>
                                        <Grid container sx={{ width:'100%'}}>
                                            {
                                                Object.keys(Garage).map((oneGarage, index) =><Grid item lg={4} md={6} sm={6} xs={12} sx={{width:"200px"}}> <FormControlLabel key={index} control={<Checkbox onChange={AutohandleChangeCheckedGarage} name={Garage[oneGarage as keyof typeof Garage]}/>} label={Garage[oneGarage as keyof typeof Garage]}/></Grid>)
                                            }
                                        </Grid>
                                        </FormGroup>
                                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                                        <FormLabel component="legend">Garanties Souhaitées</FormLabel>
                                        <FormGroup sx={{display:"flex",  height:"auto",}}>
                                        <Grid container>
                                        {
                                            Object.keys(Garantie).map((oneGarantie, index) =><Grid item lg={3} md={6} sm={6} xs={12} sx={{width:"200px"}}> <FormControlLabel key={index} control={<Checkbox onChange={AutohandleChangeCheckedGarantie} name={Garantie[oneGarantie as keyof typeof Garantie]}/>} label={Garantie[oneGarantie as keyof typeof Garantie]}/></Grid>)
                                        }
                                        </Grid>
                                        </FormGroup>
                                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                                        <FormLabel component="legend">Option</FormLabel>
                                        <FormGroup sx={{display:"flex",  height:"auto",}}>
                                        <Grid container sx={{}}> 
                                        {
                                            Object.keys(Options).map((oneOptions, index) =><Grid item lg={4} md={6} sm={6} xs={12}> <FormControlLabel key={index} control={<Checkbox onChange={AutohandleChangeCheckedOptions} name={Options[oneOptions as keyof typeof Options]}/>} label={Options[oneOptions as keyof typeof Options]}/> </Grid>)
                                        }
                                        </Grid>
                                        </FormGroup>
                                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                </Box>                    
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                                        <FormLabel component="legend">Modes de Paiement possible</FormLabel>
                                        <FormGroup sx={{display:"flex", flexDirection:"row", }}>
                                        <Grid container>
                                        {
                                            Object.keys(ModePaiement).map((oneModePaiement, index) => <Grid item lg={3} md={6} sm={6} xs={12}> <FormControlLabel key={index} control={<Checkbox onChange={AutohandleChangeCheckedModePaiement} name={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>} label={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/></Grid> )
                                        }
                                        </Grid>
                                        </FormGroup>
                                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                </Box>
                                {/* // </> */}
                            </>
                        )}
                        
                        {formType === "SANTE" && (
                            <>
                                <Grid container  spacing={{xs: 2, md: 5}} sx={{margin:"0px 0px 35px 0px"}}>       
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Num_Secu_Social" required={true} onChange={handleChangeSante} label={"Numéro de sécurité social"} value={santeData?.Num_Secu_Social ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naissance" required={true} onChange={handleChangeSante} label={"Date de naissance"} value={santeData?.Date_Naissance ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Professionel" required={true} onChange={handleChangeSante} label={"Profession"} value={santeData?.Professionel ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Statut_Pro_Date_Creation" required={true} onChange={handleChangeSante} label={"Statut Pro. (Si Indépendant :Caisse + Date de Création"} value={santeData?.Statut_Pro_Date_Creation ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextField select fullWidth id={''}  name="Situation_Familial" required={true} onChange={handleChangeSante} label={"Situation Familial"} value={santeData?.Situation_Familial ?? ""}  >
                                            {situationFamille.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                        </TextField>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_Conjoint" required={true} onChange={handleChangeSante} label={"Nom , Prénom Conjoint"} value={santeData?.Nom_Prenom_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naiss_Conjoint" required={true} onChange={handleChangeSante} label={"Date Naiss. Conjoint"} value={santeData?.Date_Naiss_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Num_Secu_Social_Conjoint" required={true} onChange={handleChangeSante} label={"N° Sécurité Social du Conjoint"} value={santeData?.Num_Secu_Social_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nbre_Enfants_rattaché_Souscripteur" required={true} onChange={handleChangeSante} label={"Nombre enfants rattachés du souscripteur"} value={santeData?.Nbre_Enfants_rattaché_Souscripteur?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nbre_Enfants_rattaché_Conjoint" required={true} onChange={handleChangeSante} label={"Nombre enfants rattachés du conjoint"} value={santeData?.Nbre_Enfants_rattaché_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantUn_Souscripteur" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du souscripteur)"} value={santeData?.Nom_Prenom_EnfantUn_Souscripteur?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantUn" required={true} onChange={handleChangeSante} label={"Date de Naissance (Sexe)"} value={santeData?.Date_Naiss_EnfantUn ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantDeux_Souscripteur" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du souscripteur)"} value={santeData?.Nom_Prenom_EnfantDeux_Souscripteur?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantDeux" required={true} onChange={handleChangeSante} label={"Date de Naissance (Sexe)"} value={santeData?.Date_Naiss_EnfantDeux ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantTrois_Souscripteur" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du souscripteur)"} value={santeData?.Nom_Prenom_EnfantTrois_Souscripteur?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantTrois" required={true} onChange={handleChangeSante} label={"Date de Naissance (Sexe)"} value={santeData?.Date_Naiss_EnfantTrois ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantQuatre_Souscripteur" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du souscripteur)"} value={santeData?.Nom_Prenom_EnfantQuatre_Souscripteur?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantQuatre" required={true} onChange={handleChangeSante} label={"Date de Naissance (Sexe)"} value={santeData?.Date_Naiss_EnfantQuatre ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantUn_Conjoint" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du Conjoint)"} value={santeData?.Nom_Prenom_EnfantUn_Conjoint?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantUn_Conjoint" required={true} onChange={handleChangeSante} label={"Date de Naissance (Sexe)"} value={santeData?.Date_Naiss_EnfantUn_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantDeux_Conjoint" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du Conjoint)"} value={santeData?.Nom_Prenom_EnfantDeux_Conjoint?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Date_Naiss_Enfantdeux_Conjoint" required={true} onChange={handleChangeSante} label={"Date de Naissance (Sexe)"} value={santeData?.Date_Naiss_Enfantdeux_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantTrois_Conjoint" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du Conjoint)"} value={santeData?.Nom_Prenom_EnfantTrois_Conjoint?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantTrois_Conjoint" required={true} onChange={handleChangeSante} label={"Nom et Prénom (enfant du Conjoint)"} value={santeData?.Nom_Prenom_EnfantTrois_Conjoint?? ""} />
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                                        <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                                            <Grid container> 
                                                {
                                                    Object.keys(GarantieSante).map((oneGarantie, index) =><Grid item lg={3} md={6} sm={6} xs={12} sx={{width:"200px"}}><FormControlLabel key={index} control={<Checkbox onChange={SantehandleChangeCheckedGarantie} name={GarantieSante[oneGarantie as keyof typeof GarantieSante]}/>} label={GarantieSante[oneGarantie as keyof typeof GarantieSante]}/></Grid>)
                                                }
                                            </Grid>
                                        </FormGroup>
                                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                                        <FormGroup sx={{display:"flex",  }}>
                                        <Grid container>                                            
                                            {
                                                Object.keys(OptionsSante).map((oneOptionSante, index) =><Grid item lg={3} md={6} sm={6} xs={12} sx={{ }}><FormControlLabel key={index} control={<Checkbox onChange={SantehandleChangeCheckedOptions} name={OptionsSante[oneOptionSante as keyof typeof OptionsSante]}/>} label={OptionsSante[oneOptionSante as keyof typeof OptionsSante]}/></Grid>)
                                            }
                                        </Grid>
                                        </FormGroup>
                                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                                        <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                                        <Grid container>
                                            {
                                                Object.keys(ModePaiement).map((oneModePaiement, index) =><Grid item lg={3} md={6} sm={6} xs={12} sx={{width:"200px"}}><FormControlLabel key={index} control={<Checkbox onChange={SantehandleChangeCheckedModePaiement} name={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>} label={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/></Grid>)
                                            }
                                        </Grid>
                                        </FormGroup>
                                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                </Box>
                            </>
                            // <Typography>sante</Typography>
                        
                        )}
                        {formType === "HABITATION" && (
                            <>
                                <Grid container spacing={{xs: 2, md: 5}} sx={{margin:"40px 0px 35px 0px"}}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Etage" required={true} onChange={handleChangeHabitation} label={"Etage"} value={habitationData?.Etage ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Nbre_Etages_Immeuble" required={true} onChange={handleChangeHabitation} label={"Nombre d'Etages de l'immeuble"} type="number" value={habitationData?.Nbre_Etages_Immeuble ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextField select fullWidth id={''} name="Situation_Falilial" required={true} onChange={handleChangeHabitation} label={"Situation Famillial"} value={habitationData?.Situation_Falilial ?? ""}  >
                                            {situationFamille.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                        </TextField>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Nombre_Enfants" required={true} onChange={handleChangeHabitation} label={"Nombre d'Enfants"} value={habitationData?.Nombre_Enfants ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Adresse_Bien" required={true} onChange={handleChangeHabitation} label={"Adresse du bien"} value={habitationData?.Adresse_Bien ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextField select fullWidth id={''} name="Utilisation_Residence" required={true} onChange={handleChangeHabitation} label={"Utilisation de la Résidence"} value={habitationData?.Utilisation_Residence ?? ""}  >
                                            {residence.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                        </TextField>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextField select fullWidth  id={''} name="Statut" required={true} onChange={handleChangeHabitation} label={"Statut"} value={habitationData?.Statut ?? ""} >
                                            {statut.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                        </TextField>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Surface_Total" required={true} onChange={handleChangeHabitation} label={"Surface totale en M2"} value={habitationData?.Surface_Total ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Nbre_Pieces_Principal" required={true} onChange={handleChangeHabitation} label={"Nombre de pièces Principales"} value={habitationData?.Nbre_Pieces_Principal ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Age_Du_Bien" required={true} onChange={handleChangeHabitation} label={"Age du bien (+ou - de 10 ans)"} value={habitationData?.Age_Du_Bien ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Engins_Moteur" required={true} onChange={handleChangeHabitation} label={"Engins à Moteur"} value={habitationData?.Engins_Moteur ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Plafond_Valeur_Mobiler" required={true} onChange={handleChangeHabitation} label={"Plafond valeur Mobilier & Equipements"} value={habitationData?.Plafond_Valeur_Mobiler ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Objet_De_Valeur" required={true} onChange={handleChangeHabitation} label={"Objet de Valeurs"} value={habitationData?.Objet_De_Valeur ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Realisation_Compagnie" required={true} onChange={handleChangeHabitation} label={"Réalisation par Compagnie"} value={habitationData?.Realisation_Compagnie ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Mot_Realisation" required={true} onChange={handleChangeHabitation} label={"Mots de Réalisation"} value={habitationData?.Mot_Realisation ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Utilisation_Residence" required={true} onChange={handleChangeHabitation} label={"Utilisation de la Résidence"} value={habitationData?.Utilisation_Residence ?? ""} />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Typography sx={{}}>Assurance Scolaire:</Typography>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Nom_Prenom_Naiss_Enfant" required={true} onChange={handleChangeHabitation} label={"Nom (S), Prénom (s) de Naissance des enfants (obligatoire)"} value={habitationData?.Nom_Prenom_Naiss_Enfant ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Animaux" required={true} onChange={handleChangeHabitation} label={"Animaux( Chiens dangereux, Cheavaux)"} value={habitationData?.Animaux ?? ""} />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Typography>Si Animaux:</Typography>
                                    </Grid>
                                </Grid>
                                <FormLabel id="demo-row-radio-buttons-group-label">Carnet de Vaccination:</FormLabel>
                                <RadioGroup row name="Carnet_de_Vaccination" value={habitationData?.Carnet_de_Vaccination} onChange={handleChangeHabitation}>
                                    <FormControlLabel value="OUI" control={<Radio />} label="Oui" />
                                    <FormControlLabel value="NON" control={<Radio />} label="Non" />
                                </RadioGroup>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Tatouages:</FormLabel>
                                        <RadioGroup row name="Tatouages" value={habitationData?.Tatouages} onChange={handleChangeHabitation}>
                                            <FormControlLabel value="OUI" control={<Radio />} label="Oui" />
                                            <FormControlLabel value="NON" control={<Radio />} label="Non" />
                                        </RadioGroup>
                                    </Grid>
                                <Box sx={{  }}>
                                    <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
                                        <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                                        {
                                            Object.keys(InstallationsHabitation).map((oneInstallation, index) =><FormControlLabel key={index} control={<Checkbox onChange={HabitationhandleChangeCheckedInstallation} name={InstallationsHabitation[oneInstallation as keyof typeof InstallationsHabitation]}/>} label={InstallationsHabitation[oneInstallation as keyof typeof InstallationsHabitation]}/>)
                                        }
                                        </FormGroup>
                                    <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                    </FormControl>
                                    <Grid container rowSpacing={5} sx={{}}>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <TextFieldPersonnalise id={''} name="Autres_Installation" required={true} onChange={handleChangeHabitation} label={"Autres Installations à Préciser"} value={habitationData?.Autres_Installation ?? ""} />
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ }}>
                                        <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                                        <FormLabel> Garanties Souhaitées:</FormLabel>
                                            <FormGroup sx={{display:"flex",  height:"auto",}}>
                                            <Grid container>
                                            {
                                                Object.keys(GarantiesHabitation).map((oneHabitation, index) =><Grid item lg={4} md={6} sm={6} xs={12} sx={{maxWidth:"200px"}}> <FormControlLabel key={index} control={<Checkbox onChange={HabitationhandleChangeCheckedGarantieHabitat} name={GarantiesHabitation[oneHabitation as keyof typeof GarantiesHabitation]}/>} label={GarantiesHabitation[oneHabitation as keyof typeof GarantiesHabitation]}/></Grid>)
                                            }
                                            </Grid>
                                            </FormGroup>
                                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                                            <FormLabel component="legend">Option</FormLabel>
                                            <FormGroup sx={{display:"flex",  height:"auto",}}>
                                            <Grid container sx={{}}> 
                                            {
                                                Object.keys(OptionHabitation).map((oneOption, index) =><Grid item lg={4} md={6} sm={6} xs={12}><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedOptionHabitat} name={OptionHabitation[oneOption as keyof typeof OptionHabitation]}/>} label={OptionHabitation[oneOption as keyof typeof OptionHabitation]}/> </Grid>)
                                            }
                                            </Grid>
                                            </FormGroup>
                                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Grid container rowSpacing={5} sx={{}}>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Autres_Options" required={true} onChange={handleChangeHabitation} label={"Autres Installations à Préciser"} value={habitationData?.Autres_Options ?? ""} />
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ display: 'flex' }}>
                                        <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                                            <FormLabel component="legend">Modes de Paiement possible</FormLabel>
                                            <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                                            <Grid container>
                                            {
                                                Object.keys(ModePaiement).map((oneModePaiement, index) => <Grid item lg={3} md={6} sm={6} xs={12} sx={{width:"200px"}}> <FormControlLabel key={index} control={<Checkbox onChange={HabitationhandleChangeCheckedModePaiement} name={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>} label={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/></Grid> )
                                            }
                                            </Grid>
                                            </FormGroup>
                                            <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </>
                        )}

                        {formType === "PRO" && (
                            <>
                                <Grid container spacing={{xs: 2, md: 5}} sx={{margin:"0px 0px 35px 0px"}}>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextField select fullWidth id={''}  name="Situation_Familial" required={true} onChange={handleChangeSante} label={"Situation Familial"} value={proData?.Situation_Familial ?? ""}  >
                                            {situationFamille.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                                        </TextField>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Nom_Entreprise" required={true} onChange={handleChangePro} label={"Nom de l'Entreprise"} value={proData?.Nom_Entreprise ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Forme_Juridique" required={true} onChange={handleChangePro}  label={"Forme Juridique de l'Entreprise"} value={proData?.Forme_Juridique ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Date_Naiss" required={true} onChange={handleChangePro}  label={"Date de Naissance"} value={proData?.Date_Naiss ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Siret" required={true} onChange={handleChangePro} label={"Siret"} value={proData?.Siret ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="APE" required={true} onChange={handleChangePro} label={"APE"} value={proData?.APE ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Activite_Principal" required={true} onChange={handleChangePro} label={"Activité Principale"} value={proData?.Activite_Principal ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Ratio_Principal" required={true} onChange={handleChangePro} label={"Ratio (%)"} value={proData?.Ratio_Principal ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Activite_AnnexeOne" required={true} onChange={handleChangePro} label={"Activité Annexes"} value={proData?.Activite_AnnexeOne ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Ratio_AnnexeOne" required={true} onChange={handleChangePro} label={"Ratio (%)"} value={proData?.Ratio_AnnexeOne ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Activite_AnnexeTwo" required={true} onChange={handleChangePro} label={"Activité Annexes"} value={proData?.Activite_AnnexeTwo ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Ratio_AnnexeTwo" required={true} onChange={handleChangePro} label={"Ratio (%)"} value={proData?.Ratio_AnnexeTwo ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Activite_AnnexeThree" required={true} onChange={handleChangePro} label={"Activité Annexes"} value={proData?.Activite_AnnexeThree ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Ratio_AnnexeThree" required={true} onChange={handleChangePro} label={"Ratio (%)"} value={proData?.Ratio_AnnexeThree ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Activite_AnnexeFour" required={true} onChange={handleChangePro} label={"Activité Annexes"} value={proData?.Activite_AnnexeFour ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Ratio_AnnexeFour" required={true} onChange={handleChangePro} label={"Ratio (%)"} value={proData?.Ratio_AnnexeFour?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Activite_AnnexeFive" required={true} onChange={handleChangePro} label={"Activité Annexes"} value={proData?.Activite_AnnexeFive ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Ratio_AnnexeFive" required={true} onChange={handleChangePro} label={"Ratio (%)"} value={proData?.Ratio_AnnexeFive ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Nom_Conjoint" required={true} onChange={handleChangePro} label={"Nom du Conjoint"} value={proData?.Nom_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Prenom_Conjoint" required={true} onChange={handleChangePro} label={"Prénom du Conjoint"} value={proData?.Prenom_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Conjoint_Collaborateur" required={true} onChange={handleChangePro} label={"Conjoint Collaborateur"} value={proData?.Conjoint_Collaborateur ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Date_Naiss_Conjoint" required={true} onChange={handleChangePro} label={"Date Naissance du Conjoint"} value={proData?.Date_Naiss_Conjoint ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Chiffre_Affaire" required={true} onChange={handleChangePro} label={"Chiffre d'Affaire (en )"} value={proData?.Chiffre_Affaire ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Effectif" required={true} onChange={handleChangePro} label={"Effectif"} value={proData?.Effectif ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Surface" required={true} onChange={handleChangePro} label={"Surface en m2"} value={proData?.Surface ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Produits_Dangereux" required={true} onChange={handleChangePro} label={"Produits Dangereux"} value={proData?.Produits_Dangereux ?? ""} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <TextFieldPersonnalise id={''} name="Nature_Produits" required={true} onChange={handleChangePro} label={"Nature des Produits"} value={proData?.Nature_Produits ?? ""} />
                                    </Grid>
                                    <Box sx={{ }}>
                                        <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                                        <FormLabel> Garanties Souhaitées:</FormLabel>
                                            <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                                            <Grid container>
                                            {
                                                Object.keys(GarantiesPro).map((oneGaranti, index) =><Grid item lg={3} md={6} sm={6} xs={12} sx={{width:"200px"}}><FormControlLabel key={index} control={<Checkbox onChange={ProhandleChangeCheckedGarantiePro} name={GarantiesPro[oneGaranti as keyof typeof GarantiesPro]}/>} label={GarantiesPro[oneGaranti as keyof typeof GarantiesPro]}/></Grid>)
                                            }
                                            </Grid>
                                            </FormGroup>
                                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                                        <FormLabel component="legend">Option</FormLabel>
                                            <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                                            <Grid container>
                                            {
                                                Object.keys(OptionsPro).map((oneOption, index) =><Grid item lg={4} md={6} sm={6} xs={12}><FormControlLabel key={index} control={<Checkbox onChange={ProhandleChangeCheckedOptionPro} name={OptionsPro[oneOption as keyof typeof OptionsPro]}/>} label={OptionsPro[oneOption as keyof typeof OptionsPro]}/></Grid>)
                                            }
                                            </Grid>
                                            </FormGroup>
                                        <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                                            <FormLabel component="legend">Modes de Paiement possible</FormLabel>
                                            <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                                            <Grid container>
                                            {
                                                Object.keys(ModePaiement).map((oneModePaiement, index) =><Grid item lg={3} md={6} sm={6} xs={12} sx={{width:"200px"}}><FormControlLabel key={index} control={<Checkbox onChange={ProhandleChangeCheckedModePaiement} name={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>} label={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/></Grid>)
                                            }
                                            </Grid>
                                            </FormGroup>
                                            <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                                        </FormControl>
                                </Box>
                                </Grid>
                            </>
                        )}
                    {/* </Grid> */}
                {/* </Container> */}
                <PDFDownloadLink document={<DevisModelPdf id_client={''} Nom={autoData?.Nom} Prenom={autoData?.Prenom} Adresse={autoData?.Adresse} Num_Client={null} Telephone_Fix={autoData?.Telephone_Fix} Telephone_Mobile={autoData?.Telephone_Mobile} Email={autoData?.Email} Situation_Familial={autoData?.Situation_Familial} Nombre_Enfants_Inférieur_16ans={autoData?.Nombre_Enfants_Inférieur_16ans} Nombre_Enfants_Superieur_16ans={autoData?.Nombre_Enfants_Superieur_16ans} Profession={autoData?.Profession} Date_Naissance={autoData?.Date_Naissance} Date_Permis_Conduite={autoData?.Date_Permis_Conduite} Marque_D1={autoData?.Marque_D1} Modele_D3={autoData?.Modele_D3} Version={autoData?.Version} Puissance_Fiscale={autoData?.Puissance_Fiscale} Type_Mine_D2={autoData?.Type_Mine_D2} Mise_Circulation_B={autoData?.Mise_Circulation_B} Immatriculation={autoData?.Immatriculation} Date_Acquisition={autoData?.Date_Acquisition} Titulaire_Carte_Grise={autoData?.Titulaire_Carte_Grise} Autres_Conducteurs={autoData?.Autres_Conducteurs} Coefficient_Bonus_CRM={autoData?.Coefficient_Bonus_CRM} Date_Obtention_CRM={autoData?.Date_Obtention_CRM} Nature_Sinistre_1={autoData?.Nature_Sinistre_1} Date_Sinistre_1={autoData?.Date_Sinistre_1} Nature_Sinistre_2={autoData?.Nature_Sinistre_2} Date_Sinistre_2={autoData?.Date_Sinistre_2} Nature_Sinistre_3={autoData?.Nature_Sinistre_3} Date_Sinistre_3={autoData?.Date_Sinistre_3} Resiliation_Compagnie={autoData?.Resiliation_Compagnie} Motif_Resiliation={autoData?.Motif_Resiliation} Date_Resiliation={autoData?.Date_Resiliation} Suspension_ou_Annulation_Permis={autoData?.Suspension_ou_Annulation_Permis} dateSuspens={autoData?.dateSuspens} Date_Motif_Suspension={autoData?.Date_Motif_Suspension} Garage={autoData?.Garage} Usage_Vehiculaire={autoData?.Usage_Vehiculaire} Garanties_Souhaitées={autoData?.Garanties_Souhaitées} Option={autoData?.Option} Mode_Paiement={autoData?.Mode_Paiement} typeDevis={autoData?.typeDevis} uid={autoData?.uid} />} fileName={autoData?.Nom}>
                    {({loading})=> (loading? <Button>Loading....</Button> : <Button>DownLoad</Button>)}
                </PDFDownloadLink>
                <Button variant="contained"  type="submit" sx={{ backgroundColor:"#138f82", display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"40%", width:"100px", height:"50px", '&:hover': {backgroundColor:"black"} }}>valider</Button>
                </Box >
            </BoxStyle >
            {/* </Container> */}
        </DevisOptionSectionContainer>
        // </ContactElementsContainer>
    );
}

export default DevisOptionSection;