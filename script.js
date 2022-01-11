"use strict";
// var kaina = prompt("Įveskite prekės kainą: ");
// var pristatymoKaina = 5;
// var pristatymas = confirm("Ar reikalingas pristatymas į namus? (taip/ne) ");

// if (pristatymas == true) {
//   var miestas = prompt("Į kurį miestą reiks pristatyti? ");
//   console.log("Prekes kaina: " + kaina + "€");
//   console.log("Pristatymo kaina: " + pristatymoKaina + "€");
//   console.log("Is viso: " + (Number(kaina) + pristatymoKaina) + "€");
//   console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.");
// } else {
//   console.log("Prekes kaina " + kaina + "€");
//   console.log(
//     "Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a"
//   );
// }

var kaina = prompt("Įveskite prekės kainą: ");
var pristatymoKaina = 5;
var pristatymas = confirm("Ar reikalingas pristatymas į namus? (taip/ne) ");
let condition = false;

do {
  if (pristatymas == true) {
    var miestas = prompt("Į kurį miestą reiks pristatyti? ");
    condition = false;
    console.log("Prekes kaina: " + kaina + "€");
    console.log("Pristatymo kaina: " + pristatymoKaina + "€");
    console.log("Is viso: " + (Number(kaina) + pristatymoKaina) + "€");
    console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.");
  } else {
    condition = true;
    console.log("Prekes kaina " + kaina + "€");
    console.log(
      "Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a"
    );
  }
} while ((condition = false));
