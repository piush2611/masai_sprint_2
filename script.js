var income = document.querySelector(".income").value

// income
function addIncome() {
    income = document.querySelector(".income").value

}

// adds and store expenses
var total = 0;
var arrOfExpenses = [];
var head = document.querySelector(".head")
var i = 1;
function totalExpense() {
    var expense = document.querySelector("#expense").value
    var amount = document.querySelector(".expenseInput").value
    total = Number(total) + Number(amount);
    head.textContent = "YOUR RECENT EXPENSE : " + expense + " " + amount
    arrOfExpenses.push( i + " " + expense + " : " + amount + ", " + Date())
    i++
}
console.log(arrOfExpenses)
// calculation and display 
function calculateBalance() {
    var balance = income - total;
    var totalIncome = document.querySelector(".totalIncome")
    var totalExpense = document.querySelector(".totalExpense")
    var bal = document.querySelector(".balance")
    var expense = document.querySelector("#expense").value
    var amount = document.querySelector(".expenseInput").value

    if (income == "" || total == " ") {
        alert("Please fill in the input fields")
    } else {
        totalIncome.textContent = "TOTAL INCOME : " + income;
        totalExpense.textContent = "TOTAL EXPENSES : " + total;
        bal.textContent = "BALANCE LEFT : " + balance;
    }
    // calling the function balanceRunningLow
    balanceRunningLow()
}

// low balance indication
function balanceRunningLow() {
    var balance = income - total;
    var limit = Number((income * 20) / 100)
    if (balance < limit) {
        var warn = document.querySelector(".warning")
        warn.textContent = "LOW BALANCE : " + balance
        warn.style.color = "red"
    }
}

// Resets all inputs and display
var resetButton = document.getElementById("reset")
function reset() {
    document.querySelector(".income").value = 0;
    total = 0;
    var amount = document.querySelector(".expenseInput");
    amount.value = 0;
    var totalIncome = document.querySelector(".totalIncome")
    var totalExpense = document.querySelector(".totalExpense")
    var bal = document.querySelector(".balance")
    totalIncome.innerHTML = ""
    totalExpense.innerHTML = ""
    bal.innerHTML = ""
    var warn = document.querySelector(".warning")
    warn.innerHTML = ""
    head.textContent = ""
}
resetButton.addEventListener('click', reset)
