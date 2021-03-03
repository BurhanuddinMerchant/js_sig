let condition = false;
let condition2 = true;

if (condition) {
  console.log("true");
} else if (condition2) {
  console.log("other condition true");
} else {
  console.log("all conditions false");
}

x = "c";
switch (x) {
  case "a": {
    console.log("answer a");
    break;
  }
  case "b": {
    console.log("answer b");
    break;
  }
  case "c": {
    console.log("answer c");
    break;
  }
  case "d": {
    console.log("answer d");
    break;
  }
  default: {
    console.log("default");
  }
}

if (1 == "1" && "hello" != 65) {
  console.log("both true");
} else {
  console.log("any one is false");
}

if ("mello" === "mello" || 5 === 10) {
  console.log("any one true");
} else {
  console.log("none true");
}
