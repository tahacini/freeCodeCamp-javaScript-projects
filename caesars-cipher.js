function rot13(str) {
  // Splits the word by each letter
  const word = str.split("");
  // Rot13 object for decoding
  const rot13 = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  };
  for (let i = 0; i < word.length; i++) {
    // Replace the letter with its equivalent in the object.
    if (word[i] in rot13) {
      word[i] = rot13[word[i]];
    }
  }
  // Join the letters and return it.
  return word.join("");
}

rot13("SERR PBQR PNZC");
