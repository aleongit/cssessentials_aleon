"use strict";

const fesGrid = () => {
  //neteja
  let main = document.getElementById("main");
  let section,
    a,
    h1,
    h2,
    p = null;

  //per cada element arra

  ESSENTIALS.forEach((el) => {
    //create
    section = document.createElement("section");

    a = document.createElement("a");
    a.setAttribute("href", el.href);

    h1 = document.createElement("h1");
    h1.innerHTML = el.title;

    h2 = document.createElement("h2");
    h2.innerHTML = el.subtitle;

    //per escapar HTML
    p = document.createElement("p");
    p.appendChild(document.createTextNode(el.text));

    //append
    section.appendChild(a);
    a.appendChild(h1);
    a.appendChild(h2);
    a.appendChild(p);
    main.appendChild(section);
  });
};

//inicial càrrega pàgina
window.addEventListener("load", function () {
  console.log("DOM ready!");
  fesGrid();
});
