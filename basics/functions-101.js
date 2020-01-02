//basic functions
let greatUser = function (num) {
    console.log('Welcome!')
    let result = num * num
    console.log(result)
}

greatUser(5)

//undefined for functions arguments
let square = function (num) {
    console.log(num)

}

let another = square()
console.log(another)

//with multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let res = add(4, 5, 6)
console.log(res)

//challenge-1
let tipcal = function (bill, per = 0.2) {
    let tip = bill * per
    return tip
}

let res1 = tipcal(100, 0.5)
console.log(res1)

//template strings 

let name = 'Hasan'
console.log(`My name is ${name}`)