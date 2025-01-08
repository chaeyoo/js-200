const map = new Map();

map.set('one', 1);
map.set('two', 2);


console.log('키 정보만 출력');
for (let key of map.keys()) {
    console.log(key);
}

console.log('값 정보만 출력');
for (let value of map.values()) {
    console.log(value);
}

console.log('키, 값 정보 동시 출력');
for (let [key, value] of map.entries()) {
    console.log(`${key} 키의 값은 ${value}`)
}

console.log('키, 값 정보 동시 출력');
for (let [key, value] of map) {
    console.log(`${key} 키의 값은 ${value}`)
}

console.log('forEach 정보 동시 출력');
map.forEach((val, key) => { // 값이 첫번째 파라미터, key가 두번째 파라미터
    console.log(`키는 ${key}, 값은 ${val}`);
})
