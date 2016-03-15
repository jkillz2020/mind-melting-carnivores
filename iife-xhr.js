"use strict"
let list = document.getElementById("carnivore-list");


function showCarnivores (carnivores) {
  for(let i = 0; i < carnivores.length; i++){
    let currentCarnivore = carnivores[i];
  

let outputString = ""
outputString += `<h1>${currentCarnivore.name}</h1>
<h5>${currentCarnivore.family}</h5>`;
list.innerHTML += outputString;
  }
}
function showHerbivores (herbivores) {
  for(let i = 0; i < herbivores.length; i++){
    let currentHerbivore = herbivores[i];
  

let outputString = ""
outputString += `<h1>${currentHerbivore.name}</h1>
<h5>${currentHerbivore.family}</h5>`;
list.innerHTML += outputString;
  }
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);