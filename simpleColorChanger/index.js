// purple color
let state1 = "#892cdc";
let state2 = "#e88a1a";
// yellow color
let body = document.body;
let header = document.getElementById("header");

// function
function changeColor() {
  const temp = state1;
  state1 = state2;
  state2 = temp;
  body.style["background"] = state1;
  header.style["background"] = state2;
}

document.onclick = changeColor;
