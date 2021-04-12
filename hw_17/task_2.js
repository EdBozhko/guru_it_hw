// Задача. Зробити конвертер валют

function getConvert() {
    const AMOUNT_IN_UAH = parseFloat(document.querySelector('#amount-in-UAH').value)
    let euroRate = 33
    let dollarRate = 28 
    document.querySelector('#amount-in-EU').value = parseFloat((AMOUNT_IN_UAH / euroRate).toFixed(2)) 
    document.querySelector('#amount-in-USD').value = parseFloat((AMOUNT_IN_UAH / dollarRate).toFixed(2)) 
}