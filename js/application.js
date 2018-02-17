

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(cards.length));
}

function getNewCard() {
  card = cards[getRandomInt()]
  document.getElementById("formula").innerHTML = card.formula
}