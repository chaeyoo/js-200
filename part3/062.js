// 062 NaN 값 확인하기

// 맨 위 제외하고 다 false
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

console.log('------------------')
console.log(Number.isNaN(-1)); //false 숫자니까
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(new Date())); //false 숫자형형
console.log(Number.isNaN(new Date().toString()));//false 문자열은 NaN이 아님
console.log(Number.isNaN('Infinity'));//false NaN이 아닌 숫자형

function verfiyNumber(n) {
    if (Number.isNaN(n) || !n) return 0;
    return n;
}

const num1 = verfiyNumber(15);
const num2 = verfiyNumber(undefined);
const num3 = verfiyNumber(null);
const num4 = verfiyNumber(NaN);

console.log(num1 + num2 + num3 + num4);