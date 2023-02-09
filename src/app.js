/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card").innerHTM = random_suit();
  document.querySelector(".card").innerHTML = random_number();
};

//Suits and Values = Array
let random_suit = () => {
  let suit = ["♠", "♥", "♣", "♦"];
  let random_suit = suit[Math.floor(Math.random() * suit.length)];
  return suit[random_suit];
};

let random_number = () => {
  let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let random_number = number[Math.floor(Math.random() * number.length)];
  return number[random_number];
};
//randomly get one suit and value

//'Create the html elemet' '<h1></h1>'p

//appl the suit to indexhtml
