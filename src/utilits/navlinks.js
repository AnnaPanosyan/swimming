import { v4 as uuidv4 } from "uuid";

export const navlinks = [
  {
    id: uuidv4(),
    link: "Home",
    to: "/",
  },
  {
    id: uuidv4(),
    link: "Kurs buchen",
    to: "/kursbuchen",
  },
  {
    id: uuidv4(),
    link: "Kursplan",
    to: "/kursplan",
  },
  {
    id: uuidv4(),
    link: "Kontakt",
    to: "/kontact",
  },
  //  {
  //   id: uuidv4(),
  //   link: 'Feedback',
  //   to: '/feedback'
  // },
  {
    id: uuidv4(),
    link: "Baderegeln",
    to: "/baderegeln",
  },
];

export const roolsLink = [
  {
    id: uuidv4(),
    link: "Impressum",
    to: "/impressum",
  },
  {
    id: uuidv4(),
    link: "Datenschutz",
    to: "/datenschutz",
  },
  {
    id: uuidv4(),
    link: "AGB",
    to: "/AGB",
  },
];
