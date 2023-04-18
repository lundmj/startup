function displayRolls(rolls) {
    let item = 1;
    while (item <= 10){
        document.getElementById("${item}").innerHTML = rolls[item-1];
    }
}

async function getRolls() {
    const user = localStorage.getItem('username');
    const response = await fetch(`/rolls/${user}`);
    const rolls = await response.json();
    return rolls;
  }
// Get reference to the table element in HTML
const table = document.getElementById("roll-table");

// Call displayRolls function when page is loaded
window.addEventListener("load", async () => {
  const rolls = await getRolls();
  displayRolls(table, rolls);
});
