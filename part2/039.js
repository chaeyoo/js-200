// 039 스코프 이해하기

// * 스코프
// 유효범위로써 변수와 매개변수가 어디까지 유효한지를 나타냄

// 기본적으로 전역과 함수 단위로 스코프를 생성
//     - 함수 안에서 선언된 변수는 함수 블록 안에서만 접근 가능
//     - 전역에서 선언한 변수들은 코드 어디서든 접근 가능

var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c); // if 문 안에 선언되었지만 var 키워드로 선언한 변수들은 모두 함수 스코프에 정의됨
}

print();
// console.log(b); // 참조에러


// JS의 스코프는 Lexical Scope로 코드를 작성하는 시점에 스코프가 결정되어서 정적 스코프라고도 부름

var d = 'global';

function print1() {
    console.log(d);
}

function print2() {
    var d = "local";
    print1();
}

print1(); // global 
print2(); // global - 코드를 작성하는 시점에 확정되고 print1이 작성될 시점에 이미 전역 d를 참조하기 때문에
// 문자열 global이 출력된다.

