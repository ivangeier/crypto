const userInput = document.getElementById("userInput");
const cryptType = document.getElementById("cryptType");
const incrementDiv = document.getElementById("incrementDiv");
const increment = document.getElementById("cesarKey");
const coderSelector = document.getElementById("coderSelector");
const encode = document.getElementById("encode");
const btnEncodeDecode = document.getElementById("btnEncodeDecode");
const result = document.getElementById("result");

//When Cifra de Cesar is selected - show Increment Div. Hide when Base64 is selected
cryptType.addEventListener("change", function () {
  if (cryptType.selectedIndex) {
    incrementDiv.style.display = "none";
  } else {
    incrementDiv.style.display = "flex";
  }
});

//When Encode/Decode is selected, change Button Text (Code or Decode Message)
coderSelector.addEventListener("click", function () {
  checkCodeDecode();
});

//When Button Encode/Decode is trigger - Call function to process text
btnEncodeDecode.addEventListener("click", (e) => {
  e.preventDefault();

  if (encode.checked == true && cryptType.selectedIndex == 0) {
    if (checkCifraKey(increment.value)) {
      encodeCifra(userInput.value, increment.value);
    }
  } else if (encode.checked == false && cryptType.selectedIndex == 0) {
    if (checkCifraKey(increment.value)) {
      decodeCifra(userInput.value, increment.value);
    }
  } else if (encode.checked == true && cryptType.selectedIndex == 1) {
    encodeBase64(userInput.value);
  } else {
    decodeBase64(userInput.value);
  }
});

//Check if Encode or Decode is selected and change button text.
function checkCodeDecode() {
  if (encode.checked == true) {
    btnEncodeDecode.value = "Codificar mensagem";
  } else {
    btnEncodeDecode.value = "Decodificar mensagem";
  }
}

//Add result on screen
function showResult(text) {
  result.innerHTML = text;
}

//Check if Cifra de Cesar key is between 1 and 26.
function checkCifraKey(key) {
  if (key > 0 && key < 27) {
    return true;
  } else {
    alert("Insira uma chave válida (1 até 26)!");
    return false;
  }
}

checkCodeDecode();
