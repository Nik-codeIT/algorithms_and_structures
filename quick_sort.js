const array = [1, 4, 0, 3, 28, 41, 6, -51, -3, 42, 21, 43, 54, -9, 31, 14, -15]
let count = 0

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex]
    let less = []
    let great = []
    for (let i = 0; i < arr.length; i++) {
        count++
        if (i === pivotIndex)
            continue
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            great.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(great)]
}

console.log(quickSort(array))
console.log(`Количество итераций: ${count}\nДлина массива: ${array.length}\nСложность алгоритма: O((log2n) * n) // 4 * 17 = Количество итераций`)