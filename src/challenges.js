// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(nameList) {
  return nameList[nameList.length -1] + ', ' + nameList[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numberList) {
  let higherNumber = numberList[0];
  let higherNumberCounter = 1;
  for (let index = 1; index < numberList.length; index += 1) {
    if (numberList[index] > higherNumber) {
      higherNumber = numberList[index];
      higherNumberCounter = 1;
    } else if (numberList[index] === higherNumber) {
      higherNumberCounter += 1;
    }
  }
  return higherNumberCounter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
