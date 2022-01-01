function palindrome(str) {
  // Lowercase the string and match only alphanumeric characters.
  let word = str.toLowerCase().match(/[A-Za-z0-9]/gi);
  // Copy the string with slice() so it doesn't change the original and reverse it to compare.
  let reversedWord = word.slice().reverse();
  console.log(word);
  console.log(reversedWord);
}

console.log(palindrome("eye"));
