let textForLoop = "";

for (let i = 0; i < 5; i++) {
  textForLoop += "The number is " + i + "<br />";
}

document.getElementById("for-loop").innerHTML = textForLoop;
