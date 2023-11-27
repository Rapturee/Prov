// 1. Booleans (3p)
// Skriv en funktion howFast som tar en siffra som input och
// returner följande sträng:
// "Fast" om siffran är högre eller lika med 100
// "Slow" om siffran är lägre eller lika med 20
// "Medium" om siffran är 30 till och med 50
// "Unknown" om inget av ovan stämmer

function howFast(number) {
  let fast = number >= 100;
  let slow = number <= 20
  let medium = number > 30 && number < 50;
  
  if(fast) {
    console.log(`The number is ${fast} fast`);
  }
  if(slow) {
    console.log(`The number is ${slow} fast`);
  }
  if(medium) {
    console.log(`The number is ${medium} fast`);
  } else {
    console.log(`Unknown`);
  }
}

console.log(howFast(20)); // Ska logga "Slow"
console.log(howFast(50)); // Ska logga "Medium"
console.log(howFast(100)); // Ska logga "Fast"
console.log(howFast(25)); // Ska logga "Unknown"
