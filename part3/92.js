// 배열.sort(function (a, b) {
//   return 비교값;
// })

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];

const objArr = [
    { id: 2, name: 'Leo' },
    { id: 0, name: 'Daniel' },
    { id: 3, name: 'Asher' },
    { id: 4, name: 'Cloe' },
    { id: 1, name: 'Cloe' }
];


numArr1.sort(function (a, b) { return a - b });
numArr2.sort(function (a, b) { return b - a });

objArr.sort(function (a, b) {
    if (a.name > b.name) return 1; // a를 b 앞에 정렬
    else if (b.name > a.name) return -1; // b를 a 앞에 정렬
    else return 0;
})

console.log(`오름차순: ${numArr1}`);
console.log(`내림차순: ${numArr2}`);
console.log(objArr);