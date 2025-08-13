let doWhileLoopText = "";
let k = 0;

do {
  doWhileLoopText += "The number is " + k + "<br />";
  k++;
} while (k < 5);

document.getElementById("do-while-loop").innerHTML = doWhileLoopText;
