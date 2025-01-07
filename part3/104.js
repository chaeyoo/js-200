let obj = {};

obj.title = 'IDOL';
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj);