// 042 const로 상수 선언하기
const URL = 'http://js.com';
// URL = 'http://yest.com'; // TypeError: Assignment to constant variable.

if (true) {
    const URL2 = 'http://js./com';
}
// console.log(URL2); // ReferenceError: URL2 is not defined


const CONST_USER = { name: 'jay', age: 30 };
console.log(CONST_USER.name, CONST_USER.age);

// 객체의 내부 상태 변경 가능
CONST_USER.name = 'jays';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER = { name: 'bbo' } // TypeError: Assignment to constant variable (재할당 불가)

