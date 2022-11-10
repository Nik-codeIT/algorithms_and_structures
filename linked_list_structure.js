//Связный список
/*Особенности: Каждый отдельный элемент списка занимает отдельное место в памяти. Связанность списка происходит за счет того что каждый пред. элемент хранит ссылку на след. элемент который лежит в списке.
+ Мы можем мгновенно добавлять элементы в конец или в начало списка.
- Чтобы получить какой-либо элемент нам с самого начала списка нужно итерироваться и сравнивать.
O(1) - Вставка/Удаление в начало/конец/если знаем место.
O(n) - Вставка в произвольное место, если не знаем место.
O(n) - Поиск.
*/

class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }

    getSize() {
        return console.log(`Размер связного списка: ${this.size} элементов`)
    }

    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result);
    }


}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(4)
list.add(5)
list.add(7)

list.getSize()
list.print()