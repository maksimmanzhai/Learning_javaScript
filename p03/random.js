var first = 0;

var max = +prompt("Enter max number", '');

function random(a, b){
  return Math.floor(Math.random() * (b - a)) + a;
}

alert("Random number: " + random(first, max));
