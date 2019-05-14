import * as test from 'tape';
import {numconverter} from './numberconverter';

test('test 123456', t=> {
  t.equal(numconverter(123456),'one hundred twenty three thousand four hundred fifty six');
  t.end();
})