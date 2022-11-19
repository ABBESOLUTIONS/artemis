import { OTHER_PAGES, CLIENT_PAGES } from "../routes/paths";

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
  {
    title: "Blog",
    path:  CLIENT_PAGES.blog,
  },
  {
    title: "Contact",
    path: CLIENT_PAGES.contact
  },
  {
    title: "Declaration",
    path:"/look",
    submenu:[
      {
      title:"Un sinistre",
      path:CLIENT_PAGES.contact,
      },
      {
      title:"Faire un réclamation",
      path: CLIENT_PAGES.contact,
      }
    ]
  },
];

const HeaderConfig = {
  HEIGHT: 80,
  MAX_HEIGHT: 90,
};

export { OtherMenuItems, ClientMenuItems, HeaderConfig };
