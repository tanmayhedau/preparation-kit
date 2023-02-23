class Stack {
  constructor() {
    this.item = [];
  }

  // add an element
  add(ele) {
    return this.item.push(ele);
  }

  //remove an element
  remove() {
    if (this.item.length > 0) {
      return this.item.pop();
    }
  }

  //isEmpty?
  isEmpty() {
    return this.item.length === 0;
  }

  //peek element
  peek() {
    return this.item[this.item.length - 1];
  }

  //size
  size() {
    return this.item.length;
  }

  //clear
  clear() {
    return (this.item = []);
  }

  
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(6);

console.log(stack.item);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.remove());
console.log(stack.clear());

