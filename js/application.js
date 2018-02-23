
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
    </div>
  `
  return markup
}

function standardized(userInput) {
  var input = userInput.trim().toLowerCase()

  return input
}

function oxyanionMarkup() {
  var text = "-ate suffix is used on the most common oxyanion.<br>-ite suffix is used on the oxyanion with one less oxygen"
  var example = "Chlorine comes in hypochlorite (ClO), chlorite (ClO2), chlorate (ClO3) and perchlorate (ClO4) forms."
  return text
}


function createHint(ans, input) {
  hint = ""
  if (true) {
    hint = oxyanionMarkup();
  }
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
  document.getElementById("answerBox").style.backgroundColor = color;
  document.getElementById("answersField").innerHTML = answersMarkup(card, userInput, hint);
}

