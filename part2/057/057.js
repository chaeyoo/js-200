// 057 모듈 기본값 정의하고 가져오기

// ES6 모듈 시스템에서는 default 키워드를 사용하여 
// 모듈에서 기본으로 내보내는 값을 정의할 수 있다
// 숫자, 문자, 불리언 같은 기본형 가능, 객체, 함수, 클래스 같은 참조형도 가능


// export default 'hello';


//  export default function hello(name) {
//     console.log('hello' + name);
//  }

export default class Hello {
    constructor(greeting) {
        this.greeting = greeting
    }
    hi(name) {
        console.log(`${this.greeting} ${name}`)
    }
}

// default 키워드는 하나의 모듈에서 한 번만 사용 가능