// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empyt list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

import * as test from 'tape';
import { listenerCount } from 'cluster';

class ListOfIntegers {
  list: number[];

  constructor(list: number[]) {
    this.list = list;

  }
  sumOfElements(): number {
    let sum: number = 0;
    for (let i: number = 0; i < this.list.length; i++) {
      sum += this.list[i];
    }
    return sum;
  }
}

test('sums up array elements', (t: any) => {
  const arr: number[] = [];
  const obj: ListOfIntegers = new ListOfIntegers(arr);

  t.equal(obj.sumOfElements(), 0);
  t.end();
});

test('sums up array elements', (t: any) => {
  const arr: number[] = [2];
  const obj: ListOfIntegers = new ListOfIntegers(arr);

  t.equal(obj.sumOfElements(), 2);
  t.end();
});

test('sums up array elements', (t: any) => {
  const arr: number[] = [3, 8, 6, 2];
  const obj: ListOfIntegers = new ListOfIntegers(arr);

  t.equal(obj.sumOfElements(), 19);
  t.end();
});