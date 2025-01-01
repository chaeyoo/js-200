// 006 자바스크립트 문장 배우기

// JS 구문의 패턴은 표현식과  명령문으로 나뉨

// 표현식은 값을 생성
(3 + 12) / 5
declareVariable
greeting('hello')

// 명령문은 일종의 행동, 행위를 수행하게 하는 코드
// if, if-else, for, switch


// 프로그래밍에서 문장은 일련의 명령문으로 구성
// 명령문을 작성하는 데 때로 표현식이 대신 쓰여질 수 있음 
// => 표현식 명령문 (Expression Statement)
function greeting() {
    "hello"
    "Chloe" + 3
    greeting()
}


// 하지만 값이 필요해서 표현식을 작성하는 데 명령문이 대신 쓰여질 수는 없음
// greeting(if (true) {console.log("unavailable")})
