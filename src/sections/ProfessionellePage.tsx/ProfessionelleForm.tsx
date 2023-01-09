import { getDateRangePickerDayUtilityClass } from '@mui/lab';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECT_COLORS } from '../../common/colors';
import { GarantiesPro } from '../../components/Ennum/GarantiesPro';
import { ModePaiement } from '../../components/Ennum/ModePaiement';
import { OptionsPro } from '../../components/Ennum/OptionsPro';
import ModalValidation from '../../components/ModalValidation';
import ProfessionelleGarantieCheck from '../../components/ProfessionelGarantieCheck';
import ProfessionelleOptionCheck from '../../components/ProfessionelleOptionCheck';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import { DevisProModel } from '../../models/DevisProModel';
import { addDevisPro } from '../../redux/slices/DevisProRed';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import SectionStyle from '../../styles/SectionStyle';

const ProfessionelleFormContainer=styled(SectionStyle)(()=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function ProfessionelleForm() {
  const [data, setData] = React.useState<DevisProModel>();
  const user = useAppSelector(state => state.auth.user);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisProModel));
    console.log(data);
   };

   const handleChangeCheckedGarantiePro = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gara: Array<string> = Array.from(data?.Garanties_Souhaitées ?? []);
    if(e.target.checked) {
      gara?.push(e.target.name);
      setData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisProModel));
    }
    else
      if(data?.Garanties_Souhaitées.filter(one => one != e.target.name).length) {
        setData((prev) => ({ ...prev, Garanties_Souhaitées: data?.Garanties_Souhaitées.filter(one => one != e.target.name) } as DevisProModel));
      }
    console.log(data);
};

const handleChangeCheckedOptionPro = (e: React.ChangeEvent<HTMLInputElement>) => {
  let gara: Array<string> = Array.from(data?.Options ?? []);
  if(e.target.checked) {
    gara?.push(e.target.name);
    setData((prev) => ({ ...prev, Options: gara } as DevisProModel));
  }
  else
    if(data?.Options.filter(one => one != e.target.name).length) {
      setData((prev) => ({ ...prev, Options: data?.Options.filter(one => one != e.target.name) } as DevisProModel));
    }
  console.log(data);
};

const handleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
  let gara: Array<string> = Array.from(data?.Mode_Paiements ?? []);
  if(e.target.checked) {
    gara?.push(e.target.name);
    setData((prev) => ({ ...prev, Mode_Paiements: gara } as DevisProModel));
  }
  else
    if(data?.Mode_Paiements.filter(one => one != e.target.name).length) {
      setData((prev) => ({ ...prev, Mode_Paiements: data?.Mode_Paiements.filter(one => one != e.target.name) } as DevisProModel));
    }
  console.log(data);
};

const dispatch = useAppDispatch();
const [currentDate, setCurrentDate] = useState({date: ''})

