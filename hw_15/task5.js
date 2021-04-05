// 19.	Определить, содержит ли массив данное число x

let arr = [6,651,65,132,8,516,-6,48,9,-56,17,36,-19,56,-32,19,11,-5,13]

for (let p = 0; p < arr.length-1; p++) {
      let nMin = p
      for (let i = p+1; i < arr.length; i++) {
        if (arr[i] < arr[nMin])
        nMin = i
      }
      if (nMin !== p) {
         let temp = arr[p]
         arr[p] = arr[nMin]
         arr[nMin] = temp
      }
}

let startIndex = 0
let endIndex = arr.length - 1
let searchItem = 132
let searchIndex = -1

while (startIndex <= endIndex) {
    let mediumIndex = Math.floor((startIndex + endIndex) / 2)
    if (arr[mediumIndex] === searchItem) 
        searchIndex = mediumIndex
    
    if (arr[mediumIndex] > searchItem) 
        endIndex = mediumIndex - 1
    else 
        startIndex = mediumIndex + 1
    
}
document.write(`${arr}<br>`)

if (searchIndex === -1) {
    document.write('Немає такого значення')
} else {
    document.write(`Шукане значення ${searchIndex + 1} у списку`)
}