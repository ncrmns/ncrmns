// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict';
import * as test from 'tape';

function Anagramms(a: string, b: string): boolean {
  if (a.split('').sort().join() === b.split('').sort().join()) {
    return true;
  }
  return false;
}

test('anagramma', (t: any) => {
  const a: string = 'anagramma';
  const b: string = 'nagarmama';
  t.equal(Anagramms(a,b),true)
  t.end();
})