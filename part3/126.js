// Map은 ES6 부터 표준으로 추가된 데이터 집합체
// key-value 한쌍 저장, 중복키 허용x, 반복 가능한 객체

// Map과 Object 차이
// Map 객체의 키는 다양한 자료형으로 정의 가능, Object는 문자, Symbol만 가능
// Map 객체에는 Symbol.Iterator 기본 탑재, Object에는 없음
const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log(map.get('one'));
console.log(map.has('one'));
map.delete('one');


console.log(map.has('one'));
console.log(map.has('two'));


