// 정규 표현식으로 특정 문자열을 검색한 뒤 원하는 문자열로 대체

// 문자열.replace(교체 대상 문자열 또는 정규식, 대체될 문자열 또는 함수)

console.log('2018-08-03 07-23-14'.replace('-', ':'));
console.log('2018-08-03 07-23-14'.replace(/-/g, ':')); // 일치하는 모든 문자열 변경
console.log('2018-08-03 07-23-14'.replace(/\d/g, '9')); // \d는 숫자형 값

const littleWomen = 'Meg March, Jo March, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&')); // + March: 우측에 March를 두는 모든 단어
console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, offset, s) => {
    console.log(str)
    let tag = '';
    if (/Meg/.test(str)) tag = '첫째'
    else if (/Jo/.test(str)) tag = '둘째'
    else if (/Beth/.test(str)) tag = '셋째'
    else if (/Amy/.test(str)) tag = '넷째'
    console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`);
    return tag;
}))

console.log('========================')

const name = 'March Amy';

//정규표현식의 ()로 문자열 그룹화, 표현식으로 일치한 단어들은 replace 두번째 인자에서 $1, $2 순서로 대입
console.log(name.replace(/(March) (Amy)/, '$2 $1')); // Amy March

// 정규 표현식을 적용하여 값을 구분, 함수를 통해 값을 교체
// first에는 March, second에는 Amy
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name, ${first} is first name`);
    return `${second} ${first}`
}));
