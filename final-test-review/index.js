
/*
1. oбъявите две переменные: phrase и name. Вывести сообщение через запятую
*/
const getPhrase = (phrase, name) => {
    return `${phrase}, ${name}`
}

/*
2. Создать массив items = ["item1", "item2" ...]
Если массив пустой вывести "Массив пустой",
если есть хотя бы однин элемент вывести "В массиве {количество} элементов"
*/
const arrLength = (arr) => {
    return arr.length ? `В массиве ${arr.length} элементов` : 'Массив пустой'
}

module.exports = {
    task1: getPhrase,
    task2: arrLength
}