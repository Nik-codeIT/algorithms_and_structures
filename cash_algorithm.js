//Алгоритм кэширования данных, во избежании повторных вычислений функции.
function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if (cash[n]) {
            console.log('Взято из кэша:', cash[n])
            return cash[n]
        }
        let result = fn(n)
        console.log('Взято из функции:', result)
        cash[n] = result
        return result;
    }
}

//Итеративный метод функции факториала
function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(2)
cashFactorial(3)
cashFactorial(1)
cashFactorial(3)
cashFactorial(3)