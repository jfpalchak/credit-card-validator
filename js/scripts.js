function applyLuhn(number){

// const number = number;
const numberInt = parseInt(number);
const numbersArray = number.split("");


if (number.length !== 16 || isNaN(number)){
    return false;
} 
let intArray = numbersArray.map(function(number) {
  return parseInt(number);
});

return intArray;
}


// numbersArray.forEach(function(element)){