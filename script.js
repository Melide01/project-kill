const container = document.getElementById('container');
const idpannel = document.getElementById('idpannel');
const idbtn = document.getElementById('idbtn');
const nameInput = document.getElementById('nameInput');
const navbar = document.getElementById('navbar');

var yourName = "";

function fadeOut(e) {
  container.innerHTML = `<h1>Salut ${yourName} ! </h1>Tu peux trouver ici toutes les infos sur le projet KILL, projet dont je n'ai jamais encore parler. Tu peux cliquer sur les boutons en haut à droite afin de naviguer à travers les catégories!
<br><br>
PROJECT KILL est un projet de jeu vidéo narratif sur le genre des Thriller.
`;
  e.style.animation = "";
  e.style.animation = "fadeOut 1s forwards";
  
  setTimeout(() => {
    e.style.display = "none";
  }, 1000);
}


var target = "";

function transitionPage(e) {
  var str = container.innerHTML;
  
  if (str.length !==0) {
    navbar.style.display = "none";
    for(let i=0; i<4; i++) {
      const rand = Math.floor(Math.random() * str.length);
      str = str.substring(0, -1);
    }
    
    container.innerHTML = str;
    setTimeout(() => {
      requestAnimationFrame(transitionPage);
    }, 100);
  } else {
    container.innerHTML = window[target];
    target = "";
    navbar.style.display = "flex";
  }
}

const btns = document.querySelectorAll('input[type="button"]');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    target = btn.dataset.win;
    transitionPage();
  });
});