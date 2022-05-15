let input1El = document.getElementById("input1");
let input2El = document.getElementById("input2");
let input3El = document.getElementById("input3");
let input4El = document.getElementById("input4");
let passwordLength = document.getElementById("password-limit");
let dividerEl = document.querySelector(".divider-container");

let characterArray = [];

for (let i = 33; i < 127; i++) {
  characterArray.push(String.fromCharCode(i));
}

function generatePasswords() {
  let a, b, c, d;
  input1El.value = "";
  input2El.value = "";
  input3El.value = "";
  input4El.value = "";
  if (passwordLength.value === "") {
    dividerEl.textContent = "Enter the length of the passwords above";
  } else if (passwordLength.value < 6 || passwordLength.value >= 12) {
    dividerEl.textContent = "Password length should be between from 6 to 12";
  } else {
    dividerEl.textContent = "";
  }
  for (let i = 0; i < passwordLength.value; i++) {
    if (passwordLength.value < 6 || passwordLength.value >= 12) {
      return;
    }
    a = Math.floor(Math.random() * 94);
    b = Math.floor(Math.random() * 94);
    c = Math.floor(Math.random() * 94);
    d = Math.floor(Math.random() * 94);

    input1El.value += characterArray[a];
    input2El.value += characterArray[b];
    input3El.value += characterArray[c];
    input4El.value += characterArray[d];
  }
}
