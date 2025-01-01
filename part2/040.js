// 040 함수 호이스팅 이해하기

// 호이스팅: JS에서는 함수를 선언하기 전에 호출 가능
// => 함수가 실제 호출하기 이전으로 끌어 올라간 것 처럼 동작

hello();
// 선언문
function hello() {
    console.log('안녕하세요')
}


// 표현식
hello2(); // hello2 is not a function으로 TypeError 발생
var hello2 = function () {
    console.log('안녕하세요2')
}

// hello2 함수가 호출되었을 시점에 "hello2 변수는 호이스팅이 되었고 undefined 할당"
// undefined는 호출할 수 없기 때문에 TypeError 발생
// 만약 호이스팅이 이루어지지 않았다면 ReferenceError로 hello가 선언되지 않았다고 나와야 함

// 선O표X