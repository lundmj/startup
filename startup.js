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

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "rolld20.html";
});