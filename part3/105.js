const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

Object.seal(album);

album.comment = 'Answer'
console.log(album)