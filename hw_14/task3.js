// Задача. Знайти суму від’ємних елементів масиву.

let arr = [0, 14, -5, 7, -3, 11, 6, -2]
let filter = arr.filter((value) => value < 0)
let result = document.write(filter.reduce((accumulator, currentValue) => accumulator + currentValue)); Краще одразу тут перевіряти умову. Це дозволило б тільки один за переглядати елементи масиву
