// 060 표준 내장 객체 이해하기

// 표준 내장 객체 (Standard Built-in Objects OR Global Objects)

// 표준 내장 객체는 전역 스코프 안에 있는 객체를 참조하여
// JS 를 실행할 때 어떤 환경이라도 전역에서 사용 가능
// 내장 함수 객체: 내장 객체 임에도 함수처럼 호출 가능

const str = new String('자바스크립트');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2022-01-01'));
console.log(JSON.parse("{}"))


// 표준 내장 객체 String, Number, Boolean이 원시 자료형과 어떻게 다른지

const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

console.log(typeof str1); // string
console.log(typeof str2); // object

console.log(str1 === '자바스크립트 200제'); // true
console.log(str2 === new String("자바스크립트 200제")); // false

console.log(str1.valueOf()); // 원시 자료형도 String 내장 객체가 지원하는 메소드 사용 가능
console.log(str2.valueOf())

// Object, Number, String, Array, Math, Date
// JSON, RegExp, Map, Set