// 050 프로토타입 기반 상속 이해하기

// JS에서 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입 객체를 상속
// => 모든 인스턴스는 생성자 함수의 프로토타입 객체의 속성과 메소드를 사용 가능

// 모든 함수는 prototype 속성으로 프로토타입 객체를 가짐 
// 모든 객체는 __proto__ 속성을 가짐짐

function Storage() {
    this.dataStore = {};
}

// Storage 생성자 함수의 프로토타입 객체에 put 메소드 추가
Storage.prototype.put = function (key, data) {
    this.dataStore[key] = data;
}

Storage.prototype.getData = function (key) {
    return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001', { name: '키보드', price: 2000 });
console.log(productStorage.getData('id001'));

// RemovableStorage 생성자 함수 정의
function RemovableStorage() {
    Storage.call(this) // Storage 함수를 호출하면서 this를 전달=> Storage 생성자 함수 호출하면서 this 전달
}
// Storage 생성자 함수가 호출되면서 
// RemovableStorage 생성자 함수의 this에 
// Storage 생성자 함수에서 정의한대로 dataStore 가 속성으로 추가 됨


// Storage 함수의 프로토타입 객체가 RemovableStorage 함수의 프로토타입 객체의 __proto__에 할당
// 상속 관계 형성
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function () {
    this.dataStore = {}
}

// RemoveStorage 생성자 함수에 의해 만들어지는 인스턴스들은
// 내부에 없는 메소드를 RemovableStorage 생성자 함수의 프로토타입에서 먼저 찾고
// 없으면 Storage 생성자 함수의 프로토타입에서 찾고
// 없으면 Object.prototype에서까지 찾게 된다.
// => 프로토타입 객체가 서로 연결되어 있다 하여 프로토타입 체인이라고 함함
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', { name: '키보드', price: 2000 });
productStorage2.removeAll();

const item2 = productStorage2.getData('id001');
console.log(item2);