let p1 = Math.random()
let p1ceil = Math.ceil(p1 * 6)
console.log(p1)
console.log(p1ceil)

let p2 = Math.random()
let p2ceil = Math.ceil(p2 * 6)
console.log(p1)
console.log(p1ceil)
let p1content = document.querySelectorAll('p')[0]
p1content.textContent += p1ceil

let p2content = document.querySelectorAll('p')[1]
p2content.textContent += p2ceil

if (p1ceil > p2ceil) {
    document.querySelector('h1#win').textContent = "Player 1 won"

}
else if (p2ceil > p1ceil) {
    document.querySelector('h1#win').textContent = "Player 2 won"
}
else {
    document.querySelector('h1#win').textContent = "Draw!"
}

// document.querySelector('p') = p2ceil


// if (p1ceil >= p2ceil) {
//     document.querySelector("p")[0]

// }