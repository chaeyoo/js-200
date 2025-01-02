// 049 생성자 함수 이해하기

function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게 ' + this.subject + '를 가르칩니다.');
    }
}

// JS 함수는 객체를 생성하기 위한 방법으로도 사용
// new 키워드를 사용하여 함수를 호출하면 return 문 없이도 새로운 객체 반환

// 객체를 생성하는 역할을 하는 함수를 생성자 함수
// 생성자 함수는 new를 사용하지 않으면 일반적인 함수와 동일하게 동작하여 새로운 객체 반환x

// 인스턴스: 객체에 타입이 적용되면 해당 객체는 그 타입의 인스턴스


const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay);
jay.teach('bbo');
console.log('---')
console.log(jay.constructor); // 객체를 만든 생성자 함수를 가리킴
console.log(jay instanceof Teacher);

// new 키워드를 뺴고 Teacher 생성자 함수를 호출
// ** 이 때 생성자 함수의 this 는 전역 객체를 가리킴
// 전역 객체에 name과 age, subject 속성으로 전달받은 매개변수 할당
const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2); // undefined: 새로운 객체가 반환되지 않아서 undefined

// 전역 변수의 age를 참조해 콘솔에 30이 출력
console.log(age);
console.log(subject);


// 생성자 함수의 new 호출을 통한 객체의 생성 과정
// 1. 빈 객체를 만듦
// 2. 만든 빈 객체를 this에 할당
// 3. 생성자 함수 바디의 코드를 실행 (this에 속성 및 메소드 추가)
// 4. 만든 빈 객체의 __proto__에 생성자 함수의 prototype 속성을 대입
// 5. this를 생성자의 반환값으로 변환