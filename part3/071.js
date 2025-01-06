const arr = ['short', 'long sentance', 'it is not appreciate'];

arr.forEach((str) => {
    if (str.length < 10) {
        console.log(str);
    }
})