
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(cards.length));
}

function getCompoundArray(formula) {
  return formula.match(/[A-Z][a-z]?/g);
}

function answersMarkup(card, userInput) {
  const markup = `
    <div class="">
      ${card.formula}<br>
      ${card.name}<br>
      ${userInput}<br>
    </div>
  `
  return markup
}

function displayAnswer(userInput) {
  var color = 'tomato'
  if (card.name.toLowerCase() === userInput.trim().toLowerCase()) {color = 'limegreen'};
  document.getElementById("answersField").style.backgroundColor = color;
  document.getElementById("answersField").innerHTML = answersMarkup(card, userInput);
}

