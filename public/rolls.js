function displayRolls() {
  let rls = await getRolls();
  for (let i = 1; i <= 10; i++){
    document.getElementById(i).innerHTML = rls[i-1];
  }
}

async function getRolls() {
    const userName = localStorage.getItem('userName');
    const response = await fetch(`/api/rolls/${userName}`);
    const rolls = await response.json();
    return rolls;
}
