import React from 'react';
import { styled, Typography, Box, Grid, TextField, MenuItem} from '@mui/material';
import SectionStyle from '../../../styles/SectionStyle';
import { PROJECT_COLORS } from '../../../common/colors';


const SanteFormContainer=styled(SectionStyle)(()=>({
    maxHeight:"2000px",
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
    return (
        <SanteFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance Sante</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextField required id="outlined-required" label="Nom" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Prenom" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Adresse" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="N° Client" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Telephone Fixe" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Telephone Mobile" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Email" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Numéro de sécurité social" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Date de naissance" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Profession" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Statut Pro. (Si Indépendant :Caisse + Date de Création" defaultValue="" variant="outlined"/>
                </div>                
                <div>
                <TextField  id="outlined-required" label="Situation Familial" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nom , Prénom Conjoint" defaultValue="" variant="outlined"/>
                </div>                
                <div>
                <TextField  id="outlined-required" label="Date Naiss. Conjoint" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="N° Sécurité Social du Conjoint" defaultValue="" variant="outlined"/>
                </div>                
                <div>
                <TextField  id="outlined-required" label="Nombre enfants rattachés du souscripteur" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Nombre enfants rattachés du conjoint" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom et Prénom (enfant du souscripteur)" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Date de Naissance (Sexe)" defaultValue="" variant="outlined"/>
                </div>
                
            </Box>
        </SanteFormContainer>
    );
}

export default SanteForm;