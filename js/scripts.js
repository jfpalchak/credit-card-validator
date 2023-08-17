function applyLuhn(number){

const numbersArray = number.split("");

if (number.length !== 16 || isNaN(number)){
    return false;
} 
let intArray = numbersArray.map(function(number) {
  return parseInt(number);
});

return intArray;
}
