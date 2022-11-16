import { Box, Grid, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import ProfessionelleGarantieCheck from '../../components/ProfessionelGarantieCheck';
import ProfessionelleOptionCheck from '../../components/ProfessionelleOptionCheck';
import SectionStyle from '../../styles/SectionStyle';

const ProfessionelleFormContainer=styled(SectionStyle)(()=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function ProfessionelleForm() {
    return (
        <ProfessionelleFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance RC Pro - Multi Risques Pro</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextField required id="outlined-required" label="Nom du Souscripteur" defaultValue="" variant="outlined"/>
                <TextField required id="outlined-required" label="Prenom" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Forme Juridique de l'Entreprise" defaultValue="" variant="outlined"/>
                <TextField  required id="outlined-required" label="Date de Naissance" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Téléphone Fixe" defaultValue="" variant="outlined"/>
                <TextField  required id="outlined-required" label="Téléphone Mobile" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField   required id="outlined-required" label="Email" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Siret" defaultValue="" variant="outlined"/>
                <TextField  required id="outlined-required" label="APE" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField required id="outlined-required" label="Activité Principale" defaultValue="" variant="outlined"/>
                <TextField  required id="outlined-required" label="Ratio (%)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Activité Annexes" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="Ratio (%)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Activité Annexes" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="Ratio (%)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Activité Annexes" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="Ratio (%)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Activité Annexes" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="Ratio (%)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Activité Annexes" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="Ratio (%)" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Nom du Conjoint" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="Prénom du Conjoint" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  id="outlined-required" label="Conjoint Collaborateur" defaultValue="" variant="outlined"/>
                <TextField  id="outlined-required" label="Date Naissance du Conjoint" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  required id="outlined-required" label="Chiffre d'Affaire (en )" defaultValue="" variant="outlined"/>
                <TextField  required id="outlined-required" label="Effectif" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  required id="outlined-required" label="Surface en m2" defaultValue="" variant="outlined"/>
                <TextField  required id="outlined-required" label="Produits Dangereux" defaultValue="" variant="outlined"/>
                </div>
                <div>
                <TextField  required id="outlined-required" label="Nature des Produits" defaultValue="" variant="outlined"/>
                </div>
                <ProfessionelleGarantieCheck/>
                <ProfessionelleOptionCheck/>
            </Box>
        </ProfessionelleFormContainer>
    );
}

export default ProfessionelleForm;