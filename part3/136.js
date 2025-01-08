// JS에서 setTimeout은 글로벌 객체에 내장된 메소드
// 브라우저에서는 Window 전역 객체의 메소드로 정의
// 서버사이드 Node.js에서는 GLOBAL이라 불리는 전역 객체의 메소드


const timer = {
    run: function () {
        if (this.t) console.log('이미 실행된 타이머가 있습니다');
        this.t = setTimeout(function () {
            console.log('1초 뒤에 실행')
        }, 1000)
    },
    cancel: function () {
        console.log('타이머 제거')
        if (this.t) clearTimeout(this.t); // setTimeout으로 미리 정의한 타이머 작업을 취소시킴
        this.t = undefined;
    }
}

timer.run(); // 1초가 지나기 바로 전 timer 객체의 속성 cancel 함수를 실행하여 실행 계획 취소, 이때의 this.t는 실행x
timer.cancel();
timer.run(); // 이것만 실행

setTimeout(() => {
    console.log('JavaScript');
}, 0); // 지연 시간이 아무리 0이어도 console.log('200제') 코드 다음으로 실행 스택에 쌓임

console.log('200제');

// 콘솔 결과
// 200제
// JavaScript
