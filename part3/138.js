// Promise는 객체로 언젠가 완료될 일
// 완료되면 하나의 값을 결과로 반환하는데 실패하여 정상적인 값 대신 실패의 이유를 반환

// Promise 객체의 세가지 상태
// 대기중 Pending: 결과가 없는 상태, 약속을 했으나 약속에 대한 결과가 나오지 않은 상태
// 이행됨 Fulfilled: 비동기 처리가 성공적으로 완료되어 약속을 "이행한" 상태, 이때 결과로 "하나의 값"이 전달
// 거부됨 Rejected: 비동기 처리가 실패한 상태, 약속이 거부되고 그 결과로 "거절된 이유를 전달"

// Promise 객체는 다음 두 가지 메소드를 가짐
//1. then(onFulfilled, onReject): 약속이 완료되었을 때 호출할 함수들을 정의
// 첫번째 인자로 전달된 함수는 약속이 성공적으로 이행됐을 떄 호출
// 두번째 인자로 전달된 함수는  거부되었을 때 호출
// 두 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달

// 2. catch(onReject): 약속이 거부되었을 떄 호출될 함수 등록 

function promiseForHomework(mustDo) {
    // Promise 객체는 new Promise로 생성, 계산될 코드를 담은 함수를 인자로 전달
    // 이 함수에는 resolve, reject 매개 변수를 가짐

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing homework');
            // mustDo에 의해 Promise에 대한 성공과 실패를 결정
            // 인자값의 유무에 따라 resolve또는 reject 함수 호출
            if (mustDo) {
                // resolve는 약속을 성공 시킬 수 있는 함수, 호출시에 결과를 인자로 전달
                resolve({
                    result: 'homework-result'
                })
            } else {
                // reject는  실패 처리를 위한 함수로 호출 시 실패 이유를 함께 전달
                reject(new Error('Too lazy!'))
            }
        }, 3000)
    })
}

const promiseA = promiseForHomework(true);
console.log('promiseA created');

const promiseB = promiseForHomework();
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseB.then(v => console.log(v)).catch(e => console.error(e));