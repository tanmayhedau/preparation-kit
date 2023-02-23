class Queue {
  constructor() {
    this.item = [];
  }

  //add
  enqueue(ele) {
    return this.item.push(ele);
  }

  //remove
  dequeue() {
    if (this.item.length > 0) {
      return this.item.shift();
    }
  }

  //peek
  peek() {
    return this.item[0];
  }

  //size
  size() {
    return this.item.length;
  }

  //isEmpty
  isEmpty() {
    return this.item.length === 0;
  }

  //clear
  clear() {
    return (this.item = []);
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);

console.log(queue.item);
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.clear());
