const map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('three', 3);

const keys = map.keys();
const values = map.values();
const entries = map.entries();

console.log(keys); //[Map Iterator] { 'one', 'two', 'three' }
console.log(values); //[Map Iterator] { 1, 2, 3 }
console.log(entries);//[Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);