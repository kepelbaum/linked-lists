function LinkedList() {
    let list = [];
    let getList = () => list;
    let append = (value) => {
        let x = Node();
        x.updateValue(value);
        if (list.length > 0) {
            list[list.length - 1].updateNext(value);
        };
        list.push(x);
    };
    let prepend = (value) => {
        let x = Node();
        x.updateValue(value);
        if (list.length > 0) {
            x.updateNext(list[0].getValue());
        };
        list.unshift(x);
    }
    let size = () => list.length;
    let head = () => list[0];
    let tail = () => list[list.length - 1];
    let at = (index) => list[index];
    let pop = () => {
        list.pop();
        if (list.length > 0) {
            list[list.length - 1].updateNext(null);
        } 
    }
    let contains = (value) => {
        for (i = 0; i < list.length; i++) {
            if (list[i].getValue() === value) {
                return true;
            }
        }
        return false;
    }
    let find = (value) => {
        for (i = 0; i < list.length; i++) {
            if (list[i].getValue() === value) {
                return i;
            }
        }
        return null;
    }
    let toString = () => {
        let str = '';
        for (i = 0; i < list.length; i++) {
            str += '(' + list[i].getValue() + ') -> ';
        }
        str += 'null';
        return str;
    }
    return {list, getList, append, prepend, size, head, tail, at, pop, contains, find, toString};
}

function Node() {
    let value = null;
    let nextNode = null;
    let getValue = () => value;
    let getNext = () => nextNode;
    let updateValue = (newValue) => value = newValue;
    let updateNext = (newNext) => nextNode = newNext;
    return {getValue, getNext, updateValue, updateNext};
}

const main = LinkedList();
console.log(main.toString());
main.append(4);
main.append(10);
main.prepend(2);
console.log(main.toString());
console.log(main.getList()[0].getValue(), main.getList()[0].getNext(), main.getList()[1].getValue(), main.getList()[1].getNext());
console.log(main.size(), main.head().getValue(), main.tail().getValue());
console.log(main.at(1).getValue());
main.pop();
console.log(main.getList()[0].getValue(), main.getList()[0].getNext(), main.getList()[1].getValue(), main.getList()[1].getNext());
console.log(main.contains(2), main.contains(4), main.contains(10));
console.log(main.find(2), main.find(4), main.find(10));
console.log(main.toString());