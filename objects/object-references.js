let myAccount = {
    name: 'Shoaib Tasrif',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount

}

let resetAccount = function (account) {

}

let getAccountSummary = function (account) {
    console.log(`Account for ${account.name} has ${account.income - account.expenses}. ${account.income} is income. ${account.expenses} is expenses`)
}


addExpense(myAccount, 10)
console.log(myAccount)

addIncome(myAccount, 20)
console.log(myAccount)

getAccountSummary(myAccount)