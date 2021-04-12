// Задача. Відобразити одновимірний масив за допомогою таблиці

var a = [111,21,54,34];
function showTable() {
    for (let i = 0; i < a.length; i++) {
        let newData = document.createElement('td')
        newData.innerText = `${a[i]}`
        newData.style = 'border: 2px black solid;'
        let addData = document.querySelector('#MyTable')
        addData.appendChild(newData)        
    }
}
