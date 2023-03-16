let total = 0;
for (let i = 0; i < 6; i++) {
  let roll = Math.floor(Math.random() * 6) + 1;
  total += roll;
  console.log("Dobbelsteen " + (i + 1) + ": " + roll);
}
console.log("Total: " + total);

function printName(){
  let name = document.getElementById("naam").value;
let lastName = document.getElementById("achternaam").value;
  console.log("Name: "+name+" Last name: "+ lastName);
}