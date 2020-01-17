// document.querySelector('#search-box').addEventListener('input', function (e) {
//     let ss = document.querySelector('h3.tin')
//     ss.textContent = e.target.value
//     // console.log(e.target.value)
// })


document.querySelectorAll('#bookname, #author').addEventListener('change', function (e) {
    let booklist = document.querySelector('#booklist')
    let row = document.createElement('tr')
    row.innerHTML = `
    <td></td>
    <td>${e.target.value}</td>
    <td>${e.target.value}</td>
    `;
    booklist.appendChild(row)
    // booklist.textContent = e.target.value
})


document.querySelector('#author').addEventListener('input', function (e) {
    let authorlist = document.querySelector('#authorlist')
    authorlist.textContent = e.target.value
})

// document.querySelector('#submit').addEventListener('click', function () {
//     document.querySelector('#bookname').addEventListener('input', function (e) {
//         let booklist = document.querySelector('#booklist')
//         booklist.textContent = e.target.value
//         console.log(e.target.value)
//     })
//     document.querySelector('#author').addEventListener('input', function (e) {
//         let authorlist = document.querySelector('#authorlist')
//         authorlist.textContent = e.target.value
//     })


// })