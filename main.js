'use strict';

class List {
  list = [];

  length() {
    return this.list.length;
  }

  append(data) {
    if (typeof data === 'string') {
      this.list.push(data);
    } else throw new Error(`Invalid type of data`);
  }

  insert(data, index) {
    if (typeof data === 'string') {
      if (index < 0 || index > this.list.length) {
        throw new Error(`Invalid index number`);
      }
      this.list.splice(index, 0, data);
    } else throw new Error(`Invalid type of data`);
  }

  delete(index) {
    if (index < 0 || index > this.list.length) {
      throw new Error(`Invalid index number`);
    }
    return this.list.splice(index, 1)[0];
  }

  deleteAll(data) {
    let i = 0;
    while (i < this.list.length) {
      if (this.list[i] === data) {
        this.list.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  get(index) {
    if (index < 0 || index > this.list.length) {
      throw new Error(`Invalid index number`);
    }
    return this.list[index];
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
