'use strict';
import * as test from 'tape';

function fibonacci(index: number):number {
  if (index==2){return 1;}
  if (index==3){return 2;}
  return fibonacci(index - 2) + fibonacci(index -1);
}

test('fibonacci test', (t:any) => {
  t.equal(fibonacci(6),8);
  t.end();
})