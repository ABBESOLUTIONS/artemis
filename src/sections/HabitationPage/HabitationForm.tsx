
import { styled, Typography, Box, Grid, TextField, MenuItem, RadioGroup, FormLabel, FormControlLabel, Radio} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import AutoMotoPaiementCheck from '../../components/AutoMotoPaiementCheck';
import HabitationGarantieCheck from '../../components/HabitationGarantieCheck';
import HabitationInstallationCheck from '../../components/HabitationInstallationCheck';
import HabitationOptionCheck from '../../components/HabitationOptionCheck';
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
    return (
        <HabitationFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Habitation</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextField required id="outlined-required" label="Nom" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Prenom" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Adresse" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="N° Client" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Etage" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nombre d'Etages de l'immeuble" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Téléphone Fixe" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Téléphone Mobile" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Email" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Situation Famillial" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nombre d'Enfants" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Adresse du bien" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Utilisation de la Résidence" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Statut" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Si Propriétaire" defaultValue="" variant="outlined"/>
                </div><div>
                <TextField  id="outlined-required" label="Surface totale en M2" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nombre de pièces Principales" defaultValue="" variant="outlined"/>
                </div><div>
                <TextField  id="outlined-required" label="Age du bien (+ou - de 10 ans)" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Engins à Moteur" defaultValue="" variant="outlined"/>
                </div><div>
                <TextField  id="outlined-required" label="Plafond valeur Mobilier & Equipements" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Objet de Valeurs" defaultValue="" variant="outlined"/>
                </div><div>
                <TextField  id="outlined-required" label="Réalisation par Compagnie" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Motifs de Réalisation" defaultValue="" variant="outlined"/>
                </div>
                {/* <Box component={"form"} sx={{'& .MuiTextField-root': { m: 1, width: '50ch' },}}> */}
                <div>
                <TextField  multiline fullWidth id="outlined-required" label="Utilisation de la Résidence" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  required id="outlined-required" label="Satut" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Si Propriétaire" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Surface Totale en M2" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nombre de Pièces Principales" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Age de Bien (+ ou - 10)" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Engins à Moteur" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Plafond Valeur Mobilier & Equipements" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Objets de Valeurs" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Réalisation par Compagnie" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Mots de la Réalisation" defaultValue="" variant="outlined"/>
                </div>
                <Typography sx={{textAlign:"center"}}>Assurance Scolaire:</Typography>
                <div>
                <TextField  required id="outlined-required" label="Nom (S), Prénom (s) de Naissance des enfants (obligatoire)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Animaux( Chiens dangereux, Cheavaux)" defaultValue="" variant="outlined"/>
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