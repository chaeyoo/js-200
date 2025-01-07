const str = 'To lose your path is the way to find that path';

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g; // 대상 문자열 전체에서 일치하는 모든 문자를 찾음, 가장 첫번째 인덱스 리턴 
const regex4 = /t/ig; // 대소문자 구별없이

console.log(str.search(regex1));
console.log(str.search(regex2));
console.log(str.search(regex3));
console.log(str.search(regex4));
