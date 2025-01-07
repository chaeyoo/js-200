const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};
//{키: 값} => [키, 값]
const modifiedObj = Object.entries(obj);
console.log(modifiedObj);