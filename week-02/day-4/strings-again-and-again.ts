'use strict';

console.log(changer('xaaaaaaaa'));

function changer(string: string) {
    let char = '*';
    let starsno = string.match(/[char]/g).length;

    if (starsno == string.length - starsno - 1) {
        return string;
    }
    let to = string.lastIndexOf(char) + 2

    string = string.slice(0, to) + char + string.slice(to);
    return changer(string);
}