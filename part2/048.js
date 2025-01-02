// 048 JS 객체지향 프로그래밍 이해하기

// 프로그램을 객체들로 구성하고 객체들 간에 서로 상호작용하도록 작성하는 방법
// 객체지향에서 객체란 식별 가능한 구체적인 사물 또는 추상적 개념

// 객체는 특징적 행동과 변경 가능한 상태를 가짐


const teacherJay = {
    name: '제이',
    age: 30,
    teachJavaScript: function (student) {
        student.gainExp();
    }
}


const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function () {
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavaScript(studentBbo);
console.log(studentBbo.exp);

// 분류(classification): 객체 지향에서는 무수히 많은 객체들을 공통적 특성을 기준으로 객체를 묶어서 하나의 타입으로 정의

// JS는 프로토타입 기반으로 객체지향 프로그래밍 지원
// 프로토타입으로 객체에 공통 사항 적용 => 모든 객체는 다른 객체의 원형 (Prototype) 이 될 수 있다.
// 특징을 묘사하는 원형 객체를 만들고 이 원형 객체에 기반하는 여러 객체들을 만들면 모두 같은 특징을 가지게 됨

const studentProto = {
    gainExp: function () {
        this.exp++
    }
}

const harin = {
    name: 'harin',
    age: 10,
    exp: 0,
    __proto__: studentProto
}

const bbo = {
    name: 'bbo',
    age: 20,
    exp: 10,
    __proto__: studentProto
}


bbo.gainExp();
harin.gainExp();
harin.gainExp();

console.log(harin);
console.log(bbo);

// 모든 자바스크립트 객체는 __proto__ 속성을 가지는 데 예제 코드에서 처럼 
// 별도로 __proto__ 속성에 다른 객체를 할당하지 않으면 기본적으로 Object.prototype 객체가 연결