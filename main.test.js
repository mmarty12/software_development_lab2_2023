'use strict';

const DoubleLinkedList = require('./main.js');

test('Empty list length is 0', () => {
  const list = new DoubleLinkedList();
  expect(list.length()).toBe(0);
});

test('1 element was added. New list length is 1', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  expect(list.length()).toBe(1);
});

test('The appended element has invalid type', () => {
  const list = new DoubleLinkedList();
  const error1 = () => list.append(1111);
  const error2 = () => list.append(11, 22);
  const error3 = () => list.append([444]);
  expect(error1).toThrow();
  expect(error2).toThrow();
  expect(error3).toThrow();
  expect(list.length()).toBe(0);
});

test('The value is inserted in the defined position', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  list.insert('E', 3);
  expect(list.length()).toBe(5);
  expect(list.get(0)).toBe('A');
});

test('The value to be inserted has invalid type', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  const error1 = () => list.insert(1111, 1);
  const error2 = () => list.insert(11, 2);
  const error3 = () => list.insert([444], 0);
  expect(error1).toThrow();
  expect(error2).toThrow();
  expect(error3).toThrow();
});

test('The index to be inserted is out of range', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  const error1 = () => list.insert('1111', 111);
  const error2 = () => list.insert('11', 2222);
  const error3 = () => list.insert('abc', -1);
  expect(error1).toThrow();
  expect(error2).toThrow();
  expect(error3).toThrow();
});

test('Delete a specific element from the list', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.delete(2);
  expect(list.length()).toBe(2);
});

test('The index to be deleted is out of range', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  const error1 = () => list.delete(111);
  const error2 = () => list.delete(2222);
  const error3 = () => list.delete(-1);
  expect(error1).toThrow();
  expect(error2).toThrow();
  expect(error3).toThrow();
});

test('Return of the deleted element', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  expect(list.delete(1)).toBe('B');
});

test('The deleteAll method deletes all nodes with the specified value', () => {
  const list = new DoubleLinkedList();

  list.append('1');
  list.append('2');
  list.append('3');
  list.append('3');
  list.append('4');
  list.append('3');
  list.deleteAll('3');
  expect(list.length()).toBe(3);
});

test('Deleting an unexisting value - no changes', () => {
  const list = new DoubleLinkedList();
  list.append('1');
  list.append('1');
  list.append('1');
  list.deleteAll('22');
  expect(list.length()).toBe(3);
});

test('After appending an element to the list, we can get this element', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  expect(list.get(1)).toBe('B');
});

test('The index to be get is out of range', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  const error1 = () => list.get(5);
  const error2 = () => list.get(2222);
  const error3 = () => list.get(-1);
  expect(error1).toThrow();
  expect(error2).toThrow();
  expect(error3).toThrow();
});

test('Reversed list attempt', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.reverse();
  expect(list.get(0)).toBe('C');
  expect(list.get(1)).toBe('B');
  expect(list.get(2)).toBe('A');
});

test('Reversed list twice - no changes', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.reverse();
  list.reverse();
  expect(list.get(0)).toBe('A');
  expect(list.get(1)).toBe('B');
  expect(list.get(2)).toBe('C');
});

test('A cloned list contains the same values as the original one', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  const copy = list.clone();
  expect(copy.length()).toBe(list.length());
  expect(copy.get(0)).toBe(list.get(0));
  expect(copy.get(1)).toBe(list.get(1));
  expect(copy.get(2)).toBe(list.get(2));
  expect(copy.get(3)).toBe(list.get(3));
});

test('Find the first element with a specific value', () => {
  const list = new DoubleLinkedList();
  list.append('1');
  list.append('2');
  list.append('2');
  list.append('3');
  expect(list.findFirst('2')).toBe(1);
});

test('If the searched element does not exist, findFirst method returns -1', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  expect(list.findFirst('D')).toBe(-1);
});

test('If the list is empty, findFirst method returns -1', () => {
  const list = new DoubleLinkedList();
  expect(list.findFirst('D')).toBe(-1);
});

test('Find the last element with a specific value', () => {
  const list = new DoubleLinkedList();
  list.append('1');
  list.append('2');
  list.append('2');
  list.append('3');
  expect(list.findLast('2')).toBe(2);
});

test('If the searched element does not exist, findLast method returns -1', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  expect(list.findLast('D')).toBe(-1);
});

test('If the list is empty, findLast method returns -1', () => {
  const list = new DoubleLinkedList();
  expect(list.findLast('Z')).toBe(-1);
});

test('Clear method makes the original list an empty one', () => {
  const list = new DoubleLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  list.clear();
  expect(list.length()).toBe(0);
});

test('The extension of the list with another one', () => {
  const list = new DoubleLinkedList();
  list.append('1');
  const list2 = new DoubleLinkedList();
  list2.append('2');
  list.extend(list2);
  expect(list.length()).toBe(2);
  expect(list.get(0)).toBe('1');
  expect(list.get(1)).toBe('2');
});

test('Changing list after extending does not change the list used to extend', () => {
  const list = new DoubleLinkedList();
  list.append('1');
  const list2 = new DoubleLinkedList();
  list2.append('2');
  list.extend(list2);
  list.delete(1);
  expect(list2.length()).toBe(1);
  expect(list2.get(0)).toBe('2');
});
