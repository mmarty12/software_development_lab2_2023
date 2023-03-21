'use strict';

class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    if (this.size === 0) {
      return 0;
    } else {
      return this.size;
    }
  }

  append(data) {
    if (typeof data === 'string') {
      const node = new Node(data);

      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.size++;
    } else throw new Error(`Invalid type of data ${data}`);
  }

  insert(value, index) {
    if (typeof value === 'string') {
      if (index < 0 || index >= this.size) {
        throw new Error('Invalid index');
      }
      const pointerToInsert = new Node(value);
      if (index === 0) {
        pointerToInsert.next = this.head;
        this.head.prev = pointerToInsert;
        this.head = pointerToInsert;
      } else if (index === this.size) {
        this.append(value);
      } else {
        let currentItem = this.head;
        for (let i = 0; i < index; i++) {
          currentItem = currentItem.next;
        }
        pointerToInsert.prev = currentItem.prev;
        pointerToInsert.next = currentItem;
        currentItem.prev.next = pointerToInsert;
        currentItem.prev = pointerToInsert;
      }

      this.size++;
    } else throw new Error(`Invalid type of value ${value}`);
  }

  delete(index) {
    if (index <= 0 || index >= this.size) {
      throw new Error('Invalid index');
    }
    let currentItem = this.head;
    let deletedNode;

    if (index === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.size - 1) {
      deletedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      for (let i = 0; i < index; i++) {
        currentItem = currentItem.next;
      }
      deletedNode = currentItem;
      currentItem.prev.next = currentItem.next;
      currentItem.next.prev = currentItem.prev;
    }

    this.size--;

    return deletedNode.value;
  }

  deleteAll(value) {
    let currentItem = this.head;

    while (currentItem) {
      if (currentItem.value === value) {
        if (currentItem === this.head) {
          this.head = this.head.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else if (currentItem === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          currentItem.prev.next = currentItem.next;
          currentItem.next.prev = currentItem.prev;
        }
        this.size--;
      }
      currentItem = currentItem.next;
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }
    let currentItem = this.head;
    for (let i = 0; i < index; i++) {
      currentItem = currentItem.next;
    }
    return currentItem.value;
  }

  reverse() {
    let currentNode = this.head;
    let temp = null;
    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }

  clone() {
    const clonedList = new List();
    let i = 0;
    while (i < this.length()) {
      clonedList.append(this.get(i));
      i++;
    }
    return clonedList;
  }

  findFirst(data) {
    let currentItem = this.head;
    let index = 0;
    while (currentItem) {
      if (currentItem.value === data) {
        return index;
      }
      currentItem = currentItem.next;
      index++;
    }
    return -1;
  }

  findLast(data) {
    let currentItem = this.tail;
    let index = this.size - 1;
    while (currentItem) {
      if (currentItem.value === data) {
        return index;
      }
      currentItem = currentItem.prev;
      index--;
    }
    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  extend(list) {
    let currentElement = list.head;
    let i = 0;
    while (i < list.length()) {
      this.append(currentElement.value);
      currentElement = currentElement.next;
      i++;
    }
  }
}

module.exports = List;
