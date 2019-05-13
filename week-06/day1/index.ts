'use strict';
export function index(arr: string,value: string):number{
  for (let i: number =0; i<arr.length; i++){
    if (arr[i]===value){
      return i;
    }
  }
  return -1;
}