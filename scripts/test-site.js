`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});
*/

const myHeading = $$(`h1`);
myHeading.textContent = `Hello world!`;

/*
let iceCream = `chocolate`;
if(iceCream === `chocolate`) {
  alert(`Yay, I love chocolate ice cream!`);
} else {
  alert(`Awwww, but chocolate is my favorite...`);
}
*/

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(4, 7), multiply(20, 20), multiply(0.5, 3));

myHeading.addEventListener(`click`, () => {
  alert(`Ouch! Stop poking me!`);
});

/* Same as:
document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

OR:

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});
*/

let myImage = $$(`img`);

myImage.onclick = function() {
  let mySrc = myImage.getAttribute(`src`);
  if(mySrc === `https://upload.wikimedia.org/wikipedia/commons/5/5c/Mozilla_dinosaur_head_logo.png`) {
    myImage.setAttribute(`src`,`https://logos-world.net/wp-content/uploads/2021/08/Mozilla-Phoenix-Firebird-Logo-2002-2004.png`);
  } else {
    myImage.setAttribute(`src`,`https://upload.wikimedia.org/wikipedia/commons/5/5c/Mozilla_dinosaur_head_logo.png`);
  }
}

let myButton = $$(`button`);

/*
function setUserName() {
  let myName = prompt(`Please enter your name.`);
  localStorage.setItem(`name`, myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
} 

UPDATED TO THIS:*/

function setUserName() {
  let myName = prompt(`Please enter your name.`);
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem(`name`, myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem(`name`)) {
  setUserName();
} else {
  let storedName = localStorage.getItem(`name`);
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}