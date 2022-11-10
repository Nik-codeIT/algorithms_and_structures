/*Бинарное дерево поиска - структура данных
Каждый узел также является деревом, структура рекурсивна. Суть в том что у каждого узла может быть только 2 потомка. Если добавляемое в дерево значение, меньше по значению чем текущий узел, то значение уходит в левое поддерево, если больше то в правое. Сравнение происходит с каждым узлом. 
Здесь можно находить данные за логарифмическое время, аналогично бинарному поиску.

O(log2n) - вставка/удаление.
O(log2n) - поиск.
*/

class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value)

        } else {
            let node = this.root
            let newNode = new TreeNode(value)
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left
                }
            }
            if (value > node.value) {
                node.right = newNode
            } else {
                node.left = newNode
            }
        }
    }

    print(root = this.root) {
        if (!root) {
            return true
        }
        console.log(root.value)
        this.print(root.left)
        this.print(root.right)
    }
}

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)


tree.print()

