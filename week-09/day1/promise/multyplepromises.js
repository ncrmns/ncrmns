'use strict'
first()
.then(message => second(message))
.then(console.log);