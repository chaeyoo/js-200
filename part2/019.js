// 019 null과 undefined 이해하기

// - null: 비어 있는, 존재하지 않는 값
// => 원시 자료형: null, typeof 로 확인한 자료형: object

// - undefined: 아무 것도 할당받지 않은 상태
// => 함수에서 명시적으로 값을 반환하지 않았을 때
// => 변수에 어떠한 값도 대입하지 않고 정의했을 때 
// => 원시 자료형: undefined


var a = null;
console.log(a); // null
console.log(typeof a); // object (JS 기존 이슈)

var b = undefined;
console.log(b); // undefined
console.log(typeof b); // undefined

console.log(a == b); // true
console.log(a === b); // false