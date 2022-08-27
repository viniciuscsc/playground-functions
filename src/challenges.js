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
  return nameList[nameList.length - 1] + ', ' + nameList[0];
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
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  }
  if (distanceMouseCat1 > distanceMouseCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numberList) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numberList.length; index += 1) {
    if (numberList[index] % 3 === 0 && numberList[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (numberList[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (numberList[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
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