const validate = (event:any) => {
    event?.preventDefault();
    if (data && user?.uid) {
      data.id_Client = user?.uid;
      const nDate= new Date();
      data!.dateRegister= `${nDate.getFullYear()}-${(nDate.getUTCMonth()+1)}-${nDate.getDate()}`;
      data.typeDevis = "RC-PRO";
      dispatch(addDevisPro({oneDevisPro: data})).unwrap().then(handleOpenDialog);
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
        <ProfessionelleFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance RC Pro - Multi Risques Pro</Typography>
            <Box component="form" onSubmit={validate} sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextFieldPersonnalise id={''} name="Nom_Entreprise" required={true} onChange={handleChange} label={"Nom de l'Entreprise"} value={data?.Nom_Entreprise ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Adresse" required={true} onChange={handleChange} label={"Adresse"} value={data?.Adresse ?? ""} />
                <TextFieldPersonnalise id={''} name="id_Client" required={true} onChange={handleChange} label={"N° Client"} value={data?.id_Client ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Nom" required={true} onChange={handleChange} label={"Nom du Souscripteur"} value={data?.Nom ?? ""} />
                <TextFieldPersonnalise id={''} name="Prenom" required={true} onChange={handleChange}  label={"Prénom"} value={data?.Prenom ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Forme_Juridique" required={true} onChange={handleChange}  label={"Forme Juridique de l'Entreprise"} value={data?.Forme_Juridique ?? ""} />
                <TextFieldPersonnalise id={''} name="Date_Naiss" required={true} onChange={handleChange}  label={"Date de Naissance"} value={data?.Date_Naiss ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Telephone_Fix" required={true} onChange={handleChange} label={"Téléphone Fixe"} value={data?.Telephone_Fix ?? ""} />
                <TextFieldPersonnalise id={''} name="Telephone_Mobile" required={true} onChange={handleChange} label={"Téléphone Mobile"} value={data?.Telephone_Mobile ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Email" required={true} onChange={handleChange} label={"Email"} value={data?.Email ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Siret" required={true} onChange={handleChange} label={"Siret"} value={data?.Siret ?? ""} />
                <TextFieldPersonnalise id={''} name="APE" required={true} onChange={handleChange} label={"APE"} value={data?.APE ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Activite_Principal" required={true} onChange={handleChange} label={"Activité Principale"} value={data?.Activite_Principal ?? ""} />
                <TextFieldPersonnalise id={''} name="Ratio_Principal" required={true} onChange={handleChange} label={"Ratio (%)"} value={data?.Ratio_Principal ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Activite_AnnexeOne" required={true} onChange={handleChange} label={"Activité Annexes"} value={data?.Activite_AnnexeOne ?? ""} />
                <TextFieldPersonnalise id={''} name="Ratio_AnnexeOne" required={true} onChange={handleChange} label={"Ratio (%)"} value={data?.Ratio_AnnexeOne ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Activite_AnnexeTwo" required={true} onChange={handleChange} label={"Activité Annexes"} value={data?.Activite_AnnexeTwo ?? ""} />
                <TextFieldPersonnalise id={''} name="Ratio_AnnexeTwo" required={true} onChange={handleChange} label={"Ratio (%)"} value={data?.Ratio_AnnexeTwo ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Activite_AnnexeThree" required={true} onChange={handleChange} label={"Activité Annexes"} value={data?.Activite_AnnexeThree ?? ""} />
                <TextFieldPersonnalise id={''} name="Ratio_AnnexeThree" required={true} onChange={handleChange} label={"Ratio (%)"} value={data?.Ratio_AnnexeThree ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Activite_AnnexeFour" required={true} onChange={handleChange} label={"Activité Annexes"} value={data?.Activite_AnnexeFour ?? ""} />
                <TextFieldPersonnalise id={''} name="Ratio_AnnexeFour" required={true} onChange={handleChange} label={"Ratio (%)"} value={data?.Ratio_AnnexeFour?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Activite_AnnexeFive" required={true} onChange={handleChange} label={"Activité Annexes"} value={data?.Activite_AnnexeFive ?? ""} />
                <TextFieldPersonnalise id={''} name="Ratio_AnnexeFive" required={true} onChange={handleChange} label={"Ratio (%)"} value={data?.Ratio_AnnexeFive ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Nom_Conjoint" required={true} onChange={handleChange} label={"Nom du Conjoint"} value={data?.Nom_Conjoint ?? ""} />
                <TextFieldPersonnalise id={''} name="Prenom_Conjoint" required={true} onChange={handleChange} label={"Prénom du Conjoint"} value={data?.Prenom_Conjoint ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Conjoint_Collaborateur" required={true} onChange={handleChange} label={"Conjoint Collaborateur"} value={data?.Conjoint_Collaborateur ?? ""} />
                <TextFieldPersonnalise id={''} name="Date_Naiss_Conjoint" required={true} onChange={handleChange} label={"Date Naissance du Conjoint"} value={data?.Date_Naiss_Conjoint ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Chiffre_Affaire" required={true} onChange={handleChange} label={"Chiffre d'Affaire (en )"} value={data?.Chiffre_Affaire ?? ""} />
                <TextFieldPersonnalise id={''} name="Effectif" required={true} onChange={handleChange} label={"Effectif"} value={data?.Effectif ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Surface" required={true} onChange={handleChange} label={"Surface en m2"} value={data?.Surface ?? ""} />
                <TextFieldPersonnalise id={''} name="Produits_Dangereux" required={true} onChange={handleChange} label={"Produits Dangereux"} value={data?.Produits_Dangereux ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} name="Nature_Produits" required={true} onChange={handleChange} label={"Nature des Produits"} value={data?.Nature_Produits ?? ""} />
                </div>
                <Typography>Garanties Souhaitées:</Typography>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                      {
                        Object.keys(GarantiesPro).map((oneGaranti, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedGarantiePro} name={GarantiesPro[oneGaranti as keyof typeof GarantiesPro]}/>} label={GarantiesPro[oneGaranti as keyof typeof GarantiesPro]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>
                <Typography>Options:</Typography>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup sx={{display:"flex", flexDirection:"row"}}>
                      {
                        Object.keys(OptionsPro).map((oneOption, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedOptionPro} name={OptionsPro[oneOption as keyof typeof OptionsPro]}/>} label={OptionsPro[oneOption as keyof typeof OptionsPro]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>
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
                <Button variant="contained" type="submit" sx={{ backgroundColor:"#138f82", display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"40%", width:"100px", height:"50px" }}>valider</Button>
            </Box>
            {dialogOpen && (<ModalValidation stateInit={dialogOpen} stateClose={handleCloseDialog} isSucces={succesState}  />)}
        </ProfessionelleFormContainer>
    );
}

export default ProfessionelleForm;