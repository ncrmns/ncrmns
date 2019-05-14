'use strict';
let list: number[] = [ 2, 2, 2, 1, 1 ];
console.log(potter(list));

export function potter(list : number[]): number {
  list.sort().reverse();
  let result:number = 0;

  while (list[0]>1 && list[1]>1 && list[2]>1 && list[3]>0 && list[4]>0){
    result += 2*4*8*0.8;
    list[0] -= 2;
    list[1] -= 2;
    list[2] -= 2;
    list[3]--;
    list[4]--;
  }

  while (list[0] > 0){
    if (list[1] > 0){
      if (list[2] > 0){
        if (list[3] > 0){
          if (list[4] > 0){
            result += (5*8)*0.75;
            list[0]--;
            list[1]--;
            list[2]--;
            list[3]--;
            list[4]--;
          }else{
            result += (4*8)*0.8;
            list[0]--;
            list[1]--;
            list[2]--;
            list[3]--;
          }
        }else{
          result += (3*8)*0.9;
          list[0]--;
          list[1]--;
          list[2]--;
        }
      }else{
        result += (2*8)*0.95;
        list[0]--;
        list[1]--;
      }
    }else{
      result += 8 ;
      list[0]--;
    }
  }
  return result;
}
