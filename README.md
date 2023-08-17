from end of card number, move left
every other digit, x2
  if (digit * 2  > 9) {
    sum = digit 1 and digit 2 of (digit * 2)
    new digit = sum
  } else {
    new digit = digit*2
  }
  cardSum = sum all new digits
  if cardSum ends in 0 {
  is VALID
  }   else
    is NOT VALID 


A valid number: '4102080860435620'
An invalid number: '4102080880435620'

**Description:** applyLuhn()

Test 1: "Check if input is a number, return number as an integer if so"
Code:
  const number = "1";
  applyLuhn(number)
Expected Output: 1 

Test 2: "Check if input is not a number, return NaN"
Code:   const number = "hello";
        applyLuhn(number);
Expected Output: NaN

Test 3: "Check if we have 16 numbers, return true"
Code:   const number = "4102080860435620";
        applyLuhn(number);
Expected Output: true

Test 4: "Create new array of integers and verify the length is 16 elements"
Code:   const number = "4102080860435620";
        applyLuhn(number);
Expected Output: [4,1,0,2,...]

Test 5: "Multiply index 1 in the array and every other index after index 1."
Code: array = [1234]
      for (i = 1; i < array.length; i = i + 2)
      array[i] = array[i] * 2;
Expected Result: [1438]

Test 6: "If element in new array is double digit, then we find the sum of both digits."
Code:
const number = "4102080860435620";
        applyLuhn(number);
Expected Results: [4,2,0,4,...]

Test 7: "If credit card number is valid, all numbers of the new array should sum together and return a value that ends with 0."
Code:
        const number = "4102080860435620";
        applyLuhn(number);
Expected Output: -0



