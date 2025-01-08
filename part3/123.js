// JS에서 Iteration 동작에 대한 규약으로 
// Iterable 규약과 Iterator 규약 정의

// Iterable 규약: 객체 안의 값들을 반복할 수 있도록, 반복 동작을 정의
// 객체가 반복 가능하려면 객체 내부에 @@iterator 메소드 구현
// 구현 시에 속성 키는 반드시 Symbol.iterator / 속성값은 매개변수가 없는 함수 (반복자 규약을 따르는 객체를 반환)


// Iterator 규약: 반복자 규약은 연속된 값을 만드는 방법 정의
// 반복자 규약을 충족하려면 next 메소드를 가져야 함
// 속성 키는 next()이고, 속성값은 매개변수가 없는 함수 (value와 done 속성을 가진 객체를 반환환)
const items = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];

// 반복자 객체!! (반복자 규약에 따라 next()메소드 정의)
const seq = {
    [Symbol.iterator]() { // Symbol.iterator 속성 정의 (매개변수를 받지 않고 객체를 반환하는 함수)
        let i = 0;
        return {
            next() {
                const value = items[i]; // 현재 위치의 요소 값
                i++;
                const done = i > items.length; //items의 끝에 도달했는지
                return { value, done };
            }
        }
    }
};

console.log(seq, '>>seq!!')
for (let s of seq) console.log(s);
const [a, b, c, ...arr] = seq;
console.log('a>>>', a);
console.log('b>>>', b);
console.log('c>>>', c);
console.log('arr>>>', arr);