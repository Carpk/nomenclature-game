

function ateMarkup() {
  return "-ate is used as it has one more oxygen than the -ite oxyanion<br>"
}

function iteMarkup() {
  return "-ite is used as it has one less oxygen than the -ate oxyanion<br>"
}

function ideMarkup() {
  return "-ide is used when the substance is binary (two nonmetal elements)<br>"
}

function thioMarkup() {
  return "thio- is used as an oxygen has been replaced with a sulfur within the oxyanion<br>"
}

function createHint(ans, input) {
  var hint = ""
  var userLastChar = input.match(/[a-z]{3}$/)

  if (ans.match(/ite$/) == 'ite' && (userLastChar == 'ate' || userLastChar == 'ide')) { hint += iteMarkup(); }
  if (ans.match(/ate$/) == 'ate' && (userLastChar == 'ite' || userLastChar == 'ide')) { hint += ateMarkup(); }
  if (ans.match(/ide$/) == 'ide' && (userLastChar == 'ite' || userLastChar == 'ate')) { hint += ideMarkup(); }
  if (ans.match(/^thio/) == 'thio' && input.match(/^[a-z]{3}/) != 'thio') { hint += thioMarkup(); }

  if (hint != "") { hint = "<div class='hint-box rnd-corners'>" + hint + "</div>" }

 return hint
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

