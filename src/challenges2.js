// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = "";
  let currentCount = 0;

  if (numbers.length !== 11){
    return "Array com tamanho incorreto.";
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }

    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        currentCount += 1;
      }
    }

    if (currentCount >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    currentCount = 0;  
  
    switch (index) {
      case 0:
        phoneNumber += "(" + numbers[index];
        break;
      case 2:
        phoneNumber += ") " + numbers[index];
        break;
      case 7:
        phoneNumber += "-" + numbers[index];
        break;
      default:
        phoneNumber += numbers[index];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) && (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB));
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
