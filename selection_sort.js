const array = [1, 4, 0, 3, 2, 41, 6, -51, -3, 42, 21, 43, 54, -9, 31, 14, -15]
let count = 0

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < arr.length; j++) {
            count += 1
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp
    }
    return arr
}

console.log(selectionSort(array))
console.log(`Длина массива: ${array.length}\nКоличество итераций: ${count}\nСложность алгоритма с коэффициентом: O((1/2(n*n))\nСложность алгоритма: O(n*n)`)
