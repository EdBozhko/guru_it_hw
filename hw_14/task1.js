// Задача. Дано масив показників термометра протягом місяця. З’ясувати, чи усі показники є більшими за 10 градусів.

let temp = [0, 14, -5, 7, -2, 11, 6, -2]
Уважніше з дужками
let result = temp.every((value) => value > 0) ? document.write('Всі показники є більшими за 10 градусів') : document.write('Не всі показники є більшими за 10 градусів')
