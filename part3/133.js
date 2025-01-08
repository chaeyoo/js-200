// Set 객체는 중복을 허용하지 않음

const arr = ['one', 'two', 'three', 'one', 'two', 'four'];
const s = new Set(arr); //Set(4) { 'one', 'two', 'three', 'four' }
console.log(s);

console.log([...s])