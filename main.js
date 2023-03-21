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
    return this.list.reverse();
  }

  clone() {
    let listClone = new List();
    let i = 0;
    while (i < this.list.length) {
      listClone.append(this.list[i]);
      i++;
    }
    return listClone;
  }

  findFirst(data) {
    if (typeof data === 'string') {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] === data) return i;
      }
      return -1;
    }
  }

  findLast(data) {
    if (typeof data === 'string') {
      for (let i = this.list.length - 1; i >= 0; i--) {
        if (this.list[i] === data) return i;
      }
      return -1;
    }
  

  clear() {
    this.list.splice(0, this.list.length);
  }

  extend(list) {
    for (let i = 0; i < list.length(); i++) {
      this.list.push(list.get(i));
    }
    return this.list;
  }
}

module.exports = List;
