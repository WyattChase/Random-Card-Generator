/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var person = {
    first: "Jean",
    last: "St. Cloud",
    age: 30
  };
  var htmlElement = `<h1> Hello ${person.first} ${person.last} you are ${person.age} years old</h1>`;
  console.log(htmlElement);

  document.getElementById("hello").innerHTML = htmlElement;

  console.log();
};
