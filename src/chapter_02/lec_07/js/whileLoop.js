let textWhileLoop = "";
let i = 0;
while (i < 5) {
  textWhileLoop += "The number is " + i + "<br />";
  i++;
}
document.getElementById("while-loop").innerHTML = textWhileLoop;
