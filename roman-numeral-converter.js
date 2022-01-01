function convertToRoman(num) {
  // Basically we have two array containing the main roman numbers and its numerical values.
  const romanValue = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNum = "";

  // Loop through main roman numbers.
  for (let i = 0; i < value.length; i++) {
    // While Loop will search till find a number smaller than the 'num'.
    while (num >= value[i]) {
      // Then subtract the value[i] from the 'num'
      num -= value[i];
      // Then add the equivalent of the Roman Number to romanNum.
      romanNum += romanValue[i];
    }
  }
  // Return the final result.
  return romanNum;
}

convertToRoman(36);
