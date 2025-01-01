// 031 ES6의 향상된 객체 문법 - 속성 계산명

// 속성 계산명 (Computed Property Name)
// 대괄호 안에 식을 넣거나 변수를 대입해서 동적으로 객체 속성들을 생성

var obj = {};

for (var i = 0; i < 4; i++) {
    obj['key' + i] = i;
}

console.log(obj);

var profile = 'chole:30';
var person = {
    [profile]: true,
    [profile.split(":")[0]]: profile.split(":")[1]
}

console.log(person);