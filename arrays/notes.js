let notes = ['mehedi', 'yessssh', 'aasasas']

notes.pop()
console.log(notes)
//deletes first array item
notes.shift()

notes.push("ysdysdys")

notes.forEach(function (item, index) {
    console.log(item)
    console.log(index)
})

let objects = [{
    title: 'Note1',
    color: 'red'

}, {
    title: 'Note2',
    color: 'blue'

}, {
    title: 'Note1',
    color: 'white'

}]