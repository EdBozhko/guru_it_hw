// Задача. Знайти добуток від’ємних елементів масиву.

let arr = [0, 14, -5, 7, -3, 11, 6, -2]
let calculation = arr.filter((value) => value < 0)
let result = document.write(calculation.reduce((accumulator, currentValue) => accumulator * currentValue));
