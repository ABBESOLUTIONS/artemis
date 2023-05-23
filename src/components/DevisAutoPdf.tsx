import ReactPDF, { Document, Page, Text, StyleSheet, View, Image } from '@react-pdf/renderer';
import React from 'react';
import { DevisAutoModel } from '../models/DevisAutoModel';

const styles = StyleSheet.create({
    page: {
        // width:"100%",
        // backgroundColor: '#E4E4E4'
        paddingTop: 25,
        paddingBottom: 55,
        paddingHorizontal: 25,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "",
    },
    section: {
      // display:"flex",
      // flexDirection:"row",
      // marginBottom:10,
      // marginHorizontal:8,
      // // backgroundColor:"red"
      display: "flex",
      flexDirection: "row",
      backgroundColor: "",
      // margin: 10,
      padding: 10,
      // flexGrow: 1,
      justifyContent: "center",
      },
      typeStyle: {
        fontWeight:800,
      },
      libelleStyle: {
        fontSize: 12,
        // color:"green",
        fontWeight: "thin",
        marginRight: 10,
        width: "50%",
        // backgroundColor: "blue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        color: "green",
      },
      dataStyle: {
        // fontWeight:800,
        fontSize: 10,
        // marginHorizontal:8
        width:"50%",
        // backgroundColor:"red",
        display:"flex",
        borderBottom:"2px solid",
      },
      headerStyle: {
        border:"2px solid",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"10px"
      },
      headerTextStyle: {
        color:"#9FADB3",
        textAlign:"center"
      },
})

interface Props {
  id_client?:string,
  Nom?:string,
  Prenom?:string,
  Adresse?:string,
  Num_Client?:string | null ,
  Telephone_Fix?:string,
  Telephone_Mobile?:string,
  Email?:string,
  Situation_Familial?:string,
  Nombre_Enfants_Inférieur_16ans?:string,
  Nombre_Enfants_Superieur_16ans?:string,
  Profession?:string,
  Date_Naissance?:string,
  Date_Permis_Conduite?:string
  Marque_D1?:string,
  Modele_D3?:string,
  Version?:string,
  Puissance_Fiscale?:string,
  Type_Mine_D2?:string,
  Mise_Circulation_B?:string,
  Immatriculation?:string,
  Date_Acquisition?:string,
  Titulaire_Carte_Grise?:string,
  Autres_Conducteurs?:string,
  Coefficient_Bonus_CRM?:string,
  Date_Obtention_CRM?:string,
  Nature_Sinistre_1?:string | null,
  Date_Sinistre_1?:string | null,
  Nature_Sinistre_2?:string | null,
  Date_Sinistre_2?:string | null,
  Nature_Sinistre_3?:string | null,
  Date_Sinistre_3?:string | null,
  Resiliation_Compagnie?:string,
  Motif_Resiliation?:string,
  Date_Resiliation?:string,
  Suspension_ou_Annulation_Permis?:string,
  dateSuspens?:string,
  Date_Motif_Suspension?:string,
  Garage?: Array<string>,
  Usage_Vehiculaire?: Array<string>,
  Garanties_Souhaitées?: Array<string>,
  Option?: Array<string>,
  Mode_Paiement?: Array<string>,
  typeDevis?:string | null,
  uid?:string,

};

