// 070 문자열 자르기 (substr)

// '문자열'.substr(시작인덱스, 길이)

const sentence = 'Wakanda Foever!!!';

 console.log(sentence.substr(8)); // 8번째 인덱스부터 마지막까지
 console.log(sentence.substr(8, 7)) // 8번째 인덱스부터 뒤이어 7개 문자열
 console.log(sentence.substr(0)); // 첫번째 문자부터 끝까지 문장전체

 console.log(sentence.substr(-10)); // 첫번째 인자 음수를 넣으면 문자열 뒤에서부터 위치 결정, 뒤에서 10번째 문자부터 끝까지
 console.log(sentence.substr(0, -3)); // 두번째 인자에 음수를 넣으면 비정상적 수행
 console.log(sentence.substr(30)); // 문자열 길이 보다 큰 수를 입력하면 빈값 반환
 console.log(sentence.substr(0, 30)); // 두번째 인자가 문자열 길이보다 크면 문장 전체