const List = require('./main.js');

const list1 = new List();

list1.append('A');
list1.append('B');
list1.append('C');
console.log('Length of the list with 3 adppended elements:', list1.length());

list1.insert('D', 2);
console.log('Inserted element:', list1.get(2));
console.log('New length with the inserted element', list1.length());
console.log(
  'New list elements together with the inserted one:',
  list1.get(0),
  list1.get(1),
  list1.get(2),
  list1.get(3)
);

list1.delete(0);
console.log('The deleted element:', list1.get(0));
console.log('New length after the element was deleted', list1.length());
console.log(
  'New list elements after the element was deleted:',
  list1.get(0),
  list1.get(1),
  list1.get(2)
);

list1.append('A');
list1.insert('A', 0);

console.log(
  'Length after adding 2 elements with the same value',
  list1.length()
);
list1.deleteAll('A');
console.log(
  'Length after deleting all elements with the same value',
  list1.length()
);

console.log('List1 elements:', list1.get(0), list1.get(1), list1.get(2));
const list2 = list1.clone();
console.log('Clonned list length:', list2.length());
console.log('Clonned list elements:', list2.get(0), list2.get(1), list2.get(2));
list2.reverse();
console.log(
  'Reversed list2 elements:',
  list2.get(0),
  list2.get(1),
  list2.get(2)
);
console.log('List1 has no changes:', list1.get(0), list1.get(1), list1.get(2));

const list3 = new List();
list3.append('A');
list3.append('A');
list3.append('A');
list3.append('A');
console.log('List3:', list3.get(0), list3.get(1), list3.get(2), list3.get(3));
console.log('Returned index of the first found element:', list3.findFirst('A'));
console.log('Returned index of the last found element:', list3.findLast('A'));

list3.clear();
console.log('Cleared list3 length:', list3.length());

console.log('list1 length:', list1.length());
console.log('list2 length:', list2.length());
list1.extend(list2);
console.log('Length of the extended list1 with list2:', list1.length());
