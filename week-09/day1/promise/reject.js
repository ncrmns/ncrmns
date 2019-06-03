'use strict'
var promise = new Promise(function (fulfill, reject) {
  setTimeout(()=>reject(new Error),300);
});

function onReject (error) {
  console.log('REJECTED!');
}

promise
  .then(undefined,error=>onReject(error));