// 043 스코프 체인 이해하기

// * 실행 컨텍스트
// - 코드가 실행되기 위해 필요한 정보를 가짐
// - 실행 가능한 코드가 실행될 때 생성
// - 실행 가능한 코드: 전역 코드 / 함수 코드 / eval / 모듈 코드
//      => 프로세스: 전역 코드 먼저 실행 > 전역 실행 컨텍스트 생성 > 함수 호출 > 새로운 실행 컨텍스트
// - 스택을 이용하여 실행 컨텍스트 관리
//      => 새로운 실행 컨텍스트가 생성되면 스택에 쌓이고 
//           실행 중인 코드가 종료되면 해당 실행컨텍스트를 스택에서 제거


// * 렉시컬 환경
// - 실행 컨텍스트는 렉시컬 환경을 가짐
// - 렉시컬 환경은 환경 레코드와 외부 렉시컬 환경으로 구성

// ExecutionContext = {
//     LexicalEnvironment: {
//         EnvironmentRecord: {식별자-값},
//         OuterLexicalEnvironment: 참조 (자신의 실행 환경을 감싸는 외부 실행 환경에 대한 참조)
//     }
// }


var person = "harin";
function print() {
    var person2 = "jay";
    function innerPrint() {
        console.log(person);
        console.log(person2);
    }
    innerPrint();
    console.log("Print finished");
}

print();
console.log("finished")

// ** 스코프 체인으로 식별자 찾기
// innerPrint() 함수가 호출될 때 
// innerPrint() 내부의 person과 person2 변수는 innerPrint의 실행컨텍스트의 환경레코드에는 없다
// 자신의 실행 컨텍스트에 없으면 외부 렉시컬 환경의 참조를 통해 연결된 print의 실행 컨텍스트에서 해당 식별자를 찾음
// person는 print의 실행 컨텍스트의 환경 레코드에서 찾음
// person는 전역 실행 컨텍스트에 가서 값을 찾음음