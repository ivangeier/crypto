const userInput = document.getElementById("userInput");
const cryptType = document.getElementById("cryptType");
const incrementDiv = document.getElementById("incrementDiv");
const increment = document.getElementById("cesarKey");
const coderSelector = document.getElementById("coderSelector");
const encode = document.getElementById("encode");
const btnEncodeDecode = document.getElementById("btnEncodeDecode");
const result = document.getElementById("result");

cryptType.addEventListener("change", function () {
  if (cryptType.selectedIndex) {
    incrementDiv.style.display = "none";
  } else {
    incrementDiv.style.display = "flex";
  }
});

coderSelector.addEventListener("click", function () {
  checkCodeDecode();
});

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

function checkCodeDecode() {
  if (encode.checked == true) {
    btnEncodeDecode.value = "Codificar mensagem";
  } else {
    btnEncodeDecode.value = "Decodificar mensagem";
  }
}

function showResult(text) {
  result.innerHTML = text;
}

function checkCifraKey(key) {
  if (key > 0 && key < 27) {
    return true;
  } else {
    alert("Insira uma chave válida (1 até 26)!");
    return false;
  }
}

checkCodeDecode();
