"use strict";

//declaració variables compartides
let text = "";

const CATEGORIES = {
  html5: {
    title: "HTML5",
    color: "255 215 0", //gold
  },
};

//object
const ESSENTIALS = [
  {
    id: 11,
    href: "essentials/11.html",
    categorty: CATEGORIES.html5,
    title: "HTML5 Basic 1",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 12,
    href: "essentials/12.html",
    categorty: CATEGORIES.html5,
    title: "HTML5 Basic 2",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 13,
    href: "essentials/13.html",
    categorty: CATEGORIES.html5,
    title: "HTML5 Basic 3",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 14,
    href: "essentials/14.html",
    categorty: CATEGORIES.html5,
    title: "HTML5 Basic 4",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 15,
    href: "essentials/15.html",
    categorty: CATEGORIES.html5,
    title: "HTML5 Basic 5",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 16,
    href: "essentials/16.html",
    categorty: CATEGORIES.html5,
    title: "HTML5 Links",
    subtitle: "Exemple d'una pàgina HTML5 amb enllaços",
    text: `HTML Links: <a href>`,
  },
  {
    id: 17,
    href: "essentials/17.html",
    categorty: CATEGORIES.html5,
    title: "HTML5 Lists",
    subtitle: "Exemple d'una pàgina HTML5 amb llistes",
    text: `HTML Lists: Unordered HTML List <ul><li>, Ordered HTML List <ol><li>, HTML Description Lists <dl><dt><dd>`,
  },
  {
    id: 18,
    href: "essentials/18.html",
    categorty: CATEGORIES.html5,
    title: "HTML Tables 1",
    subtitle: "Exemple d'una pàgina HTML5 amb taules",
    text: `HTML Tables: <table>, Table Cells <td>, Table Rows <tr>, Table Headers <th>`,
  },
  {
    id: 19,
    href: `essentials/19.html`,
    categorty: CATEGORIES.html5,
    title: "HTML Tables 2",
    subtitle: "Exemple d'una pàgina HTML5 amb taules",
    text: `HTML Tables: <table>, Table Cells <td>, Table Rows <tr>, Table Headers <th>`,
  },
  {
    id: 110,
    href: `essentials/110.html`,
    categorty: CATEGORIES.html5,
    title: "HTML Forms 1",
    subtitle: "Exemple d'una pàgina HTML5 amb formulari",
    text: `<form> <input> <label>, Text Fields, Radio Buttons, Checkboxes, Submit Button, Form Attributes, Form Elements, Input Types, Input Attributes`,
  },
  {
    id: 111,
    href: `essentials/111.html`,
    categorty: CATEGORIES.html5,
    title: "HTML Forms 2",
    subtitle: "Exemple d'una pàgina HTML5 amb formulari",
    text: `<form> <input> <label>, Text Fields, Radio Buttons, Checkboxes, Submit Button, Form Attributes, Form Elements, Input Types, Input Attributes`,
  },
  {
    id: 112,
    href: `essentials/112.html`,
    categorty: CATEGORIES.html5,
    title: "HTML Forms 3",
    subtitle: "Exemple d'una pàgina HTML5 amb formulari",
    text: `<form> <input> <label>, Text Fields, Radio Buttons, Checkboxes, Submit Button, Form Attributes, Form Elements, Input Types, Input Attributes`,
  },
];
