const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i; // a부터 f 사이의 문자를 찾는 range 표현식,  whitespace가 나타날 때까지의 단어를 반환
const findAllRangeRegex = /([a-f])\w+/gi; // 대소문자 구분없이 a부터 f 사이 알파벳으로 시작하는 모든 단어를 배열로 반환

console.log(str.match(sensitiveCaseRegex)); // 문자열 'to'와 대소문자까지 완전히 일치하는 문자열
console.log(str.match(ignoreAllCaseRegex)); // T와 t, O와 o는 같은 문자열로 인식

console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));