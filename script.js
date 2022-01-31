//øvelse 1 og 2//
/* let længde = 3;
let bredde = 50;
let areal = længde * bredde;
let resultat;

if (areal < 100) {
  console.log("arealet er for lille ");
} else if (areal < 200) {
  console.log("arealet er ok");
} else {
  console.log("arealet er for stort");
} */
//øvelse 3//
document.querySelector("button").addEventListener("click", buttonclicked);
function buttonclicked() {
  let brugernavn = document.querySelector("#navn").value;
  console.log("goddag " + brugernavn);
}
