"use strict";

const fesGrid = () => {
  //neteja
  let main = document.getElementById("main");
  let section,
    a,
    h1,
    num,
    h2,
    p = null;
  let randomColor,
    color = 0;
  let perCent = 100;
  let cat = "";

  //per cada element arra
  ESSENTIALS.forEach((el) => {
    //create
    section = document.createElement("section");

    a = document.createElement("a");
    a.setAttribute("href", el.href);

    num = document.createElement("p");
    num.setAttribute("class", 'num');
    num.innerHTML = el.id

    h1 = document.createElement("h1");
    h1.innerHTML = el.title;

    h2 = document.createElement("h2");
    h2.innerHTML = el.subtitle;

    //per escapar HTML
    p = document.createElement("p");
    p.appendChild(document.createTextNode(el.text));

    //estil box
    //randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    //gold = rgb(255 215 0) = rgb(255 215 0 / 0%);

    //section.style.backgroundColor = randomColor;
    //section.style.backgroundColor = `rgb(255 215 ${color += 30})`;

    //si canvia categoria, inicialitzem transperència
    if (cat !== el.categorty) {
      cat = el.categorty;
      perCent = 100;
    }

    section.style.backgroundColor = `rgb(${
      el.categorty.color
    } / ${(perCent -= 8)}%)`;

    //append
    section.appendChild(a);
    a.appendChild(num);
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
