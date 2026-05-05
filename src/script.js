//Hämta element
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");

const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");

const balanceDisplay = document.getElementById("balance");

//////Startsaldo///////
let balance = 0;


//////Funktion för att hantera transaktion//////
function handleTransaction(type) {
  const desc = descInput.value.trim();
  const amount = Number(amountInput.value);

  //////Validering//////
  if (desc === "" || amountInput.value.trim() === "" || isNaN(amount)) {
    alert("Vänligen fyll i både beskrivning och ett giltigt belopp.");
    return; // stoppa om fel
  }

  //////Skapa nytt li-element//////
  const li = document.createElement("li");

  //////Uppdatera listor + rätt format//////
  if (type === "income") {
    li.textContent = `${desc} - ${amount} kr (Inkomst)`;
    incomeList.appendChild(li);

    //////Uppdatera saldo//////
    balance += amount;

  } else if (type === "expense") {
    li.textContent = `${desc} - ${amount} kr (Utgift)`;
    expenseList.appendChild(li);

    balance -= amount;
  }

  //////Uppdatera saldo i HTML//////
  balanceDisplay.textContent = balance;

  //////Rensa input//////
  descInput.value = "";
  amountInput.value = "";
}


//////Event listeners//////
incomeBtn.addEventListener("click", () => {
  handleTransaction("income");
});

expenseBtn.addEventListener("click", () => {
  handleTransaction("expense");
});