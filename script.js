"use strict";

const scenes = {
  classCSS: document.querySelectorAll(".scene"),
};

const scene0 = document.querySelector(".scene--0");
const scene1 = document.querySelector(".scene--1");
const scene2 = document.querySelector(".scene--2");
const scene3 = document.querySelector(".scene--3");
const scene4 = document.querySelector(".scene--4");
const scene5 = document.querySelector(".scene--5");
const scene6 = document.querySelector(".scene--6");
const scene7 = document.querySelector(".scene--7");
const scene8 = document.querySelector(".scene--8");
const scene9 = document.querySelector(".scene--9");
const scene10 = document.querySelector(".scene--10");
const scene11 = document.querySelector(".scene--11");
const scene12 = document.querySelector(".scene--12");
const scene13 = document.querySelector(".scene--13");
const scene14 = document.querySelector(".scene--14");
const scene15 = document.querySelector(".scene--15");
const scene16 = document.querySelector(".scene--16");
const scene17 = document.querySelector(".scene--17");
const scene18 = document.querySelector(".scene--18");
const scene19 = document.querySelector(".scene--19");
const scene20 = document.querySelector(".scene--20");
const scene21 = document.querySelector(".scene--21");
const scene22 = document.querySelector(".scene--22");
const scene23 = document.querySelector(".scene--23");
const scene24 = document.querySelector(".scene--24");
const scene25 = document.querySelector(".scene--25");
const scene26 = document.querySelector(".scene--26");
const scene27 = document.querySelector(".scene--27");
const scene28 = document.querySelector(".scene--28");
const scene29 = document.querySelector(".scene--29");
const scene30 = document.querySelector(".scene--30");
const scene31 = document.querySelector(".scene--31");
const scene32 = document.querySelector(".scene--32");
const scene33 = document.querySelector(".scene--33");
const scene34 = document.querySelector(".scene--34");
const scene35 = document.querySelector(".scene--35");
const scene36 = document.querySelector(".scene--36");
const scene37 = document.querySelector(".scene--37");
const scene38 = document.querySelector(".scene--38");
const scene39 = document.querySelector(".scene--39");
const scene40 = document.querySelector(".scene--40");

//CHARACTER OBJECTS
//Originally, I tried to create scene arrays, with a view to creating functions that would dynamically
//select the scenes a character is in to remove them... However, I couldn' figure out how to achieve this.
//In the end, I just hardcoded a list of scenes for each character which get a hidden class toggled on them
//using an eventListener.

const lonny = {
  scenes: [0, 2, 4, 6, 10, 12],
  // sceneClasses: sceneList(this.scenes),
  classCSS: document.querySelector(".lonny"),
};

const drew = {
  scenes: [0, 2, 4, 7, 10, 11, 12],
  classCSS: document.querySelector(".drew"),
};

const sherrie = {
  scenes: [1, 2, 7, 10, 11, 12],
  classCSS: document.querySelector(".sherrie"),
};

const dennis = {
  scenes: [1, 2, 7, 10, 11, 12],
  classCSS: document.querySelector(".dennis"),
};
const hertz = {
  scenes: [3, 5, 6, 9],
  classCSS: document.querySelector(".hertz"),
};
const franz = {
  scenes: [3, 6, 9],
  classCSS: document.querySelector(".franz"),
};
const anita = {
  scenes: [3, 5, 8],
  classCSS: document.querySelector(".anita"),
};
const mayor = {
  scenes: [3, 5, 6],
  classCSS: document.querySelector(".mayor"),
};
const stacee = {
  scenes: [6, 12],
  classCSS: document.querySelector(".stacee"),
};
const justice = {
  scenes: [],
  classCSS: document.querySelector(".justice"),
};
const jakeith = {
  scenes: [1, 2, 7, 10, 11, 12],
  classCSS: document.querySelector(".jakeith"),
};
const joey = {
  scenes: [1, 2, 7, 10, 11, 12],
  classCSS: document.querySelector(".joey"),
};
const fathermother = {
  scenes: [1, 2, 7, 10, 11, 12],
  classCSS: document.querySelector(".fathermother"),
};

//EVENT LISTENERS
//
lonny.classCSS.addEventListener("click", function () {
  lonny.classCSS.classList.toggle("btn--clicked");
  scene0.classList.toggle("lonny-hidden");
  scene2.classList.toggle("lonny-hidden");
  scene4.classList.toggle("lonny-hidden");
  scene6.classList.toggle("lonny-hidden");
  scene10.classList.toggle("lonny-hidden");
  scene12.classList.toggle("lonny-hidden");
  scene14.classList.toggle("lonny-hidden");
  scene16.classList.toggle("lonny-hidden");
  scene18.classList.toggle("lonny-hidden");
  scene21.classList.toggle("lonny-hidden");
  scene22.classList.toggle("lonny-hidden");
  scene26.classList.toggle("lonny-hidden");
  scene29.classList.toggle("lonny-hidden");
  scene32.classList.toggle("lonny-hidden");
  scene36.classList.toggle("lonny-hidden");
  scene39.classList.toggle("lonny-hidden");
  scene40.classList.toggle("lonny-hidden");
});

