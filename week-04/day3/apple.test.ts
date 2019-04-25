import * as test from 'tape';

class Apple {
  getApple(): string{return 'Apples' };
}

test('gives back \'Apples\'', (t: any) => {
  const apples: Apple = new Apple();

  t.equal(apples.getApple(), 'Apples');
  t.end();
});
