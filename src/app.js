
let budgetInput = document.getElementById("budgetNum")
let expenseName = document.getElementById("itemName")
let expenseInput = document.getElementById("itemNum")
let myBudget = document.getElementById("budgetDisplay")
let myExpense = document.getElementById("expenses")
let myBalance = document.getElementById("remDisplay")

function displayBudget() {

    myBudget.innerHTML = 
    "<h2>My Budget: " + budgetInput.value + "</h2>"
    myBalance.innerHTML = 
    "<p>current remaining budget: " + budgetInput.value + "</p>"
    myExpense.innerHTML = ""
}

itemArray = Array();
itemIndex = 0;
expenseVal = 0;

function updateBudget() {

    itemArray[itemIndex] = {Name: expenseName.value, Num: expenseInput.value}
    itemIndex ++;
    expenseVal = expenseVal + parseFloat(expenseInput.value)

    itemObj = itemArray[itemIndex - 1]

    myBalance.innerHTML = 
    "<p>current remaining budget: " + (budgetInput.value - expenseVal) +  "</p>"

    myExpense.innerHTML += 
    "<p>" + itemObj["Num"] + " " + itemObj["Name"] + "</p>"
    
}

