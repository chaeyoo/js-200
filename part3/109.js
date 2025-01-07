const generateRandom = (min, max) => {
    // console.log((max - min + 1) + min)
    // min ~ max 사이 무작위 실수값
    // console.log(Math.random() * (max - min + 1) + min)
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateRandom(1, 10))

for (let i = 0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}

for (let i = 0; i < 5; i++) {
    console.log(generateRandom(10, 100));
}