
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

function standardized(userInput) {
  return userInput.trim().toLowerCase()

}

function iteMarkup() {
  return "-ite is used on the oxyanion with one less oxygen<br>"
}

function ateMarkup() {
  return "-ate is used on the most common oxyanion<br>"
}

function ideMarkup() {
  return "-ide is used when the substance is binary (two nonmetal elements)<br>"
}

function thioMarkup() {
  return "thio- means an oxygen has been replaced with a sulfur within the oxyanion<br>"
}

function createHint(ans, input) {
  hint = ""

  if (ans.match(/ite$/) == 'ite' && input.match(/[a-z]{3}$/) != 'ite') { hint += iteMarkup(); }
  if (input.match(/ite$/) == 'ite' && ans.match(/[a-z]{3}$/) != 'ite') { hint += iteMarkup(); }
  if (ans.match(/ate$/) == 'ate' && input.match(/[a-z]{3}$/) != 'ate') { hint += ateMarkup(); }
  if (input.match(/ate$/) == 'ate' && ans.match(/[a-z]{3}$/) != 'ate') { hint += ateMarkup(); }
  if (ans.match(/^thio/) == 'thio' && input.match(/^[a-z]{3}/) != 'thio') { hint += thioMarkup(); }

  if (hint != "") { hint = "<div class='hint-box rnd-corners'>" + hint + "</div>" }
  
 return hint
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

