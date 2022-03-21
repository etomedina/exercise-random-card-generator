/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let NumberSuit = ["♦", "♥", "♠", "♣"];
  let NumberCard = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  let random1 = Math.floor(Math.random() * NumberSuit.length);
  let random2 = Math.floor(Math.random() * NumberCard.length);

  let pinta1 = NumberSuit[random1];
  let valor = NumberCard[random2];
  let pinta2 = pinta1;

  console.log(pinta1);
  console.log(valor);

  document.querySelector("#suit1").innerHTML = pinta1;
  document.querySelector("#card").innerHTML = valor;
  document.querySelector("#suit2").innerHTML = pinta2;
};
