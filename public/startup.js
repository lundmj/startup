let upperBound = 20;
		
function rollDie() {
    let count = 0;
    let result = 0;
    let interval = setInterval(function() {
        result = Math.floor(Math.random() * upperBound) + 1;
        document.getElementById("d20-result").innerHTML = result;
        count++;
        if (count === 5) {
            postRoll(result);
            clearInterval(interval);
        }
    }, 250);
}
  
function changeDie(value) {
    upperBound = value;
    document.getElementById("d20-image").src = "d" + value + "_final.png";
}

const buttons = document.querySelectorAll('.d-option');

buttons.forEach(button => {
    button.addEventListener('click', () => {
    buttons.forEach(button => {
        button.classList.remove('on');
    });
    button.classList.add('on');
    });
});

function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
}

async function postRoll(roll) {
    console.log(roll);
    var userName = localStorage.getItem('userName');
    var data = {
      userName: userName,
      roll: roll,
    };
  var response = await fetch(`/api/roll`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
}
