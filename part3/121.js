// RegExp 객체의 exec 메소드는 정규표현식과 일치하는 문자열을 찾아 배열로 반환

const str = 'Java is not in Javascript';

const result1 = /java/ig.exec(str); // 대소문자 구분 없이 java 문자를 찾는 정규 표현식
console.log(result1[0]);
console.log(result1.index); // Java가 발견된 시작 인덱스
console.log(result1.input); // 원본 문자열

