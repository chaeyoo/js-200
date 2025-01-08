// 문자열 String 객체는 반복 가능한 객체
const str = 'hello';

for (const item of str) {
    console.log(item);
}

const iter = str[Symbol.iterator](); // iterator 메소드 호출 시 반복자 반환

console.log(iter.next()); // iter (반복자)의 next 메소드 호출하여 반환된 value값이 콘솔로 출력
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); //{ value: undefined, done: true }
