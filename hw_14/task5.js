// Задача 1. Дано одновимірний масив. Кожен елемент
// 1)піднести до квадрату;
// 2)помножити на 7;
// 3)поділити на 10.
// Використати функції.


let sequence = [23,4,6,23,45,78,23,45,56,67]
function counting(array) {
    let square = array.map((value, index, arr) => arr[index]*=arr[index])
    let multiply7 = array.map((value, index,arr) => arr[index] = arr[index] * 7)
    let divide10 = array.map((value, index,arr) => arr[index] = arr[index] / 7)
    return document.write(`${square}<br>${multiply7}<br>${divide10}`)
}

counting(sequence)
