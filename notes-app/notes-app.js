
//printing each para ******
let ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
})
//adding new paragraph using js
let newPara = document.createElement('p')

newPara.textContent = 'This is everything'
document.querySelector('body').appendChild(newPara)