import { OTHER_PAGES, CLIENT_PAGES, USER_PAGES } from "../routes/paths";

const OtherMenuItems = [
  {
    title: "404",
    path: OTHER_PAGES.page404,
  },
  {
    title: "500",
    path: OTHER_PAGES.page500,
  },
];

const ClientMenuItems = [
  {
    title: "Accueil",
    path: CLIENT_PAGES.home
  },
  {
    title: "Services",
    path: CLIENT_PAGES.services
  },
  // {
  //   title: "Blog",
  //   path:  CLIENT_PAGES.blog,
  // },
  {
    title: "Contact",
    path:"",
    submenu:[
      {
        title: "Nous Contacter",
        path: CLIENT_PAGES.contact
      },
      {
      title:"Un sinistre",
      path:CLIENT_PAGES.declarationSinistre,
      },
      {
      title:"Faire une Réclamation",
      path: CLIENT_PAGES.reclamation,
      },
    ]
  },
];

const UserMenuItems = [
  {
    title:"Demander Un Devis",
    path:USER_PAGES.contratsList,
  },
  // {
  //   title:"Demander Un Devis",
  //   path:USER_PAGES.demande,
  // },
  // {
  //   title:"Envoyer un Message",
  //   path:USER_PAGES.contact,
  // },
  {
    title:"Deconnexion",
    path:USER_PAGES.deconnexion,
  },
]

const HeaderConfig = {
  HEIGHT: 80,
  MAX_HEIGHT: 90,
};

export { OtherMenuItems, ClientMenuItems, HeaderConfig, UserMenuItems};
