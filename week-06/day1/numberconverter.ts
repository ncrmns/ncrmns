'use strict';
export function numconverter(number: number) {
  const numbers: string[] = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numbers1: string[] = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const numbers2: string[] = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty']
  const places: string[] = ['', 'hundred', 'thousand', ''];

  let arr: any = number.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }
  let result: any = [];
  if (arr[arr.length - 2] != 1) { result.push(numbers[arr[arr.length - 1]]) }
  else { result.push(numbers1[arr[arr.length - 1]]) }
  if (arr[arr.length - 2] > 1) { result.unshift(numbers2[arr[arr.length - 2]]) }
  if (arr[arr.length - 3] != 0) { result.unshift(places[1]); result.unshift(numbers[arr[arr.length - 3]]) }
  if (arr[arr.length - 4] != undefined) { result.unshift(places[2]) }
  if (arr[arr.length - 5] != 1) { result.unshift(numbers[arr[arr.length - 4]]) }
  else { result.unshift(numbers1[arr[arr.length - 4]]) }
  if (arr[arr.length - 5] > 1) { result.unshift(numbers2[arr[arr.length - 5]]) }
  if (arr[arr.length - 6] != 0) { result.unshift(places[1]); result.unshift(numbers[arr[arr.length - 6]]) }
result = result.join(' ');
return result;
}
