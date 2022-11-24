import React from 'react';
import { styled, Typography, Box, Grid, TextField, MenuItem, FormControl, FormGroup, FormControlLabel, Checkbox, FormHelperText, Button} from '@mui/material';
import SectionStyle from '../../styles/SectionStyle';
import { PROJECT_COLORS } from '../../common/colors';
import SanteGarantieCheck from '../../components/SanteGarantieCheck';
import SanteOptionCheck from '../../components/SanteOptionCheck';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { DevisSanteModel } from '../../models/DevisSanteModel';
import { GarantieSante } from '../../components/Ennum/GarantiesSante';
import { OptionsSante } from '../../components/Ennum/OptionsSante';
import { ModePaiement } from '../../components/Ennum/ModePaiement';


const SanteFormContainer=styled(SectionStyle)(()=>({
    // maxHeight:"2000px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:"100px"
}));

const BgFormeStyle=styled("img")(()=>({
    
}));

function SanteForm() {
  const [data, setData] = React.useState<DevisSanteModel>();
    const user = useAppSelector(state => state.auth.user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({...prev, [e.target.name]: e.target.value} as DevisSanteModel));
      console.log(data);
    };

    const handleChangeCheckedGarantie = (e: React.ChangeEvent<HTMLInputElement>) => {
      let gara: Array<string> = Array.from(data?.Garantie_Souhaitées ?? []);
      if(e.target.checked) {
        gara?.push(e.target.name);
        setData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisSanteModel));
      }
        else
        if(data?.Garantie_Souhaitées.filter(one => one != e.target.name).length) {
          setData((prev) => ({ ...prev, Garantie_Souhaitées: data?.Garantie_Souhaitées.filter(one => one != e.target.name) } as DevisSanteModel));
        }
      console.log(data);
};
    const handleChangeCheckedOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
      let gara: Array<string> = Array.from(data?.Garantie_Souhaitées ?? []);
      if(e.target.checked) {
        gara?.push(e.target.name);
        setData((prev) => ({ ...prev, Garanties_Souhaitées: gara } as DevisSanteModel));
      }
        else
        if(data?.Garantie_Souhaitées.filter(one => one != e.target.name).length) {
          setData((prev) => ({ ...prev, Garantie_Souhaitées: data?.Garantie_Souhaitées.filter(one => one != e.target.name) } as DevisSanteModel));
        }
      console.log(data);
};

