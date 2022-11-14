
import { styled, Typography, Box, Grid, TextField, MenuItem} from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import SectionStyle from '../../styles/SectionStyle';
// import { PROJECT_COLORS } from '../../../common/colors';
// import { currencies } from '../../../common/Data';
// import AutoMotoGarageCheck from '../../../components/AutoMotoGarageCheck';
// import AutoMotoUsageVehiculaireCheck from '../../../components/AutoMotoUsageVehiculaireCheck';
// import SectionStyle from '../../../styles/SectionStyle';

const HabitationFormContainer=styled(SectionStyle)(()=>({
    maxHeight:"2000px",
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
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Auto-Moto</Typography>
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
                <Typography>Assurance Scolaire:</Typography>
                <Typography>Nom (S), Prénom (s) de Naissance des enfants</Typography>
                <Box component={"form"} sx={{'& .MuiTextField-root': { m: 1, width: '50ch' },}}>
                <div>
                <TextField  multiline fullWidth id="outlined-required" label="Utilisation de la Résidence" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Animaux( Chiens dangereux, Cheavaux)" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nombre d'Enfants" defaultValue="" variant="outlined"/>
                </div>
                </Box>
                
            </Box>
        </HabitationFormContainer>
    );
}

export default HabitationForm;