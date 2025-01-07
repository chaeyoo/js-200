const val = 573.926;

console.log(Math.round(val));
// 소수점 두번째 자리에서 반올림
console.log(Math.round(val * 10) / 10);

// 소수점 세번째 자리에서 반올림
console.log(Math.round(val * 100) / 100);

// 일의 자리에서 반올림 
console.log(Math.round(val / 10) * 10);
// 십의 자리에서 반올림
console.log(Math.round(val / 100) * 100);