const handleChangeCheckedModePaiement = (e: React.ChangeEvent<HTMLInputElement>) => {
  let gara: Array<string> = Array.from(data?.Mode_Paiement ?? []);
  if(e.target.checked) {
    gara?.push(e.target.name);
    setData((prev) => ({ ...prev, Mode_Paiement: gara } as DevisSanteModel));
  }
  else
    if(data?.Mode_Paiement.filter(one => one != e.target.name).length) {
      setData((prev) => ({ ...prev, Mode_Paiement: data?.Mode_Paiement.filter(one => one != e.target.name) } as DevisSanteModel));
    }
  console.log(data);

  const dispatch = useAppDispatch();

//   const validate = () => {
//     if (data && user?.uid) {
//       data.id_client = user?.uid;
//       dispatch(addDevisAuto({oneDevisAuto: data})).unwrap();
//     }
// };
  
    return (
        <SanteFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Sante</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom" required={true} onChange={handleChange} label={'Nom'} value={data?.Nom ?? ""} />
                <TextFieldPersonnalise id={''}  name="Prenom" required={true} onChange={handleChange}  label={"Prénom"} value={data?.Prenom ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Adresse" required={true} onChange={handleChange} label={'Adresse'} value={data?.Adresse ?? ""} />
                <TextFieldPersonnalise id={''}  name="Num_Client" required={true} onChange={handleChange} label={'N° Client'} value={data?.Num_Client ?? ""} />
                 </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Telephone_Fix" required={true} onChange={handleChange} label={'Téléphone Fixe'} value={data?.Telephone_Fix ?? ""} />
                <TextFieldPersonnalise id={''}  name="Telephone_Mobile" required={true} onChange={handleChange} label={'Téléphone Mobile'} value={data?.Telephone_Mobile ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Email" required={true} onChange={handleChange} label={"Email"} value={data?.Email ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Num_Secu_Social" required={true} onChange={handleChange} label={"Numéro de sécurité social"} value={data?.Num_Secu_Social ?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naissance" required={true} onChange={handleChange} label={"Date de naissance"} value={data?.Date_Naissance ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Professionel" required={true} onChange={handleChange} label={"Profession"} value={data?.Professionel ?? ""} />
                <TextFieldPersonnalise id={''}  name="Statut_Pro_Date_Creation" required={true} onChange={handleChange} label={"Statut Pro. (Si Indépendant :Caisse + Date de Création"} value={data?.Statut_Pro_Date_Creation ?? ""} />
                </div>                
                <div>
                <TextFieldPersonnalise id={''}  name="Situation_Familial" required={true} onChange={handleChange} label={"Situation Familial"} value={data?.Situation_Familial ?? ""} />
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_Conjoint" required={true} onChange={handleChange} label={"Nom , Prénom Conjoint"} value={data?.Nom_Prenom_Conjoint ?? ""} />
                </div>                
                <div>
                <TextFieldPersonnalise id={''}  name="Date_Naiss_Conjoint" required={true} onChange={handleChange} label={"Date Naiss. Conjoint"} value={data?.Date_Naiss_Conjoint ?? ""} />
                <TextFieldPersonnalise id={''}  name="Num_Secu_Social_Conjoint" required={true} onChange={handleChange} label={"N° Sécurité Social du Conjoint"} value={data?.Num_Secu_Social_Conjoint ?? ""} />
                </div>                
                <div>
                <TextFieldPersonnalise id={''}  name="Nbre_Enfants_rattaché_Souscripteur" required={true} onChange={handleChange} label={"Nombre enfants rattachés du souscripteur"} value={data?.Nbre_Enfants_rattaché_Souscripteur?? ""} />
                <TextFieldPersonnalise id={''}  name="Nbre_Enfants_rattaché_Conjoint" required={true} onChange={handleChange} label={"Nombre enfants rattachés du conjoint"} value={data?.Nbre_Enfants_rattaché_Conjoint ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantUn_Souscripteur" required={true} onChange={handleChange} label={"Nom et Prénom (enfant du souscripteur)"} value={data?.Nom_Prenom_EnfantUn_Souscripteur?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantUn" required={true} onChange={handleChange} label={"Date de Naissance (Sexe)"} value={data?.Date_Naiss_EnfantUn ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantDeux_Souscripteur" required={true} onChange={handleChange} label={"Nom et Prénom (enfant du souscripteur)"} value={data?.Nom_Prenom_EnfantDeux_Souscripteur?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantDeux" required={true} onChange={handleChange} label={"Date de Naissance (Sexe)"} value={data?.Date_Naiss_EnfantDeux ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantTrois_Souscripteur" required={true} onChange={handleChange} label={"Nom et Prénom (enfant du souscripteur)"} value={data?.Nom_Prenom_EnfantTrois_Souscripteur?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantTrois" required={true} onChange={handleChange} label={"Date de Naissance (Sexe)"} value={data?.Date_Naiss_EnfantTrois ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantQuatre_Souscripteur" required={true} onChange={handleChange} label={"Nom et Prénom (enfant du souscripteur)"} value={data?.Nom_Prenom_EnfantQuatre_Souscripteur?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantQuatre" required={true} onChange={handleChange} label={"Date de Naissance (Sexe)"} value={data?.Date_Naiss_EnfantQuatre ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantUn_Conjoint" required={true} onChange={handleChange} label={"Nom et Prénom (enfant du Conjoint)"} value={data?.Nom_Prenom_EnfantUn_Conjoint?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantUn_Conjoint" required={true} onChange={handleChange} label={"Date de Naissance (Sexe)"} value={data?.Date_Naiss_EnfantUn_Conjoint ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantDeux_Conjoint" required={true} onChange={handleChange} label={"Nom et Prénom (enfant du Conjoint)"} value={data?.Nom_Prenom_EnfantDeux_Conjoint?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naiss_Enfantdeux_Conjoint" required={true} onChange={handleChange} label={"Date de Naissance (Sexe)"} value={data?.Date_Naiss_Enfantdeux_Conjoint ?? ""} />
                </div>
                <div>
                <TextFieldPersonnalise id={''}  name="Nom_Prenom_EnfantTrois_Conjoint" required={true} onChange={handleChange} label={"Nom et Prénom (enfant du Conjoint)"} value={data?.Nom_Prenom_EnfantTrois_Conjoint?? ""} />
                <TextFieldPersonnalise id={''}  name="Date_Naiss_EnfantTrois_Conjoint" required={true} onChange={handleChange} label={"Date de Naissance (Sexe)"} value={data?.Date_Naiss_EnfantTrois_Conjoint?? ""} />
                </div>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup>
                      {
                        Object.keys(GarantieSante).map((oneGarantie, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedGarantie} name={GarantieSante[oneGarantie as keyof typeof GarantieSante]}/>} label={GarantieSante[oneGarantie as keyof typeof GarantieSante]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup>
                      {
                        Object.keys(OptionsSante).map((oneOptionSante, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedOptions} name={OptionsSante[oneOptionSante as keyof typeof OptionsSante]}/>} label={OptionsSante[oneOptionSante as keyof typeof OptionsSante]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 4 }} component="fieldset" variant="standard">
                    <FormGroup>
                      {
                        Object.keys(ModePaiement).map((oneModePaiement, index) =><FormControlLabel key={index} control={<Checkbox onChange={handleChangeCheckedModePaiement} name={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>} label={ModePaiement[oneModePaiement as keyof typeof ModePaiement]}/>)
                      }
                    </FormGroup>
                  <FormHelperText>Veuillez sélectioner une case</FormHelperText>
                  </FormControl>
                </Box>
                {/* <Button variant='outlined' onClick={validate}>valider</Button> */}
            </Box>
        </SanteFormContainer>
    );
                    }}

export default SanteForm;