class Dominoo {
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
}

export {Dominoo};