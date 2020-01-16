const notes = [{
    title: 'One',
    body: 'One is important'

}. {
    title: 'Two',
    body: 'Two is important'

}, {
    title: 'Three',
    body: 'Three is important'

}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())

    })
    console.log(filteredNotes)
}

renderNotes(notes, filters)


//printing each para ******
let ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
})
//adding new paragraph using js
let newPara = document.createElement('p')

newPara.textContent = 'This is everything'
document.querySelector('body').appendChild(newPara)


document.querySelector("#search-note").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)



})