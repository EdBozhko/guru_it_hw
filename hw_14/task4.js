// Задача. Створити функцію, яка б могла знаходити суму для довільної кількості переданих чисел

let arr = []
let elementOfArray
do {
    elementOfArray = parseInt(prompt('Введіть число для додавання. Щоб закінчити, введіть "0"'))
    arr.push(elementOfArray)
} while (elementOfArray != 0);
document.write(arr.reduce((accumulator, currentValue) => accumulator + currentValue))

