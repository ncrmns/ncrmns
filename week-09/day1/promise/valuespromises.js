'use strict'
function attachTitle(string){return  'DR. ' + string };


let promise = Promise.resolve('MANHATTAN');

promise
  .then(attachTitle)
  .then(console.log);