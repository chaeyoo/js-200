const num = 5;
const bool = true;
const str = "문자열값";
const arr = [1, 2, 3];
const obj = { a: 15 };

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

num.__proto__.toString = () => {
    return 'toString 덮어쓰기';
}