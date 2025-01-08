const map = new Map();
for (let num of [1, 2, 3, 4, 5]) {
    map.set((value) => value * 2, num); //  함수형 키와 숫자형 값
}

for (let [func, value] of map) {
    console.log(func(value));
}

