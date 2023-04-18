let upperBound = 20;
		
function rollDie() {
    let count = 0;
    let result = 0;
    let interval = setInterval(function() {
        result = Math.floor(Math.random() * upperBound) + 1;
        document.getElementById("d20-result").innerHTML = result;
        count++;
        if (count === 5) {
            clearInterval(interval);
        }
    }, 250);
    return result;
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

document.getElementById("roll-button").addEventListener("click", function() {
    // Call rollDie() function to generate random value
    var value = rollDie();
  
    // Get username from the logged-in user
    var userName = getPlayerName();
  
    // Create a JSON object to send to the server
    var data = { userName: userName, value: value };
  
    // Make an AJAX call to the server to save the data to the database
    $.ajax({
      type: "POST",
      url: "/roll",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json",
      success: function(data) {
        console.log("Data saved to database");
      },
      error: function(xhr, status, error) {
        console.log("Error saving data to database");
      }
    });
});