// 069 문자열 자르기 (substring)

// '문자열'.substring(시작인덱스, 종료인덱스)

const sentence = 'This will be the end of the Wakanda';

console.log(sentence.substring(13)); // 13번째부터 마지막
console.log(sentence.substring(13, 20)); // 13부터 20까지
console.log(sentence.substring(0)); // 처음부터 끝까지
console.log(sentence.substring(0, -20)); // substring은 음수를 넣으면 안됨
console.log(sentence.substring(50)); // 문자열 길이보다 큰숫자 넣으면 빈값 반환
console.log(sentence.substring(20, 13)); // 첫번째 인자가 두번째 인자보다 크면 두 개의 인수를 교환하여 수행