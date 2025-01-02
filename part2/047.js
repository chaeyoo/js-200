// 047 화살표 함수 이해하기

// * 화살표 함수 정의 규칙
// - 매개 변수가 하나일 경우 파라미터 괄호 생략 가능
// - 매개 변수가 없거나 둘 이상일 경우 괄호 작성 필요
// - 화살표 함수 코드 블록을 지정하지 않고 한 문장으로 작성 시 return 문을 사용하지 않아도
//   화살표 오른쪽 표현식의 계산 결과값이 반환
// - 화살표 함수 코드 블록을 지정했을 경우 반환하고자 하는 값에 return 문 작성 필요
//   return 미작성 시 undefined 반환


const double = x => x + x;
console.log(double(2));

const add = (a, b) => a + b;
console.log(add(1, 2));

const printArguments = () => {
    console.log(arguments);
}
printArguments(1, 2, 3);

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(sum(1, 2, 3));

setTimeout(() => {
    console.log('화살표함수')
}, 10)
