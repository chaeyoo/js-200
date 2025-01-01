// 030 ES6의 향상된 객체 문법 - 단축 속성명

// 변수가 미리 준비되어 있는 경우 활용 가능
// 변수명으로 키와 값을 한번에 정의한다.

var address = 'seoul';
var members = {};

var addFamily = function (age, name, role) {
    this.members[role] = { age, name }
}

var getHeadCount = function () {
    return Object.keys(members).length;
}

var family = { address, members, addFamily, getHeadCount };


family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(30, 'gang', 'dog');

console.log(family.getHeadCount());

console.log(family);