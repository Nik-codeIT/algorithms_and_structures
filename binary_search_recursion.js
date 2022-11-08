const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

let start = 0
let the_end = array.length

function recursiveBinarySearch(arr, item, start, end) {
    try {
        count++
        let middle = Math.floor((start + end) / 2) // 8
        if (item === arr[middle])
            return middle
        if (item < arr[middle]) {
            return recursiveBinarySearch(arr, item, start, middle - 1)
        } else {
            return recursiveBinarySearch(arr, item, middle + 1, end)
        }
    } catch (err) {
        console.log('Данного элемента нет в массиве')
        return item
    }
}

console.log(recursiveBinarySearch(array, 15, start, the_end))
console.log(`Количество итераций: ${count}\nСложность алгоритма: O(log2n), n=16`)
