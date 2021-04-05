// 21.	Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.

let arr = [6,651,65,132,8,516,-6,48,9,-56,17,36,-19,-32,19,11,-5,21,42]

let numberQuantity = 0
let numbers = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%3 === 0 && arr[i]%7 !== 0) {
        numberQuantity++
        numbers.push(arr[i])
    }
}

document.write(`${numbers}<br> ${numberQuantity}`)