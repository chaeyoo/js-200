// 067 문자열 양 끝이 공백 없애기

const sentences = ['    ABC abc', 'ABC abc       ', ` first
    second third
                 forth
sentence

   `];


const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(element => {
        filtered.push(element.trim())
    });
    return filtered;
}

console.log(filterSentence(sentences));