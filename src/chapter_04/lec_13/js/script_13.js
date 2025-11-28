console.log("Lecture 13: DOM event");

// 1. addEventListener() method
const btn = document.getElementById("myBtn");

if (btn === null) {
  console.error("Button not found");
}

console.log(btn);

const handleClickBtn = () => {
  console.log("Button clicked");
};

btn.addEventListener("click", handleClickBtn);

console.log("=".repeat(50));

// 2. Toggle the content in HTML tag using innerText and innerHTML
const demoInnerText = document.getElementById("demoInnerText");
const myBtn2 = document.getElementById("myBtn2");

console.log(demoInnerText.innerText, myBtn2); // Hello User, button#myBtn2.btn

let isClicked = true;
const handleClickBtn2 = () => {
  // null check
  if (demoInnerText === null) {
    console.error("demoInnerText not found");
    return;
  }

  if (myBtn2 === null) {
    console.error("Button 2 not found");
    return;
  }

  console.log("Button 2 clicked"); // print the message when clicked button 2

  // toggle text
  if (isClicked) {
    isClicked = false;
    demoInnerText.innerHTML = "Welcome to <strong>JS course</strong>!";
  } else {
    isClicked = true;
    demoInnerText.innerHTML = "Hello <strong>User</strong>";
  }
};

myBtn2.addEventListener("click", handleClickBtn2);

// 3. toggle CSS using JS
const contentTagP = document.getElementById("contentTagP");

// 3.1. style method
const btn1 = document.getElementById("btn1");
console.log(contentTagP, btn1);

isClicked = true;
btn1.addEventListener("click", () => {
  console.log("Button btn1 is clicked!");
  if (isClicked) {
    contentTagP.style.color = "red";
    contentTagP.style.backgroundColor = "yellow";
    btn1.innerText = "Click to return back!";
  } else {
    contentTagP.style.color = "black";
    contentTagP.style = "unset";
    btn1.innerText = "Click to change!";
  }
  isClicked = !isClicked;
});

// 3.2. classList
const btn2 = document.getElementById("btn2");
isClicked = true;
btn2.addEventListener("click", () => {
  console.log("Button btn2 is clicked!");
  if (isClicked) {
    contentTagP.classList.add("highlight", "change-width-height");
    btn2.innerText = "Click to return back!";
  } else {
    contentTagP.classList.remove("highlight", "change-width-height");
    btn2.innerText = "Click to change!";
  }
  isClicked = !isClicked;
});

// 3.3. <style> tag or stylesheet
// 3.3.1. Add new rule

// 3.3.2. Access an available stylesheet
