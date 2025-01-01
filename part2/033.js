// 033 심볼형 이해하기

// ES6에 새로 추가된 심볼형

const symbol = Symbol(); // Symbol 함수 호출을 통해 생성
// const symbolErr = new Symbol();  // new 키워드 사용하면 에러남

console.log(Number(3) === Number(3)); //true
console.log(Symbol('symbol') === Symbol('symbol')); //false
console.log(Symbol() === Symbol()); //false
console.log(typeof Symbol()) // symbol

console.log('-------1-------')
const nationality = Symbol('nationality');
const user = {
    name: 'jay'
};

user[nationality] = 'korean';
console.log(user[nationality]); //korean

for (key in user) {
    console.log(key); // name
}

console.log(Object.keys(user)); //[ 'name' ]
console.log(Object.getOwnPropertyNames(user)); //[ 'name' ]
console.log(JSON.stringify(user)); //{"name":"jay"}

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties); // [ Symbol(nationality) ]
console.log(user[symbolProperties[0]]); // korean

// 내용 추가
// Symbol로 만든 프로퍼티는

// - for...in 루프에서 보이지 않음
// - Object.keys()에서 제외됨
// - Object.getOwnPropertyNames()에서 제외됨
// - JSON.stringify()에서 제외됨

// => Symbol이 일종의 "숨겨진 프로퍼티"를 만드는 데 사용될 수 있다는 것을 의미

// 주요 사용 목적
// - 라이브러리나 프레임워크에서 프로퍼티 충돌 방지
// - 내부 프로퍼티를 위한 식별자로 사용
// - 객체의 내부 동작을 커스터마이즈

// 예를 들어, 여러 라이브러리를 사용할 때 각 라이브러리가 객체에 같은 이름의 프로퍼티를 추가하려고 하면 충돌이 발생할 수 있다.
// 하지만 Symbol을 사용하면 이름이 같더라도 각각 고유한 프로퍼티가 되어 충돌을 방지할 수 있습니다.