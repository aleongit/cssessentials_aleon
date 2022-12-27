"use strict";

//declaració variables compartides
let text = "";

const CATEGORIES = {
  html5: {
    title: "HTML5",
    color: "255 215 0", //gold
  },
  css3: {
    title: "CSS3",
    color: "244 67 54", //vermell
  },
  csslayouts: {
    title: "CSS Layouts",
    color: "54 146 244", //blau
  },
  cssposition: {
    title: "CSS Position",
    color: "60 174 41", //verd
  },
  cssbackgrounds: {
    title: "CSS Backgrounds",
    color: "255 235 59", //groc
  },
  cssforms: {
    title: "CSS Forms",
    color: "255 152 0", //taronja
  },
  cssresponsive: {
    title: "CSS Responsive",
    color: "255 87 34", //roig
  },
  cssgrid: {
    title: "CSS Grid",
    color: "233 83 134", //rosa
  },
};

//object
const ESSENTIALS = [
  {
    id: 11,
    href: "essentials/11.html",
    category: CATEGORIES.html5,
    title: "HTML5 Basic 1",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 12,
    href: "essentials/12.html",
    category: CATEGORIES.html5,
    title: "HTML5 Basic 2",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 13,
    href: "essentials/13.html",
    category: CATEGORIES.html5,
    title: "HTML5 Basic 3",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 14,
    href: "essentials/14.html",
    category: CATEGORIES.html5,
    title: "HTML5 Basic 4",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 15,
    href: "essentials/15.html",
    category: CATEGORIES.html5,
    title: "HTML5 Basic 5",
    subtitle: "Exemple d'una pàgina HTML5",
    text: "HTML Basic, Elements, Attributes, Headings, Paragraphs, Formatting, Quotations",
  },
  {
    id: 16,
    href: "essentials/16.html",
    category: CATEGORIES.html5,
    title: "HTML5 Links",
    subtitle: "Exemple d'una pàgina HTML5 amb enllaços",
    text: `HTML Links: <a href>`,
  },
  {
    id: 17,
    href: "essentials/17.html",
    category: CATEGORIES.html5,
    title: "HTML5 Lists",
    subtitle: "Exemple d'una pàgina HTML5 amb llistes",
    text: `HTML Lists: Unordered HTML List <ul><li>, Ordered HTML List <ol><li>, HTML Description Lists <dl><dt><dd>`,
  },
  {
    id: 18,
    href: "essentials/18.html",
    category: CATEGORIES.html5,
    title: "HTML5 Tables 1",
    subtitle: "Exemple d'una pàgina HTML5 amb taules",
    text: `HTML Tables: <table>, Table Cells <td>, Table Rows <tr>, Table Headers <th>`,
  },
  {
    id: 19,
    href: `essentials/19.html`,
    category: CATEGORIES.html5,
    title: "HTML5 Tables 2",
    subtitle: "Exemple d'una pàgina HTML5 amb taules",
    text: `HTML Tables: <table>, Table Cells <td>, Table Rows <tr>, Table Headers <th>`,
  },
  {
    id: 110,
    href: `essentials/110.html`,
    category: CATEGORIES.html5,
    title: "HTML5 Forms 1",
    subtitle: "Exemple d'una pàgina HTML5 amb formulari",
    text: `<form> <input> <label>, Text Fields, Radio Buttons, Checkboxes, Submit Button, Form Attributes, Form Elements, Input Types, Input Attributes`,
  },
  {
    id: 111,
    href: `essentials/111.html`,
    category: CATEGORIES.html5,
    title: "HTML5 Forms 2",
    subtitle: "Exemple d'una pàgina HTML5 amb formulari",
    text: `<form> <input> <label>, Text Fields, Radio Buttons, Checkboxes, Submit Button, Form Attributes, Form Elements, Input Types, Input Attributes`,
  },
  {
    id: 112,
    href: `essentials/112.html`,
    category: CATEGORIES.html5,
    title: "HTML5 Forms 3",
    subtitle: "Exemple d'una pàgina HTML5 amb formulari",
    text: `<form> <input> <label>, Text Fields, Radio Buttons, Checkboxes, Submit Button, Form Attributes, Form Elements, Input Types, Input Attributes`,
  },
  {
    id: 21,
    href: `essentials/21.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 1",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 22,
    href: `essentials/22.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 2",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 23,
    href: `essentials/23.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 3",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 24,
    href: `essentials/24.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 4",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 25,
    href: `essentials/25.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 5",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 26,
    href: `essentials/26.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 6",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 27,
    href: `essentials/27.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 7",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 28,
    href: `essentials/28.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 8",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 29,
    href: `essentials/29.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 9",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 210,
    href: `essentials/210.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 10",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 211,
    href: `essentials/211.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 11",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 212,
    href: `essentials/212.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 12",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 213,
    href: `essentials/213.html`,
    category: CATEGORIES.css3,
    title: "CSS3 Basic 13",
    subtitle: "Exemple d'una pàgina HTML5 amb CSS3",
    text: `CSS Selectors: Simple selectors (name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, Attribute selectors`,
  },
  {
    id: 31,
    href: `essentials/31.html`,
    category: CATEGORIES.csslayouts,
    title: "CSS3 Fixed Layout",
    subtitle: "Exemple de maquetació fixa",
    text: `CSS Fixed layouts are layouts with fixed width in px or em, exp 960px, 1200px, 1170px, 1320px etc. The width of layout is fixed, that's why its called fixed layout.`,
  },
  {
    id: 32,
    href: `essentials/32.html`,
    category: CATEGORIES.csslayouts,
    title: "CSS3 Liquid Layout 1",
    subtitle: "Exemple de maquetació fluïda",
    text: `Fluid or Elastic or Liquid Layout is a layout in which the width of main container is flexible( in percentage). Whatever the screen-size is, the layout will remain same`,
  },
  {
    id: 33,
    href: `essentials/33.html`,
    category: CATEGORIES.csslayouts,
    title: "CSS3 Old Style",
    subtitle: "Exemple de maquetació old style",
    text: `Old Style works!`,
  },
  {
    id: 41,
    href: `essentials/41.html`,
    category: CATEGORIES.cssposition,
    title: "CSS3 Position 1",
    subtitle: "Exemple de posicionar una esfera",
    text: `The position property specifies the type of positioning method used for an element. 
    static, relative, fixed, absolute, sticky.
    CSS z-index`,
  },
  {
    id: 42,
    href: `essentials/42.html`,
    category: CATEGORIES.cssposition,
    title: "CSS3 Position 2",
    subtitle: "Exemple de posicionar una esfera i efecte hover",
    text: `The position property specifies the type of positioning method used for an element. 
    static, relative, fixed, absolute, sticky.
    CSS z-index`,
  },
  {
    id: 51,
    href: `essentials/51.html`,
    category: CATEGORIES.cssbackgrounds,
    title: "CSS3 Backgrounds 1",
    subtitle: "Exemples amb imatges planes",
    text: `background-color, background-image, background-repeat, background-attachment, background-position, background.
    vertical-align`,
  },
  {
    id: 52,
    href: `essentials/52.html`,
    category: CATEGORIES.cssbackgrounds,
    title: "CSS3 Backgrounds 2",
    subtitle: "Exemples amb imatges planes",
    text: `background-color, background-image, background-repeat, background-attachment, background-position, background.
    vertical-align`,
  },
  {
    id: 61,
    href: `essentials/61.html`,
    category: CATEGORIES.cssforms,
    title: "CSS3 Forms 1",
    subtitle: "Exemples de formularis avançats",
    text: `Styling Input Fields, Padded Inputs, Bordered Inputs, Colored Inputs, 
    Focused Inputs, Styling Textareas, Styling Select Menus, Styling Input Buttons, 
    Responsive Form`,
  },
  {
    id: 62,
    href: `essentials/62.html`,
    category: CATEGORIES.cssforms,
    title: "CSS3 Forms 2",
    subtitle: "Exemples de formularis avançats",
    text: `Styling Input Fields, Padded Inputs, Bordered Inputs, Colored Inputs, 
    Focused Inputs, Styling Textareas, Styling Select Menus, Styling Input Buttons, 
    Responsive Form`,
  },
  {
    id: 63,
    href: `essentials/63.html`,
    category: CATEGORIES.cssforms,
    title: "CSS3 Forms 3",
    subtitle: "Exemples de formularis avançats",
    text: `Styling Input Fields, Padded Inputs, Bordered Inputs, Colored Inputs, 
    Focused Inputs, Styling Textareas, Styling Select Menus, Styling Input Buttons, 
    Responsive Form`,
  },
  {
    id: 71,
    href: `essentials/71.html`,
    category: CATEGORIES.cssresponsive,
    title: "CSS3 Responsive 1",
    subtitle: "Exemples amb responsiu bàsic",
    text: `Responsive web design makes your web page look good on all devices.
    Responsive web design uses only HTML and CSS.
    Responsive web design is not a program or a JavaScript.
    Viewport: The viewport is the user's visible area of a web page`,
  },
  {
    id: 72,
    href: `essentials/72.html`,
    category: CATEGORIES.cssresponsive,
    title: "CSS3 Responsive 2",
    subtitle: "Exemples amb responsiu bàsic",
    text: `Responsive web design makes your web page look good on all devices.
    Responsive web design uses only HTML and CSS.
    Responsive web design is not a program or a JavaScript.
    Viewport: The viewport is the user's visible area of a web page`,
  },
  {
    id: 73,
    href: `essentials/73.html`,
    category: CATEGORIES.cssresponsive,
    title: "CSS3 Responsive 3",
    subtitle: "Exemples amb responsiu bàsic",
    text: `Responsive web design makes your web page look good on all devices.
    Responsive web design uses only HTML and CSS.
    Responsive web design is not a program or a JavaScript.
    Viewport: The viewport is the user's visible area of a web page`,
  },
  {
    id: 81,
    href: `essentials/81.html`,
    category: CATEGORIES.cssgrid,
    title: "CSS3 Grid 1",
    subtitle: "Exemples de grid",
    text: `CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives`,
  },
  {
    id: 82,
    href: `essentials/82.html`,
    category: CATEGORIES.cssgrid,
    title: "CSS3 Grid 2",
    subtitle: "Exemples de grid",
    text: `CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives`,
  },
  {
    id: 83,
    href: `essentials/83.html`,
    category: CATEGORIES.cssgrid,
    title: "CSS3 Grid 3",
    subtitle: "Exemples de grid",
    text: `CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives`,
  },
];
