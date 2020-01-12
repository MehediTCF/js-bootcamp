let paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (para) {
    if (para.textContent.includes('the')) {
        para.remove()
    }


})

// doing nothing, just for mandatorty push! 
