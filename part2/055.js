// 055 모듈 이해하기

// 모듈은 파일이나 코드의 묶음 단위로 애플리케이션의 구성요소
// 모듈 단위로 코드 재사용 가능, 작은 기능 단위로 분리하여 관리 가능

// ES5.x 버전까지 모듈의 정의를 표준으로 제공하지 않음
// 네임스페이스 패턴을 통해 모듈 정의

// 함수를 정의함과 동시에 실행하는 즉각 호출 패턴으로 구현
var namespaceA = (function () {
    var privateVariable = '비공개 변수';
    return {
        publicApi: function () {
            console.log(privateVariable + '에 접근할 수 있습니다');
        }
    }
})();

namespaceA.publicApi(); // 외부에서 호출 가능

// var 키워드로 생성된 변수의 스코프는 함수이기 때문에 네임스페이스 안에서 정의된 변수들은 외부에서 접근 불가
// 함수 안에 선언된 변수는 함수 내부에서만 접근 가능하여 비공개 영역이 됨


// 함수로 반환되는 객체는 namespaceA에 할당되고 외부에서 접근이 가능하므로
// 해당 객체의 속성과 메소드들은 공개 API가 된다.