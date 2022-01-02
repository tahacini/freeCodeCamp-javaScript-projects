function telephoneCheck(str) {
  // This regex selects the valid US numbers and return true||false.
  const regex = /^(1\s*)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/gm;
  return regex.test(str);
}

telephoneCheck("(555)555-5555");
