// 068 문자열자르기1 slice

// '문자열'.slice(시작인덱스, 종료 인덱스)

const sentence = 'The sun will shine on us again';

console.log(sentence.slice(13)); // 13번째부터 마지막까지지
console.log(sentence.slice(13, 24));
console.log(sentence.slice(0)); // 처음부터 끝까지 문장 수행

// 음수는 인덱스를 문자열 뒤에서부터 시작하여 계산
// 인덱스 0은 첫번째 문자 -23은 뒤에서부터 23번째 문자
console.log(sentence.slice(0, -23));

console.log(sentence.slice(50)); // 문자열 길이보다 큰숫자 넣으면 빈값 반환
console.log(sentence.slice(7, 2)); // 첫번째가 두번째 인자보다 크면 제대로 수행되지 않음 
