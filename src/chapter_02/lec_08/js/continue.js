// Continue Example
let continueText = "";

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  continueText += `text ${i} ${"<br>"}`;
}

document.getElementById("continue").innerHTML = continueText;
