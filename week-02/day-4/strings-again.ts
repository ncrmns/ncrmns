'use strict';

console.log(changer('xaxx'));


function changer(string: string) {
    if (string.indexOf('x') === -1) {
        return string;
    }
    return changer(string.replace('x',''));
}