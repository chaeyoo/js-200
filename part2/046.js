// 046  Get, Set을 통한 속성 접근 관리하기

// 1. 속성 기술자를 통해 user 객체의 age 속성 정의
// 값에 접근하는 방식을 정의하는 객체 => 접근 기술자 (get과 set을 메소드로 가짐)

let user = {};
Object.defineProperty(user, "age", {
    get: function () {
        return this._age;
    },
    set: function (age) {
        if (age < 0) {
            console.error('0보다 작은 값은 올 수 없습니다.');
        } else {
            this._age = age;
        }
    },
    enumerable: true
});

// 이름에 _를 붙이는 것은 암묵적으로 비공개 (Private) 속성임을 나타냄

user.age = 10
console.log(user.age);

user.age = -1

// 2. 객체를 정의할 때 name 속성의 접근 기술자 정의
let user2 = {
    get name() {
        return this._name;
    },
    set name(val) {
        if (val.length < 3) {
            throw new Error('3자 이상이어야 합니다')
        }
        this._name = val;
    }
}

user2.name = 'harin';
console.log(user2.name);

user2.name = 'ha';