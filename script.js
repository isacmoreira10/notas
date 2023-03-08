let negativeScreen = document.querySelector('#disapproved')
let positiveScreen = document.querySelector('#approved')
let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let number3 = document.querySelector('#number3')
let grades = []

function add() {
    let numbers = {
        number1: Number(number1.value),
        number2: Number(number2.value),
        number3: Number(number3.value)
    }
    if (number1.value > 10 || number2.value > 10 || number3.value > 10) {
        alert("Digite valores a baixo de 10 ")
        document.location.reload(true)
    } else {

        const propertyValues = Object.values(numbers)
        grades.push(propertyValues)

        let count = 0
        for (let i = 0; i < propertyValues.length; i++) {
            count += propertyValues[i] / 3
        }

        if (count >= 6) {
            let positiveScreen = document.querySelector('#approved')
            const htmlElement = `<p class="paragraph">${'A média do aluno é: ' + [Math.trunc(count)]}</p>
            <img src="Vector (1).png" class="image">
            <p class="result">Você passou!</p>`
            negativeScreen.innerHTML = ''
            positiveScreen.innerHTML = htmlElement


        } else {
            let negativeScreen = document.querySelector('#disapproved')
            const htmlElement2 = `<p class="paragraph2">${'A média do aluno é: ' + [Math.trunc(count)]}</p>
            <img src="Vector (2).png" class="image2">
            <p class="result2">Você reprovou</p>`
            positiveScreen.innerHTML = ''
            negativeScreen.innerHTML = htmlElement2
        }
    }
}




