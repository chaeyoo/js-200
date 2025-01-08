const s = new Set();
s.add('one');
s.add('two');

console.log('키 정보만');
for (let key of s.keys()) {
    console.log(key)
}
console.log('값 정보만');
for (let value of s.values()) {
    console.log(value)
}

console.log('키 값 정보 동시');
for (let [key, value] of s.entries()) {
    console.log(key)
    console.log(value)
}


console.log('키 값 정보 동시');
s.forEach((value, key) => {
    console.log(key);
    console.log(value)
})
