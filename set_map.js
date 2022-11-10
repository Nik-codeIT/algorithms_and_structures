/*Map(Словарь) - хранит в себе пары ключ-значение, встроенный class Map.
Отличие от объекта JS, в том что хранить ключи можем еще и в объектах{}, можем мгновенно добавлять\извлекать объекты в словаре.*/

const map = new Map()


const objKey = { id: 9 }
map.set(objKey, 'Michael')
console.log(map.get(objKey));

//Set - множество(массив) который хранит в себе только уникальные значения, встроенный class Set.

const set = new Set();

set.add(44)
set.add(29)
set.add(44)
set.add(44)
set.add(31)
set.add(44)
set.add(44)

console.log('Выводит только уникальные значения:', set)




