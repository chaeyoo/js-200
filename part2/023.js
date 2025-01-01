// 023 논리 연산자

console.log(true && true) // true
console.log(true && false) // false

console.log('문장' == '문장' && 5 == 5) // true
console.log(5 == 5 && '다른문장1' == '다른문장2') // false

console.log(true || false) // true
console.log(false || false) // false
console.log('문장' == '문장' || 5 == 10) // true

console.log(!true) // false
console.log(!false) // true

// 5와 문장은 항상 true인 값
console.log(!5)
console.log(!'문장')

// not 연산자에 한 번 더 not 연산자 처리
console.log(!!5)
console.log(!!'문장')


// boolean 자료형이 아니어도 값을 논리 연산자로 처리하면 참인지 거짓인지 구분 가능
// 값의 정보가 유효한 경우 true
// ex) 3 10 '문자' true [1, 2, 3] {tom: 'boy'} function() {}

// 값의 정보가 비어있는 경우 유효하지 않다고 판단되어 false
// ex) false 0 -0 "" NaN null undefined