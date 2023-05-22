function enter() {
  debugger;
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  let counterOk = 0;

  //user name check
  let counter = 0;
  for (let i = 0; i < userName.length; i++) {
    if (userName.charAt(i) >= "a" && userName.charAt(i) <= "d") {
      counter++;
    }
    if (counter == 4) {
      counterOk++;
    }
  }

  //password chack

  let counterx = 0;
  for (let j = 0; j < password.length; j++) {
    if (password.charAt(j) >= "1" && password.charAt(j) <= "4") {
      counterx++;
    }
    if (counterx == 4) {
      counterOk++;
    }
  }

  //enter button
  let hello = document.getElementById("hello");
  let bey = document.getElementById("bey");
  if (counterOk == 2) {
    hello.classList.add("open-hello");
  } else if (counterOk != 2) {
    bey.classList.add("open-bey");
  }
}

let hello = document.getElementById("hello");
let bey = document.getElementById("bey");
function closePopup() {
  hello.classList.remove("open-hello");
  bey.classList.remove("open-bey");
}
