// Задача. Знайти або суму, або добуток чисел.

let arr = []
let elementOfArray

// Користувач вводить числа до тих пір, поки не введуть знак "=". Є перевірка на ввод знаків
do {
    elementOfArray = prompt('Введіть число для додавання. Щоб закінчити, введіть "="')
    if (elementOfArray == '=') {
        break
    } else {
        elementOfArray = Number(elementOfArray)
        if (isNaN(elementOfArray)) {
            alert('Помилка! Введіть число!')
        } else {
            arr.push(elementOfArray)
        }
    }
} while (elementOfArray != '=');


// Користувач вводить необхідну дію
let result = prompt('Щоб отримати суму, введіть "+"; Щоб отримати добуток, введіть "*"')

document.write(arr.reduce((prevValue, value, index, array) => {
    if (result === '+') {
        return prevValue + value
    } else {
        return prevValue * value
    }
}))