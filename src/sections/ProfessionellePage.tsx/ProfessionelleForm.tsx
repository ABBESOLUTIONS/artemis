import { Box, Grid, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../../common/colors';
import ProfessionelleGarantieCheck from '../../components/ProfessionelGarantieCheck';
import ProfessionelleOptionCheck from '../../components/ProfessionelleOptionCheck';
import TextFieldPersonnalise from '../../components/TextFieldPersonnalise';
import SectionStyle from '../../styles/SectionStyle';

const ProfessionelleFormContainer=styled(SectionStyle)(()=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
}));

function ProfessionelleForm() {
    const [nameEtreprise, setNameEtreprise] = React.useState("");

  const handleNameEtrepriseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameEtreprise(event.target.value);
  };
  const [nameSouscript, setNameSouscript] = React.useState("");

  const handleNameSouscriptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameSouscript(event.target.value);
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
    const [formeJuri, setFormeJuri] = React.useState("");

  const handleFormeJuriChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormeJuri(event.target.value);
  };
    const [dateNaiss, setDateNaiss] = React.useState("");

  const handleDateNaissChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateNaiss(event.target.value);
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
  const [siret, setSiret] = React.useState("");

  const handleSiretChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiret(event.target.value);
  };
  const [ape, setApe] = React.useState("");

  const handleApeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApe(event.target.value);
  };
  const [activPrinci, setActivPrinci] = React.useState("");

  const handleActivPrinciChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivPrinci(event.target.value);
  };
  const [ratioPrinci, setRatioPrinci] = React.useState("");

  const handleRatioPrinciChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatioPrinci(event.target.value);
  };
  const [activAnexe, setActivAnexe] = React.useState("");

  const handleActivAnexeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivAnexe(event.target.value);
  };
  const [ratioAnexe, setRatioAnexe] = React.useState("");

  const handleRatioAnexeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatioAnexe(event.target.value);
  };
  const [activAnexeone, setActivAnexeone] = React.useState("");

  const handleActivAnexeoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivAnexeone(event.target.value);
  };
  const [ratioAnexeone, setRatioAnexeone] = React.useState("");

  const handleRatioAnexeoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatioAnexeone(event.target.value);
  };
  const [activAnexetwo, setActivAnexetwo] = React.useState("");

  const handleActivAnexetwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivAnexetwo(event.target.value);
  };
  const [ratioAnexetwo, setRatioAnexetwo] = React.useState("");

  const handleRatioAnexetwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatioAnexetwo(event.target.value);
  };
  const [activAnexethree, setActivAnexethree] = React.useState("");

  const handleActivAnexethreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivAnexethree(event.target.value);
  };
  const [ratioAnexethree, setRatioAnexethree] = React.useState("");

  const handleRatioAnexethreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatioAnexethree(event.target.value);
  };
  const [activAnexefour, setActivAnexefour] = React.useState("");

  const handleActivAnexefourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivAnexefour(event.target.value);
  };
  const [ratioAnexefour, setRatioAnexefour] = React.useState("");

  const handleRatioAnexefourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatioAnexefour(event.target.value);
  };
  const [nomConjoint, setNomConjoint] = React.useState("");

  const handleNomConjointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomConjoint(event.target.value);
  };
  const [prenomConjoint, setPreNomConjoint] = React.useState("");

  const handlePreNomConjointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreNomConjoint(event.target.value);
  };
  const [conjCollab, setConjCollab] = React.useState("");

  const handleConjCollabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConjCollab(event.target.value);
  };
  const [dateNaissCollab, setDateNaissCollab] = React.useState("");

  const handleDateNaissCollabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateNaissCollab(event.target.value);
  };
  const [chiffAff, setChiffAff] = React.useState("");

  const handleChiffAffChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChiffAff(event.target.value);
  };
  const [effectif, setEffectif] = React.useState("");

  const handleEffectifChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEffectif(event.target.value);
  };
  const [surface, setSurface] = React.useState("");

  const handleSurfaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurface(event.target.value);
  };
  const [produits, setProduits] = React.useState("");

  const handleProduitsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduits(event.target.value);
  };
  const [naturePdts, setNaturePdts] = React.useState("");

  const handleNaturePdtsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNaturePdts(event.target.value);
  };
  
    return (
        <ProfessionelleFormContainer>
            <Typography variant="h6" sx={{textAlign:"center", fontSize:'', color:PROJECT_COLORS.primarySwatch}}>Vous etes entrain de demander un devis...</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"45px", marginBottom:"50px", textAlign:"center" }}>FICHE CONSEIL</Typography>
            <Typography variant='h3' sx={{ fontWeight:"bold", fontSize:"35px", marginBottom:"50px", textAlign:"center" }}>Etude Assurance RC Pro - Multi Risques Pro</Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '50ch' },}}>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nom de l'Entreprise"} value={nameEtreprise} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Adresse"} value={adresse} />
                <TextFieldPersonnalise id={''} required={true} label={"N° Client"} value={numId} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nom du Souscripteur"} value={nameSouscript} />
                <TextFieldPersonnalise id={''} required={true}  label={"Prénom"} value={prenom} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true}  label={"Forme Juridique de l'Entreprise"} value={formeJuri} />
                <TextFieldPersonnalise id={''} required={true}  label={"Date de Naissance"} value={dateNaiss} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Téléphone Fixe"} value={telFix} />
                <TextFieldPersonnalise id={''} required={true} label={"Téléphone Mobile"} value={telMob} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Email"} value={email} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Siret"} value={siret} />
                <TextFieldPersonnalise id={''} required={true} label={"APE"} value={ape} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Activité Principale"} value={activPrinci} />
                <TextFieldPersonnalise id={''} required={true} label={"Ratio (%)"} value={ratioPrinci} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Activité Annexes"} value={activAnexe} />
                <TextFieldPersonnalise id={''} required={true} label={"Ratio (%)"} value={ratioAnexe} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Activité Annexes"} value={activAnexeone} />
                <TextFieldPersonnalise id={''} required={true} label={"Ratio (%)"} value={ratioAnexeone} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Activité Annexes"} value={activAnexetwo} />
                <TextFieldPersonnalise id={''} required={true} label={"Ratio (%)"} value={ratioAnexetwo} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Activité Annexes"} value={activAnexethree} />
                <TextFieldPersonnalise id={''} required={true} label={"Ratio (%)"} value={ratioAnexethree} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Activité Annexes"} value={activAnexefour} />
                <TextFieldPersonnalise id={''} required={true} label={"Ratio (%)"} value={ratioAnexefour} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nom du Conjoint"} value={nomConjoint} />
                <TextFieldPersonnalise id={''} required={true} label={"Prénom du Conjoint"} value={prenomConjoint} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Conjoint Collaborateur"} value={conjCollab} />
                <TextFieldPersonnalise id={''} required={true} label={"Date Naissance du Conjoint"} value={dateNaissCollab} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Chiffre d'Affaire (en )"} value={chiffAff} />
                <TextFieldPersonnalise id={''} required={true} label={"Effectif"} value={effectif} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Surface en m2"} value={surface} />
                <TextFieldPersonnalise id={''} required={true} label={"Produits Dangereux"} value={produits} />
                </div>
                <div>
                <TextFieldPersonnalise id={''} required={true} label={"Nature des Produits"} value={naturePdts} />
                </div>
                <ProfessionelleGarantieCheck/>
                <ProfessionelleOptionCheck/>
            </Box>
        </ProfessionelleFormContainer>
    );
}

export default ProfessionelleForm;