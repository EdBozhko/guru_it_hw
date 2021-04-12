// Задача. Розробити калькуляртор

function getSum() {
    const FIRST_NUMBER = parseFloat(document.querySelector('#first-number').value)
    const SECOND_NUMBER = parseFloat(document.querySelector('#second-number').value)
    document.querySelector('#result').value = FIRST_NUMBER + SECOND_NUMBER
}

function getDifference() {
    const FIRST_NUMBER = parseFloat(document.querySelector('#first-number').value)
    const SECOND_NUMBER = parseFloat(document.querySelector('#second-number').value)
    document.querySelector('#result').value = FIRST_NUMBER - SECOND_NUMBER
}

function getMultiply() {
    const FIRST_NUMBER = parseFloat(document.querySelector('#first-number').value)
    const SECOND_NUMBER = parseFloat(document.querySelector('#second-number').value)
    document.querySelector('#result').value = FIRST_NUMBER * SECOND_NUMBER
}

function getDivide() {
    const FIRST_NUMBER = parseFloat(document.querySelector('#first-number').value)
    const SECOND_NUMBER = parseFloat(document.querySelector('#second-number').value)
    document.querySelector('#result').value = FIRST_NUMBER / SECOND_NUMBER
}