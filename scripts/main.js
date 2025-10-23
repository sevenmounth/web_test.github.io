// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

/*
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Aww, but chocolate is my favorite...");
}
*/



const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/quectel1.png") {
    myImage.setAttribute("src", "images/quectel2.png");
  } else {
    myImage.setAttribute("src", "images/quectel1.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/*
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Quectel is cool, ${myName}`;
}
*/
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Quectel is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};