// 1.	Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

let arr = []

// задаємо кількість елементів у масиві
let arrLength = 10 

for (let i = 0; i < arrLength; i++) {
    arr.push(0)
}

arr[0] = 1
arr[arr.length-1] = 1

document.write(arr)