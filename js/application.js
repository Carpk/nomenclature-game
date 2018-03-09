
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(cards.length));
}

function getCompoundElementsArray(formula) {
  return formula.match(/[A-Z][a-z]?/g);
}


function getCompoundArray(formula) {
  return formula.match(/[A-Z][a-z]?\d*/g);
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

function standardized(userInput) {
  return userInput.trim().toLowerCase()

}


function displayAnswer(userInput) {
  var color = 'limegreen'
  var hint = ""
  var input = userInput.trim().toLowerCase()
  var ans = card.name.toLowerCase()
  if (ans !== input) {
    color = 'tomato'
    hint = createHint(ans, input);
  };
  document.getElementById("hintsField").innerHTML = hint;
  document.getElementById("answerBox").style.backgroundColor = color;
  document.getElementById("answersField").innerHTML = answersMarkup(card, userInput);
}

