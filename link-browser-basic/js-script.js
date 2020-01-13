let qs = document.querySelectorAll('p')

//for removing all paragraph items
qs.forEach(function (p) {
    p.remove()
});

let hs = document.querySelectorAll('h6')
hs.forEach(function (p) {
    p.textContent = '****'
})

//adding a new element 

let newP = document.createElement('h1')
newP.textContent = 'This is it!'
document.querySelector('body').appendChild(newP)