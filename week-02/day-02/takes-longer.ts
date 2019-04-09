'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let inx=quote.indexOf('It you');
let pc1=quote.slice(0,inx+2);
let pc3=quote.slice(inx+2);
let pc2=' always takes longer than';
quote=pc1.concat(pc2.concat(pc3))



console.log(quote);






