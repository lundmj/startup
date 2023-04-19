async function displayRolls() {
  let rls = await getRolls();
  console.log(rls);
  for (let i = 1; i <= 10; i++){
    document.getElementById(i).innerHTML = rls[i-1].roll;
  }
}

async function getRolls() {
    const userName = localStorage.getItem('userName');
    const response = await fetch(`/api/rolls/${userName}`);
    const rolls = await response.json();
    return rolls;
}

function displayQuote(data) {
  const containerEl = document.querySelector("#quote");

  const quoteEl = document.createElement("p");
  quoteEl.classList.add("quote");
  const authorEl = document.createElement("p");
  authorEl.classList.add("author");

  quoteEl.textContent = data.content;
  authorEl.textContent = data.author;

  containerEl.appendChild(quoteEl);
  containerEl.appendChild(authorEl);
}
function callService(url, displayCallback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCallback(data);
    });
}
callService("https://api.quotable.io/random", displayQuote);
displayRolls();
