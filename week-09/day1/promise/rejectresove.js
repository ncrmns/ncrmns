'use strict'
let promise = new Promise((fulfill,reject)=>{
  fulfill('I FIRED')
  reject(new Error('I DID NOT FIRE'));
}); 

function onRejected(error){
  console.error(error);
};

promise.then(console.log, (error)=>onRejected(error));
