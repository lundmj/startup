function displayRolls(rolls) {
    const table = document.getElementById("rollsTable");
    for (let i = 0; i < rolls.length; i++) {
      const row = table.insertRow(-1);
      const userCell = row.insertCell(0);
      const valueCell = row.insertCell(1);
      userCell.innerHTML = rolls[i].userName;
      valueCell.innerHTML = rolls[i].value;
    }
}

  async function getRolls() {
    const response = await fetch("/rolls");
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
