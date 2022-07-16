class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    addFront(val){
        let new_node = new Node(val);
        if(!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront(){
        if(this.head){
            this.head = this.head.next;
            return this;
        }
        return this;
    }

    front(){
        if(this.head){
            return this.head.data;
        }
        return null;
    }
}

SLL1 = new SLL();
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));

console.log(SLL1.removeFront());
console.log(SLL1.removeFront());

console.log(SLL1.front());
console.log(SLL1.removeFront());
console.log(SLL1.front());