// 028 객체 이해하기1

var family = {
    'address': 'Seoul',
    members: {},
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        }
    },
    getHeadCount: function () {
        return Object.keys(this.members).length
    }
}

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(30, 'gang', 'dog');

console.log(family.getHeadCount());


// 추가: JSON (JavaScript Object Notation)
// 자바스크립트 객체와 매우 유사한 구조를 지닌 데이터 교환 형식
// 속성의 키 이름은 큰따옴표
// 속성의 값은 오직 문자열, 숫자, 배열, true, false, null, 다른 JSON 객체만 가능능