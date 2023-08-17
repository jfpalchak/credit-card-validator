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
} else
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

Test 4: "Create new array and verify the length is 16 numbers"
Code: 
Expected Output:
