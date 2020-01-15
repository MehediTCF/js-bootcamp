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

document.querySelectorAll('button')[1].addEventListener('click', function () {
    console.log('Deleted!')
})

document.querySelector('#edit').addEventListener('click', function () {
    console.log("Edited!")
})

document.querySelector('#remove').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})


document.querySelector('#removeh3').addEventListener('click', function () {
    document.querySelectorAll('h3.tin').forEach(function (note) {
        note.remove()
    })
})