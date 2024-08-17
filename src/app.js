import "bootstrap";
import "./style.css";

let palos = {
  corazon: "♥",
  diamante: "♦",
  trebol: "♣",
  pica: "♠"
};

let valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let paloSuperior = document.querySelector("#paloSuperior");
let numero = document.querySelector("#numero");
let paloInferior = document.querySelector("#paloInferior");

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function asignarEstilo([palo]) {
  let color = palo === "corazon" || palo === "diamante" ? "red" : "black";
  paloSuperior.style.color = color;
  numero.style.color = color;
  paloInferior.style.color = color;
}

function asignarPalo([palo]) {
  paloSuperior.innerHTML = palos[palo];
  paloInferior.innerHTML = palos[palo];
}

function asignarValor([, valor]) {
  numero.innerHTML = valor;
}

function generacionCarta() {
  let carta = [getRandomElement(Object.keys(palos)), getRandomElement(valores)];
  asignarEstilo(carta);
  asignarPalo(carta);
  asignarValor(carta);
}

document
  .querySelector("#buttonGenerator")
  .addEventListener("click", generacionCarta);

window.onload = generacionCarta;
