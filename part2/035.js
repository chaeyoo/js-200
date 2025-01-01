// 035 예외 처리하기

// JS 코드를 실행하다가 에러가 발생하면 그 즉시 중단
// 이를 대비하여 예외 처리가 반드시 필요
// throw, try-catch-finally

// * 에러의 두가지 종류
// 1) 예상치 못한 에러
// - 
// 2) 개발자가 의도한 에러
// - throw문 사용: 고의로 에러를 발생시켜 예외 상황을 알림
// - throw 문이 실행되면 실행되고 있던 블록을 빠져나감
// - 예외 상황을 미리 파악하고 에러를 발생시켜 이후 코드가 실행되지 않도록 했지만
//   결국 에러가 발생한 것이므로, 프로그램이 중단되는 것은 막을 수 없음

// - try-catch-finally 문을 사용하여 try 블록 안에서 발생된 에러를 잡고
// - catch 문으로 제어권으로 넘김 / try블록에서 발생된 에러 정보는 catch 문의 변수로 전달되어
//   어떤 에러가 발생했는지 확인 가능
// - finally 블록은 에러 발생 여부와 상관없이 실행

// throw
function checkNumber(val) {
    if (typeof val !== "number") throw '유효하지 않은 값입니다.'
    console.log('숫자형 값으로 확인');
}

checkNumber(100);
// checkNumber('문자형'); // 여기서 프로그램 종료 되어버림
console.log('완료');

console.log('try-catch-finally')

try {
    checkNumber('문자형임');
} catch (error) {
    console.error(error, '<<< ERROR');
} finally {
    console.log('프로그램 종료');
}