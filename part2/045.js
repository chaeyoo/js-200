// 045 객체 속성 기술자 이해하기

// 속성 기술자: JS의 모든 객체 속성은 자기 자신에 대한 정보를 담고 있는 속성 기술자를 가짐
let user = { name: 'jeado' };
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);

let user2 = {};
// Object.defineProperty: 속성 정의
Object.defineProperty(user2,
    "name", {
    value: 'jeado', // 값
    enumerable: true, // for...in이나 Objects.keys 메소드 같이 속성 나열 시 나열 가능 여부 (false는 나열x)
    configurable: true, // 속성 기술자 변경할 수 있는지 여부
    writable: false, // 값을 변경할 수 있는지 여부
});
console.log(user2.name);

user2.name = 'bbo';
console.log(user2.name); // jeado

let user3 = {
    name: "jeado",
    toString: function () {
        return this.name;
    }
}

Object.defineProperty(user3, "toString", {
    enumerable: false
});

for (let key in user3) {
    console.log(key); // toString 안나옴
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value: 'jeado',
    configurable: false // 재정의 불가
});

Object.defineProperty(user4, "name", { writable: true }) // TypeError: Cannot redefine property: name