const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.floor(positiveNum));
console.log(Math.floor(negativeNum));

console.log(Math.floor(positiveNum * 10) / 10);
console.log(Math.floor(positiveNum / 10) * 10);
// 소수점 둘째 자리에서 내림
console.log(Math.floor(negativeNum * 10) / 10);
// 일의 자리에서 내림
console.log(Math.floor(negativeNum / 10) * 10); // -40