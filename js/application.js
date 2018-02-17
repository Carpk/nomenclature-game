
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(cards.length));
}

function getCompoundArray(formula) {
  return formula.match(/[A-Z][a-z]?/g);
}



function displayAnswer(userInput) {
  var color = 'tomato'
  if (card.name.toLowerCase() === userInput.toLowerCase()) {color = 'limegreen'};
  document.getElementById("answersField").style.backgroundColor = color;
  document.getElementById("answersField").innerHTML = card.formula + " " + card.name + " " + userInput;
}

