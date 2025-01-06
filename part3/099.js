// 배열.reduce((누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
//   return 누적으로 반환되는 값  
// }, 초기값)


const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
    return acc + el
}, 0);

console.log(result);