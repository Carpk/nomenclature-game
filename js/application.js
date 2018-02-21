
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(cards.length));
}

function getCompoundArray(formula) {
  return formula.match(/[A-Z][a-z]?/g);
}

function answersMarkup(card, userInput, hint) {
  const markup = `
    <div class="">
      ${card.formula}<br>
      ${card.name}<br>
      ${userInput}<br>
      <span id="hint-box">${hint}</span>
    </div>
  `
  return markup
}

function standardized(userInput) {
  var input = userInput.trim().toLowerCase()

  return input
}

function createHint(ans, input) {
  hint = ""

  return hint
}

function displayAnswer(userInput) {
  var color = 'limegreen'
  var hint = ""
  var input = userInput.trim().toLowerCase()
  if (card.name.toLowerCase() !== input) {
    color = 'tomato'
    hint = createHint(card.name, input);
  };
  document.getElementById("answersField").style.backgroundColor = color;
  document.getElementById("answersField").innerHTML = answersMarkup(card, userInput, hint);
}