const DevisModelPdf = ({
  id_client,
  Nom,
  Prenom ,
  Adresse,
  Num_Client,
  Telephone_Fix,
  Telephone_Mobile,
  Email,
  Situation_Familial,
  Nombre_Enfants_Inférieur_16ans,
  Nombre_Enfants_Superieur_16ans,
  Profession,
  Date_Naissance,
  Date_Permis_Conduite,
  Marque_D1,
  Modele_D3,
  Version,
  Puissance_Fiscale,
  Type_Mine_D2,
  Mise_Circulation_B,
  Immatriculation,
  Date_Acquisition,
  Titulaire_Carte_Grise,
  Autres_Conducteurs,
  Coefficient_Bonus_CRM,
  Date_Obtention_CRM,
  Nature_Sinistre_1,
  Date_Sinistre_1,
  Nature_Sinistre_2,
  Date_Sinistre_2,
  Nature_Sinistre_3,
  Date_Sinistre_3,
  Resiliation_Compagnie,
  Motif_Resiliation,
  Date_Resiliation,
  Suspension_ou_Annulation_Permis,
  dateSuspens,
  Date_Motif_Suspension,
  Garage,
  Usage_Vehiculaire,
  Garanties_Souhaitées,
  Option,
  Mode_Paiement,
  typeDevis,
  uid,
}: Props) => (
    <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.headerStyle}>
            {/* <Image src={"assets/images/formBg2.png"}/> */}
            <Text style={styles.headerTextStyle}>DEMANDE DE DEVIS - {typeDevis}</Text>
          </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Nom Client:</Text><Text style={styles.dataStyle}>{Nom}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Prenom:</Text><Text style={styles.dataStyle}>{Prenom}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Adresse:</Text><Text style={styles.dataStyle}>{Adresse}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Num_Client:</Text><Text style={styles.dataStyle}>{Num_Client}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Telephone Fix:</Text><Text style={styles.dataStyle}>{Telephone_Fix}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Telephone Mobile:</Text><Text style={styles.dataStyle}>{Telephone_Mobile}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Email:</Text><Text style={styles.dataStyle}>{Email}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Situation_Familial:</Text><Text style={styles.dataStyle}>{Situation_Familial}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Nombre_Enfants_Inférieur_16ans:</Text><Text style={styles.dataStyle}>{Nombre_Enfants_Inférieur_16ans}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Nombre_Enfants_Superieur_16ans:</Text><Text style={styles.dataStyle}>{Nombre_Enfants_Superieur_16ans}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Profession:</Text><Text style={styles.dataStyle}>{Profession}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Naissance:</Text><Text style={styles.dataStyle}>{Date_Naissance}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Permis_Conduite:</Text><Text style={styles.dataStyle}>{Date_Permis_Conduite}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Marque_D1:</Text><Text style={styles.dataStyle}>{Marque_D1}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Modele_D3:</Text><Text style={styles.dataStyle}>{Modele_D3}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Version:</Text><Text style={styles.dataStyle}>{Version}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Puissance_Fiscale:</Text><Text style={styles.dataStyle}>{Puissance_Fiscale}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Type_Mine_D2:</Text><Text style={styles.dataStyle}>{Type_Mine_D2}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Mise_Circulation_B:</Text><Text style={styles.dataStyle}>{Mise_Circulation_B}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Immatriculation:</Text><Text style={styles.dataStyle}>{Immatriculation}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Acquisition:</Text><Text style={styles.dataStyle}>{Date_Acquisition}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Titulaire_Carte_Grise:</Text><Text style={styles.dataStyle}>{Titulaire_Carte_Grise}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Autres_Conducteurs:</Text><Text style={styles.dataStyle}>{Autres_Conducteurs}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Coefficient_Bonus_CRM:</Text><Text style={styles.dataStyle}>{Coefficient_Bonus_CRM}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Obtention_CRM:</Text><Text style={styles.dataStyle}>{Date_Obtention_CRM}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Nature_Sinistre_1:</Text><Text style={styles.dataStyle}>{Nature_Sinistre_1}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Sinistre_1:</Text><Text style={styles.dataStyle}>{Date_Sinistre_1}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Nature_Sinistre_2:</Text><Text style={styles.dataStyle}>{Nature_Sinistre_2}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Sinistre_2:</Text><Text style={styles.dataStyle}>{Date_Sinistre_2}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Nature_Sinistre_3:</Text><Text style={styles.dataStyle}>{Nature_Sinistre_3}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Sinistre_3:</Text><Text style={styles.dataStyle}>{Date_Sinistre_3}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Resiliation_Compagnie:</Text><Text style={styles.dataStyle}>{Resiliation_Compagnie}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Motif_Resiliation:</Text><Text style={styles.dataStyle}>{Motif_Resiliation}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Resiliation:</Text><Text style={styles.dataStyle}>{Date_Resiliation}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Suspension_ou_Annulation_Permis:</Text><Text style={styles.dataStyle}>{Suspension_ou_Annulation_Permis}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>dateSuspens:</Text><Text style={styles.dataStyle}>{dateSuspens}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Suspension_ou_Annulation_Permis:</Text><Text style={styles.dataStyle}>{Suspension_ou_Annulation_Permis}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Date_Motif_Suspension:</Text><Text style={styles.dataStyle}>{Date_Motif_Suspension}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Garage:</Text>{Garage?.map(one => <Text style={styles.dataStyle}>{one}/</Text>)}
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Usage_Vehiculaire:</Text><Text style={styles.dataStyle}>{Usage_Vehiculaire}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Garanties_Souhaitées:</Text> {Garanties_Souhaitées?.map(one => <Text style={styles.dataStyle}>{one}/</Text>)}
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Option:</Text>{Option?.map(one => <Text style={styles.dataStyle}>{one}/</Text>)}
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>Mode_Paiement:</Text>{Mode_Paiement?.map(one => <Text style={styles.dataStyle}>{one}/</Text>)}
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>typeDevis:</Text><Text style={styles.dataStyle}>{typeDevis}</Text>
           </View>
           <View style={styles.section}>
            <Text style={styles.libelleStyle}>uid:</Text><Text style={styles.dataStyle}>{uid}</Text>
           </View>
        </Page>
    </Document>
);


// ReactPDF.renderToStream(<DevisModelPdf/>)

export default DevisModelPdf;