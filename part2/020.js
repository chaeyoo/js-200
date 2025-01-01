// 020 템플릿 문자열 이해하기

// ``으로 작성하는 ES6에 추가된 String

var cart = [
    { name: '옷', price: 2000 },
    { name: '가방', price: 1000 },
];

var numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`;
var cartTable =
    `<ul>
    <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>
</ul>
`

console.log(numOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello ' + personName;
var helloTemplateString = `hello ${personName}`;

console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);