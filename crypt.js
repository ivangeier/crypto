function encodeCifra(text, key) {
  let encodedText = "";
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    //if string is a letter (a-z) shift to new letter based on secret key
    if (/[a-z]/.test(text[i])) {
      let charChanged = (text.charCodeAt(i) - (96 - key)) % 26;
      charChanged = charChanged == 0 ? 26 : charChanged;
      encodedText += String.fromCharCode(charChanged + 96);
    } else {
      //if is not a letter (a-z) add to the text
      encodedText += text[i];
    }
  }
  showResult(encodedText);
}

function decodeCifra(text, key) {
  let decodedText = "";
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (/[a-z]/.test(text[i])) {
      var charChanged = (text.charCodeAt(i) - (96 + key)) % 26;
      charChanged = charChanged == 0 ? 26 : charChanged;
      decodedText += String.fromCharCode(charChanged + 96);
    } else {
      decodedText += text[i];
    }
  }
  showResult(decodedText);
}

function encodeBase64(text) {
  showResult(btoa(text));
}

function decodeBase64(text) {
  showResult(atob(text));
}
