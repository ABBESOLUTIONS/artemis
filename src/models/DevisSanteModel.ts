export interface DevisSanteModel {
    id_client:string,
    Nom:string,
    Prenom : string,
    Adresse:string,
    Num_Client:string | null ,
    Telephone_Fix:string,
    Telephone_Mobile:string,
    Email:string,
    Num_Secu_Social:string,
    Date_Naissance:string,
    Professionel:string,
    Situation_Familial:string,
    Statut_Pro_Date_Creation:string,
    Nom_Prenom_Conjoint:string,
    Date_Naiss_Conjoint:string,
    Num_Secu_Social_Conjoint:string,
    Nbre_Enfants_rattaché_Souscripteur:string,
    Nbre_Enfants_rattaché_Conjoint:string,
    Nom_Prenom_EnfantUn_Souscripteur:string,
    Date_Naiss_EnfantUn:string,
    Nom_Prenom_EnfantDeux_Souscripteur:string,
    Date_Naiss_EnfantDeux:string,
    Nom_Prenom_EnfantTrois_Souscripteur:string,
    Date_Naiss_EnfantTrois:string,
    Nom_Prenom_EnfantQuatre_Souscripteur:string,
    Date_Naiss_EnfantQuatre:string,
    Nom_Prenom_EnfantUn_Conjoint:string,
    Date_Naiss_EnfantUn_Conjoint:string,
    Nom_Prenom_EnfantDeux_Conjoint:string,
    Date_Naiss_Enfantdeux_Conjoint:string,
    Nom_Prenom_EnfantTrois_Conjoint:string,
    Date_Naiss_EnfantTrois_Conjoint:string,
    Garantie_Souhaitées: Array<string>,
    Option: Array<string>,
    Mode_Paiement: Array<string>,
    dateRegister:string | null,
    typeDevis:string,
    uid:string,

}