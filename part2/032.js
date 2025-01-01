// 032 ES6의 향상된 객체 문법 - 비구조화 할당

var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

var { a, c } = obj;

console.log(`a >> ${a}`);
console.log(`c >> ${c}`);


// 기존의 속성명의 값을 가져와서 새로운 변수명으로 할당하여 정의 가능
// 구분자 :을 두고 왼쪽에는 객체의 속성명 오른쪽에는 새로운 변수명
// 기본값을 설정할 수 있어서 undefined로 값이 없는 경우에는 기본값을 할당한다
var { a: newA = 10, f: newF = 5 } = obj;
console.log(`newA >> ${newA}`)
console.log(`newF >> ${newF}`)

console.log('====배열의 비구조화 할당====')
// 배열의 비구조화 할당

var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;
console.log(`0) b >>> ${b}`)
console.log(`0) c >>> ${c}`)
console.log(`0) rest >>> ${rest}`)

var [a = 10, f = 9] = [1];
console.log(`1) a >>> ${a}`)
console.log(`1) f >>> ${f}`)

function getArr() {
    return [1, 2, 3, 4, 5, 6]
}

[a, , , , , f] = getArr();
console.log(`2) a >>> ${a}`) // 1
console.log(`2) f >>> ${f}`) // 6