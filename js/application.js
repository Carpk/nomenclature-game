
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(cards.length));
}

function getCompoundArray(formula) {
  return formula.match(/[A-Z][a-z]?/g);
}

function displayAnswer(userInput) {
  document.getElementById("correctAnswer").innerHTML = card.formula + ": " + card.name + " - " + userInput
}

