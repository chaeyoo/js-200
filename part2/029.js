// 029 객체 이해하기2
// 속성 접근, 추가, 수정, 삭제

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

var printMembers = function () {
    var members = family.members;
    for (role in members) {
        console.log(`role => ${role} 
            name => ${members[role].name}
            age => ${members[role].age}`)
    }
}

printMembers();

var members = family.members;
members['nephew'] = { age: 3, name: 'hyun' };
members['niece'] = { age: 10, name: 'ang' };
console.log(delete members.aunt); // true
console.log(delete members['dog']); // true

console.log(members);