'use strict';
import { Sharpie } from './sharpie';
import * as test from 'tape';

test('sharpie.use works?', (t:any) => {
  const sharpie: Sharpie = new Sharpie('black', 2, 5);
  sharpie.use();
  t.equal(sharpie.inkAmount,4);
  t.end()
});

test('sharpie.getInAmount() works?', (t:any) => {
  const sharpie: Sharpie = new Sharpie('black', 2 ,5);
  t.equal(sharpie.getInkAmount(), 5);
  t.end();
}) 