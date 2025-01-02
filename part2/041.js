// 041 let으로 변수 선언하기
// ES6에서 let 키워드가 나오면서 변수 선언 시 변수의 유효 범위를 블록 범위로 지정

if (true) {
    var functionScopeValue = "global";
    let blockScopeValue = "local";
}

console.log(functionScopeValue);
// console.log(blockScopeValue); // ReferenceError: blockScopeValue is not defined


let value = "바깥값";
if (true) {
    console.log(value); // ReferenceError: Cannot access 'value' before initialization
    let value = "안쪽값";
}

// - let으로 선언한 변수도 호이스팅 됨
// - if 블록 안에서 let으로 변수를 정의했기 때문에 value는 if 블록문 안에 위쪽으로 호이스팅

// - 하지만 var와는 다르게 undefined가 할당되는게 아니라
// - 블록의 시작부터 선언이 이루어진 라인까지 일시적으로 접근을 막음 (TDZ)