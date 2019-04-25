
class ListOfIntegers {
  list: number[];

  constructor(list: number[]) {
    this.list = list;
  }
  sumOfElements(): number {
    let sum: number = 0;
    for (let i: number =0; i < this.list.length; i++) {
      sum += this.list[i];
      console.log(sum);
    }
    return sum;
  }
}

const arr: number[] = [3, 8, 6, 2];
const obj: ListOfIntegers = new ListOfIntegers(arr);
obj.sumOfElements();