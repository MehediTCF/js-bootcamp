let calc = function (score, total) {
    let ratio = (score / total) * 100
    if (ratio >= 90 && ratio <= 100) {
        console.log(`You got a A (${ratio}%)`)
    }
    else if (ratio >= 80 && ratio <= 89) {
        console.log(`You got a B (${ratio}%)`)
    }
    else if (ratio >= 70 && ratio <= 79) {
        console.log(`You got a C (${ratio}%)`)
    }
    else {
        console.log(`You got a F (${ratio}%)`)
    }

}

calc(18.5, 20)