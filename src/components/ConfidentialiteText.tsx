import { List, ListItem, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../common/colors';
import ConfidentialiteListItem from './ConfidentialiteListItem';
import { ArrowRight, FiberManualRecord } from '@mui/icons-material';

const ConfidentialiteTextStyle=styled("div")(()=>({

}))
const ParagraphText = styled(Typography)(()=>({
    fontSize:"1.1em",
    textAlign:"justify",
}))
const ParagraphTitle = styled(Typography)(()=>({
    color: PROJECT_COLORS.primarySwatch,
    fontSize:"1.5em",
    fontWeight:"bold",
    margin:"0px 0px 10px 0px"
}))
const MainTitle = styled(Typography)(()=>({
    color: PROJECT_COLORS.primarySwatch,
    fontSize:"2.0em",
    fontWeight:"bold",
    textAlign:"center",
    margin:"0px 0px 20px 0px"
}))
const ParagraphContainer = styled("div")(()=>({
    margin:"0px 0px 25px 0px"
}))

function ConfidentialiteText() {
    return (
        <ConfidentialiteTextStyle>
            <MainTitle>Politique de confidentialité et d'utilisation des Cookies</MainTitle>
            <ParagraphContainer>
                <ParagraphText>Cette politique de confidentialité décrit les différentes catégories de données personnelles collectées lorsque vous utilisez notre site internet <span><a style={{color:PROJECT_COLORS.primarySwatch, textDecoration:"none", fontWeight:"bold"}} href=''>www.artemisassurance.fr</a></span>.Il décrit également comment vos données personnelles sont utilisées, partagées et protégées. Cette politique a pour objectif de garantir que les visiteurs du site internet qui ont des questions sur la protection des données peuvent facilement contacter notre responsable de la protection des données.</ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>1- Utilisation des cookies</ParagraphTitle>
                <ParagraphText>Nous utilisons des cookies sur notre page d’accueil pour rendre la visite de notre Site plus fluide et plus attractive et pour permettre l'utilisation de certaines fonctions. Les "cookies" sont des fichiers texte qui sont stockés sur votre ordinateur et qui permettent une analyse de l'utilisation que vous faites de notre site internet. La plupart des cookies que nous utilisons sont supprimés de votre disque dur à la fin de la session du navigateur (les cookies de session). D'autres cookies restent sur votre ordinateur et nous permettent de le reconnaître lors de votre prochaine visite (les cookies persistants). Ces cookies sont utilisés pour vous accueillir avec votre nom d'utilisateur et vous évitent d'entrer à nouveau votre mot de passe ou de remplir des formulaires pour les demandes de devis à venir. Si vous ne souhaitez pas autoriser de cookies, vous avez la possibilité de cliquer sur le bouton Refuser du popup des cookies ; Vous pouvez également les désactiver dans votre navigateur Web. Veuillez noter que la désactivation des cookies peut rendre difficile l'utilisation de certains services fournis sur notre site internet, certains d'entre eux ne sont disponibles qu'avec des cookies activés.</ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>2- Quel usage est fait de vos données ?</ParagraphTitle>
                <ParagraphText>Lorsque vous nous fournissez des données à caractère personnel, par exemple lors d’une demande de devis ou d’une déclaration, nous les traitons conformément à votre législation locale et aux réglementations européennes en matière de protection des données. Dans la mesure où ces règlements permettent la collecte, le traitement ou l'utilisation de données personnelles sans consentement formel séparé, pour le traitement de vos demandes, nous respectons naturellement les exigences et les limites légales. Lorsque vous vous abonnez à la réception d’informations comme la newsletter, votre adresse e-mail sera utilisée dans ce seul but, jusqu'à ce que vous vous désinscriviez. Cette désinscription est possible à tout moment. Pour vous désinscrire, veuillez écrire à <span><a style={{color:PROJECT_COLORS.primarySwatch, textDecoration:"none", fontWeight:"bold"}} href=''>webmaster@artemisassurance.fr</a></span>.</ParagraphText>
                <ParagraphText>Vos documents que vous nous envoyez via les formulaires de contact, de demande de devis ou de déclaration de sinistres sont traités uniquement pour les raisons pour lesquelles vous les avez envoyés. Artémis se réserve le droit de conserver vos données personnelles aussi longtemps que nécessaire pour remplir les objectifs définis au moment de leur collecte, sauf si la loi l'exige autrement.</ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>3- Vos droits</ParagraphTitle>
                <ParagraphText>Vous avez le droit de demander : (i) l'accès à vos données personnelles ; (ii) leur correction si elles sont incomplètes ou inexactes ; ou (iii) leur suppression. Vous avez également le droit de vous opposer au traitement de vos données personnelles pour des motifs légitimes et impérieux liés à votre situation particulière. Vous avez le droit de retirer votre consentement au traitement de vos données personnelles à tout moment, après nous l'avoir donné.</ParagraphText>
                <ParagraphText>Pour toute question concernant vos données, veuillez nous contacter par email : <span><a style={{color:PROJECT_COLORS.primarySwatch, textDecoration:"none", fontWeight:"bold"}} href='mailto:reclamation@artemisassurance.fr'>privacy@artemisassurance.fr</a></span></ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>4- Transfert de données personnelles</ParagraphTitle>
                <ParagraphText>
                    Artemis est susceptible de transférer vos données personnelles à :
                    <List>
                        <ListItem>
                            <ListItemIcon><FiberManualRecord sx={{color:PROJECT_COLORS.primarySwatch, }} fontSize='small'/></ListItemIcon>
                            <ListItemText>Des partenaires et prestataires en assurance, dans le but et les conditions décrites ci-dessus, par exemple pour vous rechercher l’assurance qui vous convient le mieux, pour traiter les paiements, expédier votre carte verte, gérer et maintenir nos propres données, envoyer des courriels, ainsi que les services et fonctionnalités associés.</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><FiberManualRecord sx={{color:PROJECT_COLORS.primarySwatch, }} fontSize='small'/></ListItemIcon>
                            <ListItemText>D'autres tiers, dans la mesure où cela s'avère nécessaire pour : </ListItemText>
                        </ListItem>
                        <List sx={{marginLeft:"5%"}}>
                            <ListItem>
                                <ListItemIcon><ArrowRight sx={{color:PROJECT_COLORS.primarySwatch, }} fontSize='large'/></ListItemIcon>
                                <ListItemText>se conformer à une demande des autorités, à l'ordonnance d'un tribunal ou à une loi applicable ;</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><ArrowRight sx={{color:PROJECT_COLORS.primarySwatch, }} fontSize='large'/></ListItemIcon>
                                <ListItemText>empêcher l'utilisation illégale ou la violation des conditions d'utilisation de notre site internet, ou de nos politiques ; </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><ArrowRight sx={{color:PROJECT_COLORS.primarySwatch, }} fontSize='large'/></ListItemIcon>
                                <ListItemText>nous défendre contre les réclamations de tiers et (iv) aider à la prévention de la fraude ou faciliter les enquêtes (par exemple sur la fausse assurance). </ListItemText>
                            </ListItem>
                        </List>
                    </List>
                    Toute autre utilisation de vos données personnelles ou divulgation à des tiers n'aura pas lieu.
                </ParagraphText>
            </ParagraphContainer>
        </ConfidentialiteTextStyle>
    );
}

export default ConfidentialiteText;