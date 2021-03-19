/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let card = document.querySelector(".card");
  let item = document.querySelectorAll("h1")[0];
  let rank = document.querySelector(".rank");

  let suit = ["heart", "diamond", "spade", "club"];
  let cardrank = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "<img src='https://cdn2.vectorstock.com/i/thumb-large/42/81/black-and-white-skull-in-crown-vector-14804281.jpg' alt='' width='300' height='300'>",
    "<img src='https://cdn3.vectorstock.com/i/thumb-large/62/77/black-silhouette-queen-death-portrait-vector-36186277.jpg' alt='' width='300' height='300'>",
    "<img src='https://media.gettyimages.com/vectors/poker-card-jack-vector-id97701843' alt='' width='300' height='300'>",
    "<img src='https://st2.depositphotos.com/5090295/10160/v/600/depositphotos_101604354-stock-illustration-ace-of-spades.jpg' alt='' width='300' height='300'>"
  ];
  card.classList.add(suit[getRndInteger(0, suit.length - 1)]);
  rank.innerHTML = cardrank[getRndInteger(0, cardrank.length - 1)];
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
