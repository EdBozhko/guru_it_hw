// 2.	Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.

let arr = []

let arrLength = 10

for (let i = 0; i < arrLength / 2; i++) {
    arr.push(0, 1)
    
}

document.write(arr)