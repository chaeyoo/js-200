// Array 객체는 반복 가능한 객체

const products = [{ name: '가방' }, { name: '노트북' }];

for (const item of products) {
    console.log(item.name);
}

const iter = products[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); //{ value: undefined, done: true }