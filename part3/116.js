const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringfiedStr: JSON.stringify('Kiss Carnival'),
    stringfiedBln: JSON.stringify(false),
    stringfiedArr: JSON.stringify([2003, 2017])
};

// 문자열로 변환
// {
//     stringifiedNum: '13.1',
//     stringfiedStr: '"Kiss Carnival"',
//     stringfiedBln: 'false',
//     stringfiedArr: '[2003,2017]'
// }

console.log(testStringify);

for (let key in testStringify) {
    console.log(`--------------${key}--------------`);
    console.log(typeof testStringify[key]); // string
    console.log(testStringify[key]);
}

console.log(`--------------stringfyObj--------------`);
const obj = {
    drama: 'PET',
    season: 2017,
    casting: ['koyuki', 'matsumoto jun'],
    character: ['sumire', 'momo']
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj)); //{"drama":"PET","season":2017,"casting":["koyuki","matsumoto jun"],"character":["sumire","momo"]}
console.log(JSON.stringify(obj, ['drama', 'season'])) //{"drama":"PET","season":2017}
// 세번째 인자는 들여쓰기 시 공백 개수
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, (key, val) => {
    // key값이 season 문자열과 완전 일치하면 숫자 2003 리턴
    if (key === 'season') return 2003;
    return val;
}, 4))