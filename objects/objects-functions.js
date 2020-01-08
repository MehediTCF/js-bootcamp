let myBook = {
    title: '1501',
    author: 'George',
    pageCount: 15
}

let otherBook = {
    title: 'Hye',
    author: 'George S',
    pageCount: 150
}

let getBook = function (book) {
    console.log(`${book.title} By ${book.author}`)

}


getBook(myBook)
getBook(otherBook)

//

let myAccount = {
    name: 'Mehedi',
    income: 100
}



let addIncome = function (account, amount) {
    account.income = account.income + amount
    console.log(account)
}

addIncome(myAccount, 2.5)
addIncome(myAccount, 500)