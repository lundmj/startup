let upperBound = 20;
		
function rollDie() {
    let count = 0;
    let interval = setInterval(function() {
        let result = Math.floor(Math.random() * upperBound) + 1;
        document.getElementById("d20-result").innerHTML = result;
        count++;
        if (count === 5) {
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

function login() {
    const nameEl = document.querySelector("#username");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "rolld20.html";
}

function sendRoll(recipient, value){
    //WebSocket communication here
}

