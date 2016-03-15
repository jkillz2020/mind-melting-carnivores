"use strict"

let Predator = (function () {
  let carnivores = [];
  let herbivores = [];


  return {
    loadCarnivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json")//tell loader where to go
      loader.send();//execute loader
      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivores;
        
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores);
      });
    
  
},

    loadHerbivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json");
      loader.send();
      loader.addEventListener("load", function() {
        herbivores = JSON.parse(this.responseText).herbivores;

        callbackToInvoke(herbivores);
      });
    }
}
})();
