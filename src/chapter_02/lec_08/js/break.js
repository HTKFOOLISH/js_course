// Break Example
let breakText = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  breakText += `text ${i} ${"<br>"}`;
}

document.getElementById("break").innerHTML = breakText;
