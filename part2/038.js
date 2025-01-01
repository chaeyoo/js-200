// 038 함수 나머지 매개변수 이해하기
// ES6에서 새로 추가된 나머지 매개변수
// 나머지 매개변수는 함수의 매개변수를 정의할 때 정해지지 않은 
// 매개변수들을 정의할 수 있게 해줌
// 나머지 매개변수는 배열이다.

function sum(...args) {
    console.log(args);
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));
    return total;
}

console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    var total = a + b;
    console.log(others)
    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}

console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));