const array = [1, 4, 0, 3, 2, 41, 6, -51, -3, 42, 21, 43, 54, -9, 31, 14, -15]
let count = 0

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            count++
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}

console.log(bubbleSort(array))
console.log(`Длина массива: ${array.length}\nКоличество итераций: ${count}\nСложность алгоритма с коэффициентом: Здесь нет коэффициента, данный алгоритм менее эффективен в 2 раза, чем сортировка по выбору\nСложность алгоритма: O(n*n)`)
