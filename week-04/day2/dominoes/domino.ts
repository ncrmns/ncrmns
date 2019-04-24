interface Comparable {
  values: number[];
  compareTo(other: Comparable): number;
  getvalue(ab:string):number;
}

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }

  getvalue(ab:string):number {
    if (ab == 'a'){
      return this.values[0];
    }
    return this.values[1];
  }

  compareTo(other: Comparable){
    if (this.getvalue('a')=== other.getvalue('a')){
      return 0;
    } else if (this.getvalue('a') < other.getvalue('a')){
      return -1;
    } else {
      return 1;
    }
  }
}

export {Domino}