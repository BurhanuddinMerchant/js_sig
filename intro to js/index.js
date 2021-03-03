const printInDocument = (val) => {
  let newLog = document.createElement("div");
  newLog.innerText = val;
  document.getElementById("document-console").append(newLog);
};
const printInConsole = () => {
  const consoleInput = document.getElementById("console-input");
  const val = consoleInput.value;
  if (val) {
    let newLog = document.createElement("div");
    newLog.innerText = val;
    document.getElementById("document-console").append(newLog);
    consoleInput.value = "";
  }
};
let x;
var y;
const j = 10;
// this is comment
// Siddhesh
/*
//Om
this 
is 
a 
multiline 
comment
*/

//console
console.log("hello");

// interesting logs
console.log(console);
console.log(window);
console.log(document.getElementsByTagName("html"));
// what is typeof

x = 10;

console.log(typeof x);
x = 10.5;
console.log(typeof x);
x = "hello";
console.log(typeof x);
x = {};
console.log(typeof x);
x = [];
console.log(typeof x);
//operators

console.log(5 + 6);
console.log(5 - 6);
console.log(5 * 6);
console.log(5 / 6);

y = 9;
y += 3;
y -= 3;
y *= 3;
y /= 3;
y++;
y--;

if ("54" == 54) {
  console.log("Questionable");
}
if ("54" === 54) {
  console.log("eh");
} else {
  console.log("Solid");
}
if ("hello" && true) {
}
if (false || true) {
  console.log("hello");
}

// fun activities
console.log(10 + 5);
console.log("10" + 5);
console.log("10" * 5);

x = ["1", 2, [], {}, "hello"];

// list for each
console.log(
  "forEach() returns : ",
  x.forEach((y) => {
    console.log(y);
    return y;
  })
);

// list map
console.log(
  "map() returns : ",
  x.map((y) => {
    console.log(y);
    // printInDocument(y);
    return y;
  })
);

// forEach() doesn't return anything , map() returns a new list

// functions

// standard function
function helloworld(params) {
  console.log(params);
}

// lambda function
const lambda = (params) => {
  console.log(params);
};

helloworld("hello");
lambda("lambda");

helloworld(lambda);

console.log(typeof lambda);
console.log(typeof helloworld);

// loops
z = { one: 1, two: 2, three: 3 };

for (let i = 0; i < 5; i++) {
  console.log(i);
  console.error("heyy");
  console.warn("heyy");
}

for (const j in z) {
  console.log(j);
}

for (const j of x) {
  console.log(j);
}

for (const j in x) {
  console.log(j);
}

let i = 5;
while (i > 0) {
  console.log("hello");
  i--;
}

for (const i of "word") {
  console.log(i);
}

let toBeSorted = [5, 4, 3, 2, 1];
console.log(toBeSorted.sort());
console.log(toBeSorted);
