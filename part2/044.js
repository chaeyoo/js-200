// 044 클로저 이해하기

function createCounterClosure() {
    let count = 0;
    return {
        increase: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    }
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값: ', counter1.getCount()); // 2

counter2.increase();
console.log('counter 2의 값: ', counter2.getCount()); // 1

// 위 코드에서 counter1과 counter2의 메소드들이 다른 count 변수에 접근하는 이유는
// 다른 렉시컬 환경의 환경 레코드에서 count에 접근

// 클로저란 함수가 정의될 때의 렉시컬 환경을 기억하는 함수
// 6라인, 9라인의 increase, getCount 함수가 정의될 때 렉시컬 환경은
// createCounterClosure 실행 컨텍스트의 렉시컬 환경

// 각각의 실행 컨텍스트는 15라인과 16라인에서 각각 생성
// increase 함수와 getCount 함수는 
// createCouterClosure 실행 컨텍스트의 렉시컬 환경을 기억하고 있는 클로저가 된다.

// 대체로 실행 컨텍스트가 컨텍스트 스택에서 제거되면 해당 환경은 사라지기 마련
// 하지만 클로저가 생성되면 해당 참조가 존재하기 때문에 해당 환경은 사라지지 않음
// 예제에서는는 counter1과 counter2가 전역변수에 할당되어 참조가 존재