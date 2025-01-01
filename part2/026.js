// 026 자료형 변환 이해하기

console.log("5" + 1);
console.log(typeof "5" + 1);

console.log("There is " + 5);
console.log("Five" * 2); // NaN

console.log('연산자를 이용하여 형변환')
var str = 5 + "1";
console.log(str);
console.log(typeof str);

var num = +str; // 단항 양수를 통해 문자형을 숫자형으로 바꿀 수 있다.
console.log(num);
console.log(typeof num); // number

console.log('함수를 이용하여 형변환');
str = String(num);
console.log(str);
console.log(typeof str);


num = Number(str);
console.log(num);
console.log(typeof num);