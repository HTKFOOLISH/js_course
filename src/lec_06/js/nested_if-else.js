let weather = "sunny";
let temp = 25;

if (weather === "sunny") {
  if (temp > 30) {
    console.log("It's a hot day!");
  } else if (temp > 20) {
    console.log("It's a warm day.");
  } else {
    console.log("It's a bit cool today.");
  }
} else if (weather === "rainy") {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Check the weather forecast!");
}
