const array = [1, 4, 1, 2, 45, 21, 41, 56, 62]
let count = 0

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    console.log('Данного элемента нет в массиве')
    return null
}


console.log(linearSearch(array, 56))
console.log(`Количество итераций: ${count}\nСложность алгоритма: O(n = 11)`)


