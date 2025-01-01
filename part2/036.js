// 036 arguments 객체 이해하기

// 매개변수는 함수 선언시 작성되는 변수
// arguments 전달 인자는 함수가 호출될 때 전달되는 값

// JS는 매개 변수와 전달인자의 개수가 달라도 에러를 발생하지 않음
// 매개변수와 무관하게 함수 호출 시 더 많은 인자를 전달할 수 있음
// 매개변수 외에 함수에서만 사용 가능한 특별한 객체: arguments

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]; // arguments 객체는 배열과 유사하게 인덱스로 접근 가능
    }

    console.log(arguments);
    // arguments 객체가 배열이 아님을 확인
    console.log(arguments instanceof Array); // arguments가 Array 클래스에 속하는지 확인 (false)

    return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);


function testArg() {
    // 객체를 배열로 바꾸기 위해
    var newArr = Array.prototype.slice.call(arguments); // 배열의 프로토타입에 정의된 slice 메소드 호출
    console.log(newArr); // arguments 객체의 요소들을 복사하는 새로운 배열이 만들어짐
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b')); // arguments는 배열이 아니어서 에러
}

testArg('a', 'b');