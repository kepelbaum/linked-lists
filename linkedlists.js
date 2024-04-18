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
    return {list, getList, append, prepend, size};
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
main.append(4);
main.append(10);
main.prepend(2);
console.log(main.getList()[0].getValue(), main.getList()[0].getNext(), main.getList()[1].getValue(), main.getList()[1].getNext());
console.log(main.size());