drew.classCSS.addEventListener("click", function () {
  drew.classCSS.classList.toggle("btn--clicked");
  scene0.classList.toggle("drew-hidden");
  scene2.classList.toggle("drew-hidden");
  scene4.classList.toggle("drew-hidden");
  scene7.classList.toggle("drew-hidden");
  scene10.classList.toggle("drew-hidden");
  scene11.classList.toggle("drew-hidden");
  scene12.classList.toggle("drew-hidden");
  scene14.classList.toggle("drew-hidden");
  scene16.classList.toggle("drew-hidden");
  scene18.classList.toggle("drew-hidden");
  scene20.classList.toggle("drew-hidden");
  scene25.classList.toggle("drew-hidden");
  scene27.classList.toggle("drew-hidden");
  scene28.classList.toggle("drew-hidden");
  scene30.classList.toggle("drew-hidden");
  scene35.classList.toggle("drew-hidden");
  scene36.classList.toggle("drew-hidden");
  scene38.classList.toggle("drew-hidden");
  scene40.classList.toggle("drew-hidden");
});

sherrie.classCSS.addEventListener("click", function () {
  sherrie.classCSS.classList.toggle("btn--clicked");
  scene1.classList.toggle("sherrie-hidden");
  scene2.classList.toggle("sherrie-hidden");
  scene7.classList.toggle("sherrie-hidden");
  scene10.classList.toggle("sherrie-hidden");
  scene11.classList.toggle("sherrie-hidden");
  scene12.classList.toggle("sherrie-hidden");
  scene14.classList.toggle("sherrie-hidden");
  scene15.classList.toggle("sherrie-hidden");
  scene16.classList.toggle("sherrie-hidden");
  scene20.classList.toggle("sherrie-hidden");
  scene21.classList.toggle("sherrie-hidden");
  scene24.classList.toggle("sherrie-hidden");
  scene25.classList.toggle("sherrie-hidden");
  scene28.classList.toggle("sherrie-hidden");
  scene30.classList.toggle("sherrie-hidden");
  scene33.classList.toggle("sherrie-hidden");
  scene38.classList.toggle("sherrie-hidden");
  scene40.classList.toggle("sherrie-hidden");
});

dennis.classCSS.addEventListener("click", function () {
  dennis.classCSS.classList.toggle("btn--clicked");
  scene0.classList.toggle("dennis-hidden");
  scene2.classList.toggle("dennis-hidden");
  scene4.classList.toggle("dennis-hidden");
  scene6.classList.toggle("dennis-hidden");
  scene9.classList.toggle("dennis-hidden");
  scene10.classList.toggle("dennis-hidden");
  scene16.classList.toggle("dennis-hidden");
  scene19.classList.toggle("dennis-hidden");
  scene26.classList.toggle("dennis-hidden");
  scene32.classList.toggle("dennis-hidden");
  scene39.classList.toggle("dennis-hidden");
  scene40.classList.toggle("dennis-hidden");
});

hertz.classCSS.addEventListener("click", function () {
  hertz.classCSS.classList.toggle("btn--clicked");
  scene3.classList.toggle("hertz-hidden");
  scene5.classList.toggle("hertz-hidden");
  scene6.classList.toggle("hertz-hidden");
  scene9.classList.toggle("hertz-hidden");
  scene17.classList.toggle("hertz-hidden");
  scene19.classList.toggle("hertz-hidden");
  scene26.classList.toggle("hertz-hidden");
  scene31.classList.toggle("hertz-hidden");
  scene37.classList.toggle("hertz-hidden");
  scene39.classList.toggle("hertz-hidden");
});

franz.classCSS.addEventListener("click", function () {
  franz.classCSS.classList.toggle("btn--clicked");
  scene3.classList.toggle("franz-hidden");
  scene5.classList.toggle("franz-hidden");
  scene6.classList.toggle("franz-hidden");
  scene9.classList.toggle("franz-hidden");
  scene17.classList.toggle("franz-hidden");
  scene19.classList.toggle("franz-hidden");
  scene26.classList.toggle("franz-hidden");
  scene31.classList.toggle("franz-hidden");
  scene34.classList.toggle("franz-hidden");
  scene35.classList.toggle("franz-hidden");
  scene39.classList.toggle("franz-hidden");
});

anita.classCSS.addEventListener("click", function () {
  anita.classCSS.classList.toggle("btn--clicked");
  scene3.classList.toggle("anita-hidden");
  scene5.classList.toggle("anita-hidden");
  scene8.classList.toggle("anita-hidden");
  scene17.classList.toggle("anita-hidden");
  scene19.classList.toggle("anita-hidden");
  scene26.classList.toggle("anita-hidden");
  scene31.classList.toggle("anita-hidden");
  scene34.classList.toggle("anita-hidden");
  scene37.classList.toggle("anita-hidden");
  scene39.classList.toggle("anita-hidden");
});

justice.classCSS.addEventListener("click", function () {
  justice.classCSS.classList.toggle("btn--clicked");
  scene21.classList.toggle("justice-hidden");
  scene24.classList.toggle("justice-hidden");
  scene25.classList.toggle("justice-hidden");
  scene30.classList.toggle("justice-hidden");
  scene33.classList.toggle("justice-hidden");
  scene35.classList.toggle("justice-hidden");
});

// Attempt to create a function to return any object's scene list:
//
// const sceneList = function (element) {
//   let elScene = [];
//   for (let i = 0; i < element.length; i++) {
//     elScene.push(`".scene--${element[i]}"`);
//   }
//   return elScene;
// };

// console.log(sceneList(lonny.scenes));
// console.log(sceneList(drew.scenes));
// console.log(sceneList(sherrie.scenes));

//I managed to print each characters scene list to the console, but I couldn't figure out how to then use them
//in a dynamic classList selector... In the end, the only way I could get the functionality I wanted was by
//creating the scene classLists you see above.
