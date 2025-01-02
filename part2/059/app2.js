import * as add from './add.js'; // 가져온 모듈 전체를 가리키는 이름 필요

import './sideEffect.js';

console.log(add.version);
const added = add.default(1, 2);
console.log(added);

hello();