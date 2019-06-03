'use strict'
function parsePromised(data) {
  return new Promise((resolve, reject) => {
    try {
      JSON.parse(data)
      resolve();

    } catch (e) {
      reject(e.message);
    }
  });
}

parsePromised({})
  .catch(console.log)