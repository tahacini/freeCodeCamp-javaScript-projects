function palindrome(str) {
  // Lowercase the string and match only alphanumeric characters.
  let word = str.toLowerCase().match(/[A-Za-z0-9]/gi);
  // Copy the string with slice() so it doesn't change the original and reverse it to compare.
  let reversedWord = word.slice().reverse();
  console.log(word);
  console.log(reversedWord);
  // Compare every letter, return false if there is a difference
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== reversedWord[i]) {
      return false;
    }
  }
  // Otherwise true
  return true;
}

console.log(palindrome("eye"));
