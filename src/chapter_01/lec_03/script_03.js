/* ======= Object ======= */

console.log("=".repeat(50));
console.log("Object Data Types");

// Declare an object

const id = new Object();

const person = {
  name: "HTKFoolish",
  age: 21,
  IDPerson: "0123456789",
  isStudent: true,
  address: {
    city: "Ho Chi Minh",
    district: "District Thu Duc",
    street: "Num. 6, Vo Van Ngan",
  },
  school: {
    name: "University of Education and Technology, HCMC",
    major: "Embedded Systems and IoT",
    year: 2022,
    GPA: 3.5,
  },
};

// Print out the object to the console

for (let key in person) {
  typeof person[key] !== "object"
    ? console.log(`${key}: ${person[key]}`)
    : console.log(`${key}:`);
  if (typeof person[key] !== "object") continue;
  for (let subKey in person[key]) {
    console.log(`  ${subKey}: ${person[key][subKey]}`);
  }
}

/* ======= Array ======= */

console.log("=".repeat(50));
console.log("Array Data Types");

// Declare an array
let arr = [1, 2, 3, "js", true, null];

// Print out the array to the console
arr.forEach((value, index) => {
  console.log(`arr[${index}]= ${value}`);
});

/* ======= Function ======= */

console.log("=".repeat(50));
console.log("Function Data Types");

// Function declaration
function sum(a, b) {
  return a + b;
}

console.log("Sum of 5 and 10 is: " + sum(5, 10));

// Function expression
const multiply = function (a, b) {
  return a * b;
};

console.log("Multiply of 5 and 10 is: " + multiply(5, 10));

// Arrow function
const divide = (a, b) => {
  return a / b;
};

console.log("Divide of 10 and 5 is:", divide(10, 5));

/* ======= Date ======= */

console.log("=".repeat(50));
console.log("Date Data Types");

// Declare a date object
const demo = document.getElementById("demo");

// style for time display
demo.style.textAlign = "center";
demo.style.fontSize = "2em";
demo.style.fontWeight = "bold";

// function to update time every second
function updateTime() {
  const currentTime = new Date();
  demo.innerHTML =
    currentTime.toDateString().slice(0, 3) +
    ", " +
    currentTime.toDateString().slice(3, 10) +
    ", " +
    currentTime.toDateString().slice(10) +
    "<br>" +
    currentTime.toLocaleTimeString();
}

// call the function to display the initial time
updateTime();
setInterval(updateTime, 1000); // update time per second

/* ======= Map ======= */

console.log("=".repeat(50));
console.log("Map Data Types");

const map = new Map();

map.set("name", "HTKFoolish");
map.set("age", 21);
map.set("isStudent", true);

console.log(map.get("name"));

map.set("age", 22);
console.log(map.get("age"));

console.log(map.size);

/* ======= Set ======= */

console.log("=".repeat(50));
console.log("Set Data Types");

const set = new Set([3, 1, 2]);

console.log(set);

const a_map = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);

console.log(set.union(a_map));
