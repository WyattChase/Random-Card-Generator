/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".top-suit").innerHTML = random_top_suit;
  document.querySelector(".bottom-suit").innerHTML = random_top_suit;
  document.querySelector(".number").innerHTML = random_number();
  console.log(random_number());
  console.log(random_suit());
  if (random_top_suit == "♥" || random_top_suit == "♦") {
    document.querySelector(".container-fluid").style.color = "red";
  }
};

//Suits and Values = Array //randomly get one suit and value
let random_suit = () => {
  let suit = ["♠", "♥", "♣", "♦"];
  let random_suit = Math.floor(Math.random() * suit.length);
  return suit[random_suit];
};

let random_number = () => {
  let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let random_number = Math.floor(Math.random() * number.length);
  return number[random_number];
};

let random_top_suit = random_suit();

const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
//'Create the html elemet' '<h1></h1>'

//apply the suit to indexhtml
