let paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (para) {
    if (para.textContent.includes('the')) {
        para.remove()
    }


})

<<<<<<< HEAD
document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'Buton Clicked!'

})

document.querySelector('button').addEventListener('dblclick', function (e) {
    e.target.textContent = 'Create!'

})

document.querySelector('button').addEventListener('mouseover', function (e) {
    e.target.textContent = 'Mouse Hovering'

})
