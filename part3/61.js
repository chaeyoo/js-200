// 061 자료형 확인하기 (typeof, instanceof)

const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function () { };
const arr = [10, 200, 4000];
const obj = { a1: 'test' };
const empty = null;
const notCalled = undefined;

console.log(typeof str);
// string

console.log(typeof strObj);
// object

console.log(typeof num);
// number

console.log(typeof numObj);
// object

console.log(typeof bool);
// boolean

console.log(typeof boolObj);
// object

console.log(typeof func);
// function

console.log(typeof arr);
// object

console.log(typeof obj);
// object

console.log(typeof empty); // null의 타입은 object
// object

console.log(typeof notCalled);
// undefined

console.log('instanceof========')
console.log(str instanceof String); //false
console.log(strObj instanceof String); //true
console.log(func instanceof Function);
console.log(empty instanceof Object); // false null은 Object를 상속받은 객체가 아니다!