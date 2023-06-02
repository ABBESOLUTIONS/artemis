import { Typography, styled } from '@mui/material';
import React from 'react';
import { PROJECT_COLORS } from '../common/colors';

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
const ParagraphContainer = styled("div")(()=>({
    margin:"0px 0px 25px 0px"
}))

function ConfidentialiteText() {
    return (
        <ConfidentialiteTextStyle>
            <ParagraphContainer>
                <ParagraphTitle>Politique de confidentialité et d'utilisation des Cookies</ParagraphTitle>
                <ParagraphText>Cette politique de confidentialité décrit les différentes catégories de données personnelles collectées lorsque vous utilisez notre site internet www.artemisassurance.fr . Il décrit également comment vos données personnelles sont utilisées, partagées et protégées. Cette politique a pour objectif de garantir que les visiteurs du site internet qui ont des questions sur la protection des données peuvent facilement contacter notre responsable de la protection des données.</ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>Utilisation des cookies</ParagraphTitle>
                <ParagraphText>Nous utilisons des cookies sur notre page d’accueil pour rendre la visite de notre Site plus fluide et plus attractive et pour permettre l'utilisation de certaines fonctions. Les "cookies" sont des fichiers texte qui sont stockés sur votre ordinateur et qui permettent une analyse de l'utilisation que vous faites de notre site internet. La plupart des cookies que nous utilisons sont supprimés de votre disque dur à la fin de la session du navigateur (les cookies de session). D'autres cookies restent sur votre ordinateur et nous permettent de le reconnaître lors de votre prochaine visite (les cookies persistants). Ces cookies sont utilisés pour vous accueillir avec votre nom d'utilisateur et vous évitent d'entrer à nouveau votre mot de passe ou de remplir des formulaires pour les demandes de devis à venir. Si vous ne souhaitez pas autoriser de cookies, vous avez la possibilité de cliquer sur le bouton Refuser du popup des cookies ; Vous pouvez également les désactiver dans votre navigateur Web. Veuillez noter que la désactivation des cookies peut rendre difficile l'utilisation de certains services fournis sur notre site internet, certains d'entre eux ne sont disponibles qu'avec des cookies activés.</ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>Quel usage est fait de vos données ?</ParagraphTitle>
                <ParagraphText>Lorsque vous nous fournissez des données à caractère personnel, par exemple lors d’une demande de devis ou d’une déclaration, nous les traitons conformément à votre législation locale et aux réglementations européennes en matière de protection des données. Dans la mesure où ces règlements permettent la collecte, le traitement ou l'utilisation de données personnelles sans consentement formel séparé, pour le traitement de vos demandes, nous respectons naturellement les exigences et les limites légales. Lorsque vous vous abonnez à la réception d’informations comme la newsletter, votre adresse e-mail sera utilisée dans ce seul but, jusqu'à ce que vous vous désinscriviez. Cette désinscription est possible à tout moment. Pour vous désinscrire, veuillez écrire à webmaster@artemisassurance.fr.</ParagraphText>
                <ParagraphText>Vos documents que vous nous envoyez via les formulaires de contact, de demande de devis ou de déclaration de sinistres sont traités uniquement pour les raisons pour lesquelles vous les avez envoyés. Artémis se réserve le droit de conserver vos données personnelles aussi longtemps que nécessaire pour remplir les objectifs définis au moment de leur collecte, sauf si la loi l'exige autrement.</ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>Vos droits</ParagraphTitle>
                <ParagraphText>Vous avez le droit de demander : (i) l'accès à vos données personnelles ; (ii) leur correction si elles sont incomplètes ou inexactes ; ou (iii) leur suppression. Vous avez également le droit de vous opposer au traitement de vos données personnelles pour des motifs légitimes et impérieux liés à votre situation particulière. Vous avez le droit de retirer votre consentement au traitement de vos données personnelles à tout moment, après nous l'avoir donné.</ParagraphText>
                <ParagraphText>Pour toute question concernant vos données, veuillez nous contacter par email : privacy@artemisassurance.fr. </ParagraphText>
            </ParagraphContainer>
            <ParagraphContainer>
                <ParagraphTitle>Transfert de données personnelles</ParagraphTitle>
                <ParagraphText></ParagraphText>
            </ParagraphContainer>
        </ConfidentialiteTextStyle>
    );
}

export default ConfidentialiteText;