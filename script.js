//  øvelse 1    //
/* let længde = 3;
let bredde = 50;
let areal = længde * bredde;
let resultat =
  "længden er " +
  længde +
  "meter og bredden er " +
  bredde +
  " meter. Arealet er " +
  areal;
console.log(resultat);

//  øvelse 2    //
if (areal < 100) {
  console.log("arealet er for lille ");
} else if (areal < 200) {
  console.log("arealet er ok");
} else {
  console.log("arealet er for stort");
} */

//  øvelse 3    //
/* document.querySelector("button").addEventListener("click", buttonclicked);
function buttonclicked() {
  let brugernavn = document.querySelector("#navn").value;
  console.log("goddag " + brugernavn);
} */
//  øvelse 4    //
/* let længde = document.querySelector("#længde").value;
let bredde = document.querySelector("#bredde").value;
let areal = længde * bredde;
let resultat =
  " længden er " +
  længde +
  " meter og bredden er " +
  bredde +
  " meter. Arealet er " +
  areal;
console.log(resultat);
document.querySelector("button").addEventListener("click", buttonclicked);
function buttonclicked() {} */

//  øvelse 5  //
document.querySelector("button").addEventListener("click", buttonclicked);
function buttonclicked() {
  let længde = document.querySelector("#længde").value;
  let bredde = document.querySelector("#bredde").value;
  let areal = længde * bredde;
  let resultat =
    " længden er " +
    længde +
    " meter og bredden er " +
    bredde +
    " meter. Arealet er " +
    areal;

  console.log(resultat);
}

function areal(l, b) {
  return l * b;
}
