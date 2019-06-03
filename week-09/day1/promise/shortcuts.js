'use strict'
let promise = Promise.resolve('RESOLVE');
let promise2 = Promise.reject(new Error('REJECTED'));

promise.then(console.log);
promise2.catch(error=>console.error(error.message));