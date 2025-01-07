// +기호는 표현식 패턴에 하나 이상 일치하는  모든 문자열 확인
const numRegExp = /[0-9]+/;
//  /[0-9]+/은 대입된 문자열이 숫자 0~9 중에서 하나라도 일치하는지 확인하는 표현식


// {} 중괄호는 일반적으로 표현식에서 개수를 가리킴
// d{3}은 오직 숫자로 구성된 문자 3개
// d{3,4}은 오직 숫자로 구성된 문자가 3개 또는 4개
// 휴대전화번호 패턴
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;

// ()소괄호는 그룹 : 공백으로 단어와 단어를 구분하는 역할과 유사 => 원하는 부분까리만 표현식 적용
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegExp.test('010-3003-0046'));
console.log(phoneRegExp.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-test'));