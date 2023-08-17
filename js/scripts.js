function applyLuhn(number){

const numbersArray = number.split("");

if (number.length !== 16 || isNaN(number)){
    return false;
} 

let intArray = numbersArray.map(function(number) {
  return parseInt(number);
});

for (i = 1; i < intArray.length; i = i + 2) {
  intArray[i] = intArray[i] * 2;
  if (intArray[i] > 9) {
    let newNumbers = intArray[i].toString().split("");
    let newNewNumber = parseInt(newNumbers[0]) + parseInt(newNumbers[1]);
    intArray[i] = newNewNumber;
  }
}

let sum = 0;
intArray.forEach(function(number) {
  sum += number;
});

if ((sum % 10) > 0) {
  return "This card number is not valid.";
} else {
  return "This card number is valid.";
}

}
