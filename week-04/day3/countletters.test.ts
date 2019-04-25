// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, 
// and numbers as values that shows how many occurrences there are.
// Create a test for that.
'use strict';
import * as test from 'tape';

function dictionary(a:string):object {
  let chars: string[] = a.split('');
  let objkeys: string[] = a.split('').sort().filter((v, i, a) => a.indexOf(v) === i); 
  let obj = {};
  for (let i:number = 0 ; i< objkeys.length ; i++){
    obj[objkeys[i]] = 0;
  }
  for (let i:number= 0 ; i < chars.length; i++){
    obj[chars[i]]++;
  }
  delete obj[' '];
  return obj;
}
//builds keys
test('chartest', (t:any) =>{
  let actual = dictionary('string');
  let expected: object = {
    'g' : 1,
    'i' : 1,
    'n' : 1,
    'r' : 1,
    's' : 1,
    't' : 1
  }
  t.deepEqual(actual,expected);
  t.end();
});
//counts occurances
test('chartest', (t:any) =>{
  let actual = dictionary('sttring');
  let expected: object = {
    'g' : 1,
    'i' : 1,
    'n' : 1,
    'r' : 1,
    's' : 1,
    't' : 2
  }
  t.deepEqual(actual,expected);
  t.end();
});
//counts no spaces
test('chartest', (t:any) =>{
  let actual = dictionary('s t r i n g');
  let expected: object = {
    'g' : 1,
    'i' : 1,
    'n' : 1,
    'r' : 1,
    's' : 1,
    't' : 1
  }
  t.deepEqual(actual,expected);
  t.end();
});
///empty string
test('chartest', (t:any) =>{
  let actual = dictionary('');
  let expected: object = {};
  t.deepEqual(actual,expected);
  t.end();
});
