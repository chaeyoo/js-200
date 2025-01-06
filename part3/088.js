const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];

// 배열.slice(시작인덱스, 끝인덱스)
console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)}와 ${arr.slice(4, 5)} 입니다.`)
console.log(arr.slice(0, 10));
// 배열 길이보다 큰 값을 두번째 파라미터에 넣으면 가장 마지막까지 모두 반환