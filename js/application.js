
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
  var input = userInput.trim().toLowerCase()

  return input
}

function oxyanionMarkup() {
  var text = "<div class='hint-box rnd-corners'>-ate is used on the most common oxyanion.<br>-ite is used on the oxyanion with one less oxygen</div>"
  var example = "Chlorine comes in hypochlorite (ClO), chlorite (ClO2), chlorate (ClO3) and perchlorate (ClO4) forms."
  return text
}

function sOMETHINGnMarkup() {
  var text = "<div class='hint-box rnd-corners'>-ide is used when the substance is binary (two nonmetal elements)</div>"
  return text
}

function thioMarkup() {
  var text = "<div class='hint-box rnd-corners'>thio- means an oxygen has been replaced with a sulfur within the oxyanion.</div>"
  return text
}

function createHint(ans, input) {
  hint = ""
  if (ans == 'ite' && input == 'ate' || ans == 'ate' && input == 'ite') { hint = oxyanionMarkup(); }

  if (ans == 'thio' && input != 'thio') { hint = thioMarkup(); }

 return hint
}

function displayAnswer(userInput) {
  var color = 'limegreen'
  var hint = ""
  var input = userInput.trim().toLowerCase()
  if (card.name.toLowerCase() !== input) {
    color = 'tomato'
    hint = createHint(card.name, input);
    document.getElementById("hintsField").innerHTML = createHint(card.name, userInput);
  };
  document.getElementById("answerBox").style.backgroundColor = color;
  document.getElementById("answersField").innerHTML = answersMarkup(card, userInput);
}